Write-Output "admin"

function Start-ProcessInNewWindow {
  param (
      [string]$cmd,
      [string]$workingDirectory
  )

  Start-Process -FilePath "powershell" -ArgumentList "-NoExit -Command $cmd" -WorkingDirectory $workingDirectory
}

$backendPath = ".\AdmPage\backend"
$frontendPath = ".\AdmPage\frontend"

$backendCMD = ".\env\Scripts\activate ; fastapi dev backend.py"
$frontendCMD = "pnpm run dev"

Start-ProcessInNewWindow -cmd $backendCMD -workingDirectory $backendPath

Start-ProcessInNewWindow -cmd $frontendCMD -workingDirectory $frontendPath

$urls = @(
  "http://localhost:3000/"
)

Start-Sleep -Seconds 3
foreach ($url in $urls){
  Start-Process $url
}