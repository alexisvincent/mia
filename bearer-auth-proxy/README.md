# Bearer Auth Proxy

A simple Nginx reverse proxy that authenticates requests using a pre-shared bearer token.

## Features

- **Bearer Token Authentication**: Only proxies requests with valid `Authorization: Bearer <token>` header
- **Simple Configuration**: Single bearer token defined in nginx config
- **Header Forwarding**: Preserves original request headers (Host, X-Real-IP, X-Forwarded-For, etc.)
- **Docker Ready**: Includes docker-compose setup for easy deployment

## Setup

1. **Configure the bearer token**:
   - Edit `nginx.conf` and replace `YOUR_SECRET_TOKEN_HERE` with your actual secret token

2. **Configure the backend**:
   - Edit the `upstream backend` section in `nginx.conf` to point to your backend server
   - Default is `localhost:8080`

3. **Run with Docker** (recommended):
   ```bash
   docker-compose up -d
   ```

4. **Or run with Nginx directly**:
   ```bash
   nginx -c $(pwd)/nginx.conf
   ```

## Usage

### Valid Request (will be proxied):
```bash
curl -H "Authorization: Bearer YOUR_SECRET_TOKEN_HERE" http://localhost:8000/your-endpoint
```

### Invalid Request (will return 401):
```bash
# No token
curl http://localhost:8000/your-endpoint

# Wrong token
curl -H "Authorization: Bearer wrong-token" http://localhost:8000/your-endpoint
```

## Configuration

### nginx.conf

Key configuration sections:

1. **Token validation** (lines 8-11):
   ```nginx
   map $http_authorization $token_valid {
       default 0;
       "Bearer YOUR_SECRET_TOKEN_HERE" 1;
   }
   ```
   Change `YOUR_SECRET_TOKEN_HERE` to your actual token.

2. **Backend upstream** (lines 35-37):
   ```nginx
   upstream backend {
       server localhost:8080;
   }
   ```
   Change to point to your actual backend server.

3. **Port** (line 14):
   ```nginx
   listen 80;
   ```
   The proxy listens on port 80 by default (mapped to 8000 in docker-compose).

## Security Notes

- Store your bearer token securely (use environment variables or secrets management in production)
- Consider using HTTPS in production
- The current config removes the Authorization header before proxying (optional, see commented line in nginx.conf)

## License

MIT
