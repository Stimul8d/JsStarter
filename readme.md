mkdir X
mkdir src
mkdir bin

npm init
npm install --save-dev babel-cli babel-preset-es2015 babel-preset-stage-0 copyfiles rimraf

touch .babelrc 
{
  "presets": ["es2015", "stage-0"]
}

add clean script - "clean": "rimraf ./bin && mkdir bin",
add copy script - "copy": "copyfiles -f ./src/*.html ./bin/" //-f flattens file structure"
add start script - "start": "babel src -d bin"

touch index.html
<!doctype html>
<html>
    <head>
        <title>Boom!</title>
        <link rel="stylesheet" href="app.js">
    </head>
    <body>
    </body>
</html>

touch app.js

