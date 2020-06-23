[xml]$config = Get-Content C:\dev\powershell\app.config
$config.configuration.appsetting.add | where-object {$_.key -eq 'source'} | Select -ExpandProperty 'value' -first 1