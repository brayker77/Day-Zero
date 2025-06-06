/** @param {NS} ns **/
export async function main(ns) {
  const target = ns.args[0];
  if (!target) {
    ns.tprint("❌ No target specified for weaken.");
    return;
  }
  await ns.weaken(target);
}
