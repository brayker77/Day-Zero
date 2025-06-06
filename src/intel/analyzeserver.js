/** @param {NS} ns **/
export function analyzeServer(ns, hostname, player = ns.getPlayer()) {
  const server = ns.getServer(hostname);

  if (!ns.formulas || !ns.formulas.hacking) {
    ns.tprint("❌ Formulas API not available. Cannot analyze.");
    return null;
  }

  const hackPercent = ns.formulas.hacking.hackPercent(server, player);
  const hackThreads = Math.ceil(0.1 / hackPercent); // Target: steal 10%

  const growthFactor = server.moneyMax / Math.max(server.moneyAvailable, 1);
  const growThreads = Math.ceil(ns.formulas.hacking.growThreads(server, player, growthFactor));

  const weakenThreads = Math.ceil((server.hackDifficulty - server.minDifficulty) / 0.05);

  return {
    hostname,
    hackThreads,
    growThreads,
    weakenThreads
  };
}
