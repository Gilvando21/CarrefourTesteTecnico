
# QA Automation Framework - Carrefour Technical Challenge

Framework desenvolvido para atender os requisitos do desafio técnico de QA Automation.

Este projeto cobre:

API Automation
- CRUD completo de usuários
- Autenticação JWT
- Validação de headers
- Validação de schema (AJV)
- Cenários positivos e negativos
- Geração dinâmica de dados
- Estrutura de serviços

Mobile Automation
- WebdriverIO + Appium
- Page Object Model
- Data driven tests
- Evidências (screenshots)
- Relatórios Allure

CI/CD
- GitLab CI pipeline
- Execução automática
- Artefatos de execução

---

# Estrutura

api-tests
 - auth
 - data
 - schemas
 - services
 - tests
 - utils

mobile-tests
 - pages
 - specs
 - data
 - config

---

# Executar

Instalar dependências

npm run install:all

Executar API

npm run test:api

Executar mobile

npm run test:mobile

---

Autor
Gilvando De Sena Matos
