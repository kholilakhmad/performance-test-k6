Project Structure

k6-performance-tests/
├── README.md
├── package.json                  # Optional (for dependency tracking, linting, tooling)
├── config/
│   └── env.js                    # Base URL, credentials, environment configs
├── data/
│   └── users.csv                 # CSV file for login data (optional)
├── scripts/
│   ├── login.test.js            # Test script: login flow
│   ├── products.test.js         # Test script: get products
│   └── utils.js                 # Shared functions (e.g., token extract, assertions)
├── results/
│   ├── summary.json              # Summary output after test
│   └── trends.csv                # Metrics for graphs
├── reports/
│   └── html-report.html          # Optional: generated from results
└── .gitignore


🧩 Folder Details
Folder/File	Purpose
config/env.js	Set base URLs, credentials, and headers
data/	CSVs or static JSON data for parameterization
scripts/*.js	k6 test scripts (organized per feature/test case)
utils.js	Shared logic: token storage, random user, etc.
results/	Store result output (.json, .csv) from CLI run
reports/	Store reports converted to HTML, dashboards
README.md	Explain project setup, test objectives, how to run