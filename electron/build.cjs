const { spawnSync } = require("node:child_process");
const command = process.platform === "win32" ? "pnpm.cmd" : "pnpm";
const result = spawnSync(command, ["build"], {
  stdio: "inherit",
  env: { ...process.env, NODE_ENV: "production", LUMA_ELECTRON_BUILD: "1", VITE_LUMA_ELECTRON: "1" },
});
process.exit(result.status ?? 1);
