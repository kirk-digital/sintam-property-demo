#!/bin/bash

# Deployment script for propertymanagement.kirkdaledigital.co.uk
# Usage: ./deploy.sh [user@host]

set -e

# Configuration
VPS_USER="${1:-user@your-vps-ip}"
DEPLOY_PATH="/var/www/propertymanagement.kirkdaledigital.co.uk"
SITE_NAME="propertymanagement.kirkdaledigital.co.uk"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Deploying Sintam-se Abraçados website${NC}"
echo ""

# Step 1: Build the application
echo -e "${YELLOW}📦 Building application...${NC}"
npm run build

if [ ! -d "dist" ]; then
    echo -e "${RED}❌ Build failed: dist/ directory not found${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed${NC}"
echo ""

# Step 2: Transfer files to VPS
echo -e "${YELLOW}📤 Uploading files to VPS...${NC}"
echo "Target: ${VPS_USER}:${DEPLOY_PATH}"

rsync -avz --delete \
    --exclude='.git' \
    --exclude='node_modules' \
    dist/ \
    "${VPS_USER}:${DEPLOY_PATH}/"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Files uploaded successfully${NC}"
else
    echo -e "${RED}❌ Upload failed${NC}"
    exit 1
fi

echo ""

# Step 3: Reload nginx on VPS
echo -e "${YELLOW}🔄 Reloading nginx on VPS...${NC}"
ssh "${VPS_USER}" "sudo systemctl reload nginx"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Nginx reloaded successfully${NC}"
else
    echo -e "${RED}❌ Failed to reload nginx${NC}"
    echo -e "${YELLOW}⚠️  You may need to reload manually: ssh ${VPS_USER} 'sudo systemctl reload nginx'${NC}"
fi

echo ""
echo -e "${GREEN}🎉 Deployment complete!${NC}"
echo -e "Visit: https://${SITE_NAME}"
echo ""
