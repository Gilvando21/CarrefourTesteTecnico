
# Mobile Automation Technical Test

<<<<<<< HEAD
Automation project created for the Carrefour QA Automation technical challenge.

## Mobile Automation
Tools:
- WebdriverIO
- Appium
- Mocha
- Chai

Features:
- Android and iOS execution
- 10 automated mobile scenarios

## API Automation
Tools:
- Supertest
- Mocha
- Chai

Features:
- JWT authentication
- Full CRUD coverage

## CI/CD
Pipeline configured using GitLab CI.

## Author
Gilvando De Sena Matos

LinkedIn:
https://www.linkedin.com/in/gilvando-matos-3a259821/
=======
Mobile automation project developed using WebdriverIO, Appium, Mocha and Chai.

## Technologies
JavaScript  
WebdriverIO  
Appium  
Mocha  
Chai  
Allure Report  

## Project Structure

test/specs -> test scenarios  
test/pageobjects -> page objects for UI interaction  
test/utils -> reusable utilities  
data -> test data used for data-driven execution  

## Test Strategy

The automated tests focus on validating the main user flows of the application:

• Authentication (login scenarios)  
• Navigation between screens  
• Form interaction  
• UI element validation  

The tests follow the Page Object Model pattern to improve maintainability
and separation between test logic and UI interaction.

Test data is externalized using JSON files to support data-driven execution.

## Test Coverage

Login scenarios  
Navigation between screens  
Form interaction  
UI validation  

Total: 10 automated scenarios.

## Installation

npm install

## Run Tests

npx wdio run wdio.conf.js

## Reports

npm run report

## CI/CD

Pipeline configuration included in `.gitlab-ci.yml`.

## Author

Gilvando De Sena Matos
>>>>>>> 23237f09b4e0e9f1d8f8aa3f10325747d410b56d
