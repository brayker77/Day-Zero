import { analyzeServer } from "/src/intel/analyzeServer.js";

/** @param {NS} ns **/
export async function batchControlLoop(ns) {
  const targets = ["n00dles", "foodnstuff", "sigma-cosmetics"]; // Replace with scan results

  for (const hostname of targets) {
    const result = analyzeServer(ns, hostname);

    if (result) {
      ns.tprint(`🧠 [${hostname}] Threads → Hack: ${result.hackThreads}, Grow: ${result.growThreads}, Weaken: ${result.weakenThreads}`);
    } else {
      ns.tprint(`⚠️ Could not analyze ${hostname}`);
    }

    await ns.sleep(200); // avoid log spam
  }
}
