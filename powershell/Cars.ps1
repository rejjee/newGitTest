[xml]$XmlDocument = Get-Content C:\dev\powershell\cars.xml
$XmlDocument.Cars.Car | where-object {$_.Make -eq 'Ford'} | Select -ExpandProperty 'Seats'