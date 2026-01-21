# Deployment Guide: propertymanagement.kirkdaledigital.co.uk

Quick reference guide for deploying the Sintam-se Abraçados website to the VPS.

## Quick Deploy Commands

### 1. Build locally
```bash
npm run build
```

### 2. Deploy to VPS (replace `user@vps-ip` with your credentials)
```bash
rsync -avz --delete dist/ user@vps-ip:/var/www/propertymanagement.kirkdaledigital.co.uk/
```

### 3. On VPS - Reload nginx
```bash
ssh user@vps-ip
sudo systemctl reload nginx
```

## Initial Setup (One-time)

### 1. Create deployment directory on VPS
```bash
ssh user@vps-ip
sudo mkdir -p /var/www/propertymanagement.kirkdaledigital.co.uk
sudo chown -R $USER:www-data /var/www/propertymanagement.kirkdaledigital.co.uk
chmod -R 755 /var/www/propertymanagement.kirkdaledigital.co.uk
```

### 2. Copy nginx config
```bash
# From your local machine
scp nginx.conf user@vps-ip:/tmp/

# On VPS
sudo mv /tmp/nginx.conf /etc/nginx/sites-available/propertymanagement.kirkdaledigital.co.uk
sudo ln -s /etc/nginx/sites-available/propertymanagement.kirkdaledigital.co.uk /etc/nginx/sites-enabled/
```

### 3. Test and reload nginx
```bash
sudo nginx -t
sudo systemctl reload nginx
```

### 4. Set up SSL (Let's Encrypt)
```bash
sudo certbot --nginx -d propertymanagement.kirkdaledigital.co.uk
```

After SSL setup, edit the nginx config and uncomment the HTTPS server block.

## File Locations

- **Web root**: `/var/www/propertymanagement.kirkdaledigital.co.uk`
- **Nginx config**: `/etc/nginx/sites-available/propertymanagement.kirkdaledigital.co.uk`
- **Error logs**: `/var/log/nginx/propertymanagement.kirkdaledigital.co.uk.error.log`
- **Access logs**: `/var/log/nginx/propertymanagement.kirkdaledigital.co.uk.access.log`

## Verify Deployment

1. Visit: `https://propertymanagement.kirkdaledigital.co.uk`
2. Test navigation (all routes should work)
3. Test mobile menu
4. Test language toggle (EN/PT-PT)
5. Check contact form

## DNS Configuration

Ensure DNS A record points to your VPS IP:
```
Type: A
Name: propertymanagement
Value: <your-vps-ip>
TTL: 3600
```

## Troubleshooting

**View error logs:**
```bash
sudo tail -f /var/log/nginx/propertymanagement.kirkdaledigital.co.uk.error.log
```

**Check nginx status:**
```bash
sudo systemctl status nginx
```

**Test nginx config:**
```bash
sudo nginx -t
```

**Common fixes:**
- 404 on routes: Verify `try_files $uri $uri/ /index.html;` in nginx config
- Permission denied: `sudo chown -R www-data:www-data /var/www/propertymanagement.kirkdaledigital.co.uk`
- SSL issues: Check DNS and certificate expiry: `sudo certbot certificates`
