
# QA Automation Framework – Carrefour Technical Challenge

![Node.js](https://img.shields.io/badge/node.js-18-green)
![WebdriverIO](https://img.shields.io/badge/webdriverio-v8-blue)
![Appium](https://img.shields.io/badge/appium-mobile-orange)
![Automation](https://img.shields.io/badge/test-automation-brightgreen)

Automation framework developed to validate **API and Mobile functionalities** following modern QA Automation practices.

This project was created as part of the **Carrefour QA Automation Technical Challenge**, implementing automated tests for a REST API and a mobile application using modern JavaScript testing tools.

---

# Tech Stack

## API Automation
- Node.js
- Supertest
- Mocha
- Chai
- AJV (Schema Validation)
- Faker (Dynamic Test Data)

## Mobile Automation
- WebdriverIO
- Appium
- Mocha
- Chai
- Page Object Model (POM)

## CI/CD
- GitLab CI Pipeline

---

# Test Coverage

## API Tests

The API automation validates a user management REST API with the following coverage:

- User CRUD validation
- JWT Authentication
- Header validation
- Schema validation using AJV
- Positive scenarios
- Negative scenarios
- Dynamic test data generation using Faker
- Service layer abstraction for API calls

---

## Mobile Tests

Mobile automation implemented using **WebdriverIO + Appium** following the **Page Object Model pattern**.

Coverage includes:

- Login interactions
- UI element interaction
- Navigation validation
- Data-driven tests
- Screenshot evidence on failure
- Allure report integration

---

# Framework Architecture

The project follows common automation architecture patterns used in professional QA teams.

### API Architecture
- **Auth Layer** → Handles authentication and token generation
- **Service Layer** → Centralizes API requests
- **Data Builder** → Generates dynamic test data
- **Schema Validation** → Ensures API contract integrity
- **Test Layer** → Contains test scenarios

### Mobile Architecture
- **Page Object Model (POM)** for maintainability
- **Test Specs** separated from page logic
- **Test Data files** for data‑driven execution

---

# Project Structure

carrefour-desafio-tecnico
│
├── api-tests
│   ├── auth        → Authentication and token management
│   ├── data        → Test data builders
│   ├── schemas     → API contract validation
│   ├── services    → API service layer
│   └── tests       → Automated API test cases
│
├── mobile-tests
│   ├── pages       → Page Object Model implementation
│   ├── specs       → Mobile test scenarios
│   ├── data        → Data-driven test files
│   └── config      → WebdriverIO configuration
│
├── package.json
├── .gitlab-ci.yml
└── README.md

---

# Setup

Clone the repository

git clone https://github.com/Gilvando21/carrefour-desafio-tecnico.git

Navigate to the project folder

cd carrefour-desafio-tecnico

Install dependencies

npm run install:all

---

# How to Run

Install dependencies

npm run install:all

Run API tests

npm run test:api

Run Mobile tests

npm run test:mobile

---

# CI/CD Pipeline

The repository includes a **GitLab CI configuration** that can execute automated tests in a pipeline.

Pipeline stages:

1. Install dependencies
2. Execute API tests
3. Execute mobile tests
4. Store test artifacts

---

# Reports

Mobile test executions support **Allure reports**, generating execution logs and screenshots for failures.

---

# Best Practices Implemented

- Modular automation architecture
- Page Object Model (Mobile)
- Service Layer Pattern (API)
- Dynamic test data generation
- Schema validation
- CI/CD integration
- Clean repository structure

---

# Author

Gilvando De Sena Matos  
QA Automation Engineer
