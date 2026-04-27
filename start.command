#!/bin/bash

# Navigate to the directory where this script is located
cd "$(dirname "$0")"

# Print status
echo "==============================================="
echo "   Starting Hexa Genisys Agency local server   "
echo "==============================================="

# Add typical Node.js installation paths to the environment so it doesn't fail when clicked
export PATH="/usr/local/bin:/opt/homebrew/bin:~/.nvm/versions/node/$(node -v 2>/dev/null)/bin:$PATH"

# Ensure npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ Error: 'npm' command not found."
    echo "Please ensure Node.js and npm are installed on your Mac."
    echo "Press any key to exit..."
    read -n 1
    exit 1
fi

echo "📦 Installing Node dependencies (this might take a second)..."
# Using legacy-peer-deps to avoid React 19 / Three.js strict peer conflicts
npm install --legacy-peer-deps

echo "🚀 Starting Vite Dev Server and opening in your default browser..."
npm run dev -- --open
