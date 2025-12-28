#!/bin/bash

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Navigate to project directory
cd /Users/luna/Documents/KogniPlay

echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "🚀 Starting server..."
echo "   The server will run on http://localhost:3000"
echo "   Press Ctrl+C to stop the server"
echo ""

npm start

