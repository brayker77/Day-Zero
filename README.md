# 🧠 Day-Zero: Codex Framework for Bitburner

Welcome to the **Day-Zero** project — a modular, GitHub-synced automation framework for the game [Bitburner](https://danielyxie.github.io/bitburner/).

This system is managed by:
- 🧑‍💼 **CEO**: You
- 🤖 **CTO (Robot)**: ChatGPT, generates all code via Codex
- 👨‍💻 **Cody**: GitHub-connected dev agent (real or AI), maintains commits and PRs

---

## 📦 Folder Structure

Day-Zero/
├── queueDaemon.js # Master job planner and batch queue system
├── runner.js # Worker agent, pulls jobs and executes
├── lib/ # Utility modules for scanning, scoring, batching
├── jobs/ # Single-purpose execution payloads (hack/grow/weaken)
├── startup.bat # Optional: quick launcher script
└── README.md # This file


---

## 🔧 Setup Instructions

1. Clone the repo or copy scripts into Bitburner manually.
2. Run `queueDaemon.js` from home.
3. Deploy `runner.js` to all servers you control.
4. All targets, scoring, and job types are modular and adjustable.

---

## 📘 Documentation & Canon

Design assumptions and constraints for the current BitNode run are defined in `canon.md`. Cody is expected to mirror this information in logic, structure, and pull requests.

---

## 🧠 Project Goals

- Fully modular and GitHub-compatible
- Clean separation of logic, execution, and control
- Designed for SF1.3 (no corp, gang, or singularity access)
- Uses `ns.formatNumber` and avoids deprecated APIs
- Everything can be replaced — no sacred code

---
