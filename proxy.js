const PURPOSE_URL = 'https://api.openai.com';
const ALLOWED_DOMAIN = 'youdomain';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    try {
      const referer = request.headers.get("Referer");
      if (!referer || !referer.includes(ALLOWED_DOMAIN)) {
        return new Response('Unauthorized request', {status: 401});
      }
      
      const url = new URL(request.url);
      const headers_Origin = request.headers.get("Access-Control-Allow-Origin") || "*"
      url.host = PURPOSE_URL.replace(/^https?:\/\//, '');
      const modifiedRequest = new Request(url.toString(), {
        headers: request.headers,
        method: request.method,
        body: request.body,
        redirect: 'follow'
      });
      const response = await fetch(modifiedRequest);
      const modifiedResponse = new Response(response.body, response);
      modifiedResponse.headers.set('Access-Control-Allow-Origin', headers_Origin);
      
      // Add security headers
      modifiedResponse.headers.set('Content-Security-Policy', "default-src 'self'");
      modifiedResponse.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
      modifiedResponse.headers.set('X-Content-Type-Options', 'nosniff');
      modifiedResponse.headers.set('X-Frame-Options', 'SAMEORIGIN');
      modifiedResponse.headers.set('X-XSS-Protection', '1; mode=block');
      
      return modifiedResponse;
    } catch (e) {
      return new Response(e.stack, {status: 500});
    }
  }
