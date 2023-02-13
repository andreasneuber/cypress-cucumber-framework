# CYPRESS Introduction

Cypress is the automation tool which helps to automate the real time browsers which are mainly related to chromium

## jsconfig.json

This file contains the set of values which helps to provide cypress commands intellisense for the entire project

## cypress.json

It consists of cypress configuration related values

## cypress.env.json

It consists of environmental variables

## commands to execute the cypress scripts

install all npm dependencies by running below command -
"npm install"  

### Run via UI

cypress page displays by running below command -
"npm run cy:open"
clcik on login.feature link under Integration folder

### Run with command

Tag the scenarios with "@regression" and update the env tags in cypress.json file
"env": {
      "TAGS": "@regression"
  }
Run below command, then only regression test suite executes
npm run cypress

Html & Json Reports will get generated 

## Automation scripts creation process

1. Create the feature files and place it under integration folder
2. Create the step definition files and place it under integration/step_definitions/
    - Step definition file name should have same name as feature file name
    Eg : login.feature -> login.js as step definition file

## Set up the allure reporter

1. Install the Allure-reporter and allure-commandline
    npm i -D mocha-allure-reporter
    npm i -D allure-commandline
2. Install mocha reporter
    mocha --reporter mocha-allure-reporter

## Best Practices
