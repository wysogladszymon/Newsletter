#!/bin/sh

$pythonVersion="3.12.4"
$nodeVersion="22.5.1"
# install wget
echo "installing wget"
choco install wget -y

# download python using chocolatey
echo "installing python"
choco install python --version=$pythonVersion

# node installation
echo "installing nodejs"
choco install nodejs --version="$nodeVersion"

# pnpm installation
echo "installing pnpm"
npm install pnpm