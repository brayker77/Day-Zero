# Day-Zero: Modular Bitburner Automation Framework

Welcome to **Day-Zero**, a modular framework for automating operations in Bitburner using scalable, script-driven infrastructure.

This project is designed to coordinate hacking operations, infrastructure purchasing, and server control through clean, testable modules.

---

## 📦 Repository Structure

```
Day-Zero/
├── docs/            # System architecture, planning documents
│   └── architecture.md
├── src/             # Source code: modular Bitburner scripts
│   ├── control/
│   ├── payload/
│   ├── intel/
│   ├── logistics/
│   ├── shared/
│   └── main.js
└── README.md        # You're here!
```

---

## 🧠 System Overview

This framework uses a central controller pattern:

* `main.js` launches the batch controller
* `control/` handles timing and orchestration
* `payload/` contains standalone scripts (`hack`, `grow`, `weaken`)
* `intel/` analyzes targets and maps networks
* `logistics/` manages purchased servers and deployment
* `shared/` includes configs and logging tools

---

## 🛠️ Getting Started

1. Copy scripts into your Bitburner home server
2. Run `scan.js` and `analyzeServer.js` to populate targets
3. Launch `main.js` to begin orchestrated batch execution

---

## 👥 Credits

* **Commander**: You
* **CTO & Architect**: Robot (ChatGPT)
* **Developer Fleet**: Cody (Codex)

---

## 💬 Contributions

This repo is internal-first. If you're adapting it, feel free to fork and apply your own config, targets, or scaling logic.
