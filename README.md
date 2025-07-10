
---

## 🧩 Folder Details

| Folder/File           | Purpose                                                  |
|-----------------------|----------------------------------------------------------|
| `config/env.js`       | Set base URLs, credentials, and environment configs      |
| `data/users.csv`      | CSV data file for login and data-driven testing          |
| `scripts/*.js`        | Main test scripts (organized per feature or endpoint)    |
| `scripts/utils.js`    | Reusable helper functions (token management, assertions) |
| `results/`            | Output from test runs (`.json`, `.csv`)                  |
| `reports/`            | Optional HTML reports generated from result files        |
| `README.md`           | Explains project structure, how to run, and test logic   |
| `.gitignore`          | Ignore node_modules, results, reports, logs, etc.        |

---

## 🚀 Getting Started

### 1. Install k6

```bash
# macOS
brew install k6

# Windows
choco install k6
