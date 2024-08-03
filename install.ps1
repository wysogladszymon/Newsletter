# PowerShell script for setting up the environment

# Variables
$pythonVersion = "3.12.4"
$nodeVersion = "22.5.1"

# Install wget
Write-Output "Installing wget..."
choco install wget -y

# Install git
Write-Output "Installing git..."
choco install git -y

# Download Python using Chocolatey
Write-Output "Installing Python..."
choco install python --version=$pythonVersion -y

# Node.js installation
Write-Output "Installing Node.js..."
choco install nodejs --version=$nodeVersion -y

# PNPM installation
Write-Output "Installing PNPM..."
npm install -g pnpm

# Configure frontend
Write-Output "Configuring frontend..."
cd AdmPage/frontend
pnpm install
cd ../..  # Go back to the initial directory

# Configure backend Python
Write-Output "Configuring backend (Python)..."
cd AdmPage/backend
if (Test-Path -Path "env.txt"){
  Get-Content -Path "env.txt" | Add-Content -Path ".env"
  Write-Output "utworzono .env"
}else{
  Write-Output "Problem z utworzeniem .env"
}

python -m venv env
.\env\Scripts\Activate.ps1

pip install --upgrade pip
pip install python-dotenv fastapi "fastapi[standard]" pymongo uvicorn
deactivate  # Deactivate the Python virtual environment

# Install .NET SDK and Visual Studio Code
Write-Output "Installing .NET SDK and Visual Studio Code..."
choco install dotnet-sdk -y
choco install vscode -y

# Install C# extension for VS Code
Write-Output "Installing C# extension for Visual Studio Code..."
code --install-extension ms-dotnettools.csharp

# Restore .NET dependencies
Write-Output "Restoring .NET dependencies..."
cd ../../joinPage/backend/backend
Add-Content -Path '.env' -Value "MONGO_DB_PASSWORD="
dotnet restore

# Finish
cd ../../..  # Go back to the initial directory
Write-Output "Installation and setup completed."