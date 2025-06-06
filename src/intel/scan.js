/** @param {NS} ns **/
export async function main(ns) {
  const scanned = new Set();
  const queue = ["home"];

  while (queue.length > 0) {
    const host = queue.shift();
    if (!scanned.has(host)) {
      scanned.add(host);
      const neighbors = ns.scan(host);
      for (const neighbor of neighbors) {
        if (!scanned.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }

  for (const host of scanned) {
    ns.tprint(host);
  }
}