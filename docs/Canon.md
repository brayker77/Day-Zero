# 📘 Bitburner Canon – Day-Zero

_Last updated: BN1.3, Fresh Start, Snapshot 001_

---

## 🧬 Player State

- BitNode: **SF1.3**
- Augmentations: **None**
- Game state: **Clean reset**
- No corp, no gang, no INT stat, no memory carryover
- Repository: **bitburner-day-zero**

---

## 🔒 Development Constraints

- ❌ No use of `ns.singularity.*` (SF4 locked)
- ❌ No corp or gang logic
- ❌ No INT-based calculations (SF5 locked)
- ⚠️ Avoid deprecated APIs (e.g., `ns.nFormat` → use `ns.formatNumber`)

---

## ⚙️ System Design Goals

- Codex is modular and replaceable
- Whiteboard is the only active dev surface
- GitHub (bitburner-day-zero) is the source of truth
- Robot writes code, Cody maintains it
- You approve and deploy manually

---

## 🔁 Operational Flow

1. Robot generates new logic → Codex Whiteboard
2. You review and approve
3. Cody syncs to GitHub
4. You paste into Bitburner manually
5. Updates and scale evolve from Whiteboard

---

## 📚 Reference

- [Bitburner Source API](https://github.com/bitburner-official/bitburner-src)
- [Official Scripts](https://github.com/bitburner-official/bitburner-scripts)
