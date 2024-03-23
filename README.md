# TogetherAI-Proxy

A [Cloudflare](https://www.cloudflare.com) worker agent of the Together API allows forwarding only for the specified domain name.
Cloudflare provides content delivery network (CDN) services, DDoS mitigation, Internet security and distributed domain name server (DNS) services, sitting between the visitor and the Cloudflare user's hosting provider, acting as a reverse proxy for websites.

## How to Use

1. Change the yourdomain in proxy.js to domain(e.g., yourdomain.com) which make this proxy only accept your domain.
   
2. Create a new cloudflare worker, copy the proxy.js codes into it, save and deploy.
