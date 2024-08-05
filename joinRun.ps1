Write-Output 'Join'
 
function Start-ProcessInNewWindow {
  param (
      [string]$cmd,
      [string]$workingDirectory
  )

  Start-Process -FilePath "powershell" -ArgumentList "-NoExit -Command $cmd" -WorkingDirectory $workingDirectory
}

$backendPath = ".\joinPage\backend\backend"
$frontendPath = ".\joinPage\frontend"

$backendCMD = "dotnet run"
$frontendCMD = "pnpm run dev"

Start-ProcessInNewWindow -cmd $backendCMD -workingDirectory $backendPath

Start-ProcessInNewWindow -cmd $frontendCMD -workingDirectory $frontendPath

$urls = @(
  "http://localhost:5173/",
  "http://localhost:5001/swagger/index.html"
)

Start-Sleep -Seconds 3
foreach ($url in $urls){
  Start-Process $url
}