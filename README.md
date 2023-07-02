# OpenAI-Proxy-Forward
A cloudflare worker agent of the OpenAI API allows forwarding only for the specified domain name.
## How to Use
1. Change the yourdomain in proxy.js to domain(e.g., yourdomain.com) which make this proxy only accept your domain.
2. Create a new cloudflare worker, copy the proxy.js codes into it, save and deploy.