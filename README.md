# ConverterJSON_CSObject
Converter json into usable C# code for form object

## Objectives
 - input json from url in code
 - return CS usable code
 - no errors

## Parameters
 - app in nodejs, so you'll need nodejs and npm
 - return it in a file generated
 - Use Flux pattern

## Infos
 - input json, get C# code
 - exemple in resources/template.txt
 - getter json will get 2 more params : errors{bool} and errorsLog{string}
 - errors say if there is any errors{bool}, and errorsLogs is an description of the error
 - if there is no errors: "errors": false, "errorsLog": 'null'

### Usage
 1. install all packages needed ("npm install")
 2. create the json file with the template
 3. run "node ./app/core/app.js"
 4. get the output in ./resources/outfile.txt

## technical infos
 packages used : express, http and fs
 i don't use TS, because i don't like overlay and i don't know the response with nodejs
 I'd tried to respect the Flux schema :
 	the class Initializer (the one who try to get json file) don't know the output
 	the output class don't know initial file

 I used global variables to listen on their changement, this'll be used to continue the program :
   when the data's gotted, set a global variable
   when the global variable's modified, start the code generation