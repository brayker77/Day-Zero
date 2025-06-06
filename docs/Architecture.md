# System Architecture: Bitburner Modular Framework

This document outlines how each script module fits into the overall system, what it does, and how it interacts with others. Cody uses this structure to maintain consistency and logical flow across files.

---

## 🚀 Overview

The system is designed around a **central controller model**, with clearly separated concerns for orchestration, payload delivery, intelligence gathering, infrastructure management, and utility sharing.

---

## 🧠 Core Modules and Flow

### 1. `main.js` (System Entry Point)

* **Role**: Launches the system.
* **Calls**:

  * `control/batchController.js`
  * Optionally: `control/scheduler.js`
* **Purpose**: This script kicks off all operations. It’s the ignition point.

---

### 2. `control/` (Orchestration Layer)

#### `batchController.js`

* Coordinates full batches across targets.
* Calls:

  * `intel/analyzeServer.js` to gather target data.
  * `logistics/deploy.js` to push scripts to hosts.
  * `ns.exec()` to launch payloads (`h.js`, `g.js`, `w.js`) with correct timing.

#### `scheduler.js`

* (Optional) Queues and aligns batches with precise timing.
* Coordinates with `config.js` and controller.

---

### 3. `payload/` (Worker Scripts)

* Executed by `ns.exec()` from the controller.
* Do not call anything else — they are standalone executors.

| Script                  | Action                     |
| ----------------------- | -------------------------- |
| `h.js`                  | `ns.hack()`                |
| `g.js`                  | `ns.grow()`                |
| `w.js`                  | `ns.weaken()`              |
| `singleTargetAttack.js` | Self-contained H-G-W cycle |

---

### 4. `intel/` (Reconnaissance)

#### `scan.js`

* Recursively maps the server network.

#### `analyzeServer.js`

* Returns timing, thread counts, and profit estimates for a single server.

---

### 5. `logistics/` (Deployment and Infrastructure)

#### `purchaseServers.js`

* Buys servers based on tiered RAM logic.

#### `deploy.js`

* Kills old scripts.
* Pushes fresh payloads to purchased servers.
* Called by `batchController.js`.

---

### 6. `shared/` (Global Utilities)

#### `config.js`

* Holds constants: batch spacings, thread limits, target filters, etc.

#### `log.js`

* Stylized, namespaced logging. Used for consistent output and debugging.

---

## 🔁 Call Flow Diagram

```
main.js
  └─> batchController.js
         ├─> analyzeServer.js
         ├─> scan.js
         ├─> deploy.js
         └─> ns.exec(h.js / g.js / w.js)
```

---

## 🧹 Summary of Responsibilities

| Module       | Role                           |
| ------------ | ------------------------------ |
| `main.js`    | Startup and config load        |
| `control/`   | Brain and timing logic         |
| `payload/`   | Actual money-making ops        |
| `intel/`     | Scanning and profiling         |
| `logistics/` | Server prep and script pushing |
| `shared/`    | Utilities and constants        |

---

## 🧠 Cody Notes

* Use this structure to guide new module creation.
* Scripts should call **only what's above or beside them** in hierarchy.
* All payloads are terminal — they do not return values, they just run.
