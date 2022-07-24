# How-to-Deploy-Heroku

## [visit the demo app deployed on Heroku](https://first-heroku-raj.herokuapp.com/)

### Step-1: Add this code in index.js
-------------------------
const PORT = process.env.PORT

### Step-2: Create a file with this name
------------------------------------------
Procfile

### Step-3: Procfile file contains
-----------------------
web: node index.js

### Step-4: Create a file .gitignore and it cntains
---------------------------------------
node_modules

### Step-5: Deploy using Heroku Git
------------------------
If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

$ heroku login
Clone the repository
Use Git to clone first-heroku-raj's source code to your local machine.

$ heroku git:clone -a first-heroku-raj 
$ cd first-heroku-raj
Deploy your changes
Make some changes to the code you just cloned and deploy them to Heroku using Git.

$ git add .
$ git commit -am "make it better"
$ git push heroku master

### Step-6: Click on Open App
