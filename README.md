# Sintam-se Abraçados — Marketing Site

Modern marketing website for property management, investment consulting, and vehicle services in Lisbon.

## Commands
- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`

## Deployment to VPS (nginx)

### Prerequisites
- VPS with nginx installed
- Domain DNS configured: `propertymanagement.kirkdaledigital.co.uk` pointing to your VPS IP
- SSH access to the VPS

### Step 1: Build the Application

On your local machine or CI/CD:

```bash
npm install
npm run build
```

This generates a `dist/` directory with all static files.

### Step 2: Transfer Files to VPS

**Option A: Using SCP**

```bash
# Create deployment directory on VPS (run on VPS first)
# ssh user@your-vps-ip
# sudo mkdir -p /var/www/propertymanagement.kirkdaledigital.co.uk
# sudo chown -R $USER:$USER /var/www/propertymanagement.kirkdaledigital.co.uk

# Transfer files from local machine
scp -r dist/* user@your-vps-ip:/var/www/propertymanagement.kirkdaledigital.co.uk/
```

**Option B: Using rsync (recommended for updates)**

```bash
rsync -avz --delete dist/ user@your-vps-ip:/var/www/propertymanagement.kirkdaledigital.co.uk/
```

**Option C: Using Git**

```bash
# On VPS, clone and build
git clone <your-repo-url> /var/www/propertymanagement.kirkdaledigital.co.uk
cd /var/www/propertymanagement.kirkdaledigital.co.uk
npm install
npm run build
# Then configure nginx to serve from /var/www/propertymanagement.kirkdaledigital.co.uk/dist
```

### Step 3: Configure Nginx

**On your VPS:**

1. Copy the nginx configuration:
   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/propertymanagement.kirkdaledigital.co.uk
   ```

2. Create a symbolic link to enable the site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/propertymanagement.kirkdaledigital.co.uk /etc/nginx/sites-enabled/
   ```

3. Update the root path in the config file if needed:
   ```bash
   sudo nano /etc/nginx/sites-available/propertymanagement.kirkdaledigital.co.uk
   # Update the `root` directive to match your deployment path
   ```

4. Test nginx configuration:
   ```bash
   sudo nginx -t
   ```

5. Reload nginx:
   ```bash
   sudo systemctl reload nginx
   ```

### Step 4: Set Up SSL (Let's Encrypt)

**Recommended: Use Certbot for free SSL certificates**

```bash
# Install certbot (if not already installed)
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Obtain SSL certificate
sudo certbot --nginx -d propertymanagement.kirkdaledigital.co.uk

# Certbot will automatically configure nginx for HTTPS
# After SSL setup, uncomment the HTTPS server block in nginx.conf
```

### Step 5: Verify Deployment

1. Visit `http://propertymanagement.kirkdaledigital.co.uk` (or HTTPS after SSL setup)
2. Test all routes (Home, Services, About, Locations, Contact)
3. Check mobile responsiveness
4. Verify language toggle (EN/PT-PT)

### Updating the Site

To update the site after making changes:

```bash
# On local machine or CI/CD
npm run build

# Transfer new build to VPS
rsync -avz --delete dist/ user@your-vps-ip:/var/www/propertymanagement.kirkdaledigital.co.uk/
```

### Troubleshooting

**Check nginx logs:**
```bash
sudo tail -f /var/log/nginx/propertymanagement.kirkdaledigital.co.uk.error.log
sudo tail -f /var/log/nginx/propertymanagement.kirkdaledigital.co.uk.access.log
```

**Common issues:**
- **404 errors on routes**: Ensure `try_files $uri $uri/ /index.html;` is in the nginx config
- **Permission errors**: Ensure nginx user has read access: `sudo chown -R www-data:www-data /var/www/propertymanagement.kirkdaledigital.co.uk`
- **SSL issues**: Verify DNS is correct and certificate is valid

### Deployment Paths

- **Nginx config**: `/etc/nginx/sites-available/propertymanagement.kirkdaledigital.co.uk`
- **Web root**: `/var/www/propertymanagement.kirkdaledigital.co.uk`
- **Logs**: `/var/log/nginx/propertymanagement.kirkdaledigital.co.uk.*.log`

---

## Update Contact Details

Update these files when contact information changes:

- **Utility bar (phone/email)**: `src/components/Navbar.tsx` (lines ~148-156)
- **Footer contact info**: `src/components/Footer.tsx`
- **WhatsApp link**: `src/components/WhatsAppFloatingButton.tsx`
- **Customer Portal link**: `src/components/Navbar.tsx` and `src/pages/Home.tsx`
- **Mailto fallback**: Generated from `src/components/ContactForm.tsx`

After updating contact details, rebuild and redeploy:

```bash
npm run build
rsync -avz --delete dist/ user@your-vps-ip:/var/www/propertymanagement.kirkdaledigital.co.uk/
```
