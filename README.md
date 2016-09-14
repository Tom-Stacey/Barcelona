# barcelona  

## Requirements  
NodeJS  
NPM  

## Build & development  

To run the project, install NodeJS and NPM to your machine.  
Install your dependencies with the following commands from the repo's root directory:  
npm install  
bower install  

you can then build the project with:  
grunt  

and preview the application with:  
grunt serve  

## Login details
To log in to the service use:  
username: tom@qa.com  
password: pass

## Run end-to-end UI tests with Protractor & WebDriver Manager :
1. Ensure Node and NPM are installed on your machine. - https://nodejs.org/en/
2. Install WebDriver manager through NPM on your machine with - `npm install -g webdriver-manager`
3. Boot app locally in cmd/terminal shell with `grunt serve` as mentioned above.
4. Update WebDriver manager with - `webdriver-manager update`
5. Start the webdriver manager localhost server in a new cmd/terminal shell - `webdriver-manager start`
6. cd into spec directory and run the Protractor configuration file with `protractor conf.js` (NOTE : This is where you will specify the config for your tests i.e which specs to run, which browser you wish to them to run in, you can add mocked features or services here to speed up end-to-end tests with WebDriver and time intervals for each test etc...)
