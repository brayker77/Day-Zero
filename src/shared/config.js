/** @typedef {import("../../.vscode/bitburner.ns.d.ts").NS} NS */

export const config = {
  batch: {
    delayBuffer: 20, // ms between batch actions (W > G > H)
    maxBatches: 5,
    spacing: 200, // ms between batch sets
  },

  thresholds: {
    minMoneyRatio: 0.75,   // don't hack if target < 75% max money
    maxSecurityDelta: 5,   // don't hack if sec level > min + this
  },

  targetSelection: {
    minHackChance: 0.8,    // only target if > 80% chance to succeed
    maxWeakenThreads: 100, // avoid overallocating to tough servers
  },

  resources: {
    reservedRam: 32,       // MB to leave free on home/server
    allowHomeDeploy: true, // allow deployments from 'home'
  },
};
