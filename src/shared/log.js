/** @param {NS} ns */
export function log(ns, message, scope = "core") {
  const timestamp = new Date().toLocaleTimeString();
  const tag = `[${scope.toUpperCase()}]`;
  ns.tprint(`🌀 ${timestamp} ${tag} ${message}`);
}
