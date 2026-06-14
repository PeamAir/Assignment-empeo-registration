# Empeo Registration Automation Test

This repository contains automation tests for the Empeo Registration System.

Target URL "https://portal.uat.gofive.co.th/Register/empeo"
---

## Tech Stack

* Playwright
* TypeScript
* Node.js

---

## Project Structure

```text
.
├── tests/
│   └── empeo-registration.spec.ts
├── playwright-report/
├── test-results/
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md
```

### Folder Description

| Folder/File          | Description                      |
| -------------------- | -------------------------------- |
| tests                | Automation test scripts          |
| playwright-report    | HTML execution report            |
| test-results         | Screenshots, traces, videos      |
| playwright.config.ts | Playwright configuration         |
| package.json         | Project dependencies and scripts |

---

## Test Coverage

### Registration

* Successful registration
* Required field validation
* Invalid phone number validation

### OTP Verification

* Valid OTP
* Invalid OTP
* OTP required validation

### Promo Code

* Valid promo code
* Invalid promo code
* Promo code validation

### Negative Scenarios

* Invalid user inputs
* Error message validation
* Edge cases

---

## Test Data

| Field        | Value      |
| ------------ | ---------- |
| Phone Number | 0967690708 |
| OTP          | 123456     |
| Promo Code   | FREE15DAY  |

---

# Environment Setup

## Prerequisites

Install the following software:

### Node.js

Version 18 or higher

Verify installation

```bash
node -v
npm -v
```

### Playwright Browsers

Install Playwright browsers

```bash
npx playwright install
```

---

# Project Setup

Clone repository

```bash
git clone <https://github.com/PeamAir/Assignment-empeo-registration.git>
```

Navigate to project directory

```bash
cd empeo-registration-automation-test
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

# Execute Tests

Run all tests

```bash
npx playwright test
```

Run specific test file

```bash
npx playwright test tests/register.spec.ts
```

Run in headed mode

```bash
npx playwright test --headed
```

Run with UI mode

```bash
npx playwright test --ui
```

---

# View Test Report

Open Playwright HTML report

```bash
npx playwright show-report
```

Report location

```text
playwright-report/index.html
```

---

# Test Artifacts

Execution artifacts are stored in:

```text
test-results/
```

Artifacts may include:

* Screenshots
* Trace files
* Videos

---

# Submission Contents

This repository contains:

* Test Case Design
Please refer to:
- docs/TestCases.md
* Playwright Automation Scripts
* Execution Report
* Test Artifacts

---

# Author

Sunisa Chokdeeanantakul
Automation Tester Assignment
