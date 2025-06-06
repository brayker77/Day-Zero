import { config } from "/src/shared/config.js";
import { log } from "/src/shared/log.js";

/** @param {NS} ns */
export async function deployPayload(ns, hostnames, payloads) {
  const home = "home";

  for (const host of hostnames) {
    if (host === home && !config.resources.allowHomeDeploy) {
      log(ns, `Skipping home deployment (not allowed)`, "deploy");
      continue;
    }

    const maxRam = ns.getServerMaxRam(host);
    const usedRam = ns.getServerUsedRam(host);
    const available = maxRam - usedRam;

    const usable = (host === home)
      ? available - config.resources.reservedRam
      : available;

    if (usable <= 0) {
      log(ns, `❌ No usable RAM on ${host}`, "deploy");
      continue;
    }

    for (const file of payloads) {
      if (!ns.fileExists(file, host)) {
        await ns.scp(file, host);
        log(ns, `✅ Deployed ${file} to ${host}`, "deploy");
      }
    }
  }
}
