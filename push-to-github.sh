#!/bin/bash

# MetricFlow - GitHub Push Script
# This script will push your dashboard to GitHub

echo "🚀 MetricFlow GitHub Setup"
echo "=========================="
echo ""

# Check if remote already exists
if git remote | grep -q "origin"; then
    echo "✓ Remote 'origin' already exists"
else
    echo "Please enter your GitHub username:"
    read github_username
    
    echo ""
    echo "Setting up remote repository..."
    git remote add origin "https://github.com/$github_username/founder-dashboard.git"
    echo "✓ Remote added"
fi

echo ""
echo "Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Complete!"
echo ""
echo "Your dashboard is now on GitHub at:"
echo "https://github.com/YOUR_USERNAME/founder-dashboard"
echo ""
echo "Next steps:"
echo "1. Visit your repository on GitHub"
echo "2. Deploy to Vercel: https://vercel.com"
echo "3. Share your portfolio piece!"
