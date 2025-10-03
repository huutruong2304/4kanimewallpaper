#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Navigate to project directory
cd /var/www/4kanimewallpaper

# Save local changes (if any)
git stash

# Pull the latest code from Git
git pull origin main

# Install dependencies
npm install

# Uncomment the next line if you need to edit environment variables before build
nano .env

# Build the project
npm run build

# Reload pm2 processes
pm2 reload all

echo "✅ Deployment completed successfully!"
