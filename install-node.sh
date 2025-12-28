#!/bin/bash

echo "🚀 Installing Node.js for KogniPlay..."
echo ""

# Check if Node.js is already installed
if command -v node &> /dev/null; then
    echo "✅ Node.js is already installed!"
    node --version
    npm --version
    exit 0
fi

# Try to use nvm if available
if [ -s "$HOME/.nvm/nvm.sh" ]; then
    echo "📦 Using nvm to install Node.js..."
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    nvm install --lts
    nvm use --lts
    nvm alias default node
    
    if command -v node &> /dev/null; then
        echo "✅ Node.js installed successfully!"
        node --version
        npm --version
        exit 0
    fi
fi

echo "❌ Node.js installation failed via nvm."
echo ""
echo "Please install Node.js manually:"
echo "1. Go to: https://nodejs.org/"
echo "2. Download the LTS version (macOS Installer)"
echo "3. Run the installer"
echo "4. Restart your terminal"
echo "5. Run this script again or run: npm install"

