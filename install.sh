#!/bin/sh

pythonVersion="3.12.4"
nodeVersion="22.5.1"

# Install wget
echo "Installing wget..."
choco install wget -y

# Install git
echo "Installing git..."
choco install git -y

# Download Python using Chocolatey
echo "Installing Python..."
choco install python --version=$pythonVersion -y

# Node.js installation
echo "Installing Node.js..."
choco install nodejs --version=$nodeVersion -y

# PNPM installation
echo "Installing PNPM..."
npm install -g pnpm

# Configure frontend
echo "Configuring frontend..."
cd AdmPage/frontend
pnpm install
pnpm build

# Configure backend Python
echo "Configuring backend (Python)..."
cd ../backend
python -m venv env
.\env\Scripts\activate

pip install --upgrade pip
pip install python-dotenv
pip install fastapi
pip install "fastapi[standard]"
pip install pymongo
pip install uvicorn

# Install .NET SDK and Visual Studio Code
echo "Installing .NET SDK and Visual Studio Code..."
choco install dotnet-sdk -y
choco install vscode -y

# Install C# extension for VS Code
echo "Installing C# extension for Visual Studio Code..."
code --install-extension ms-dotnettools.csharp

# Restore .NET dependencies
echo "Restoring .NET dependencies..."
cd ../../joinPage/backend/backend
dotnet restore

# Finish
cd ../../../
echo "Installation and setup completed."
