# ConverterJSON_CSObject
Converter json into usable C# code for form object

## Objectives
 - input json from url in code
 - return CS usable code
 - no errors

## Parameters
 - app in nodejs
 - return it in a file generated
 - Use Flux pattern

## Infos
 - input json, get C# code
 - exemple in resources/template.txt
 - getter json will get 2 more params : errors{bool} and errorsLog{string}
 - errors say if there is any errors{bool}, and errorsLogs is an description of the error
 - if there is no errors: "errors": false, "errorsLog": 'null'