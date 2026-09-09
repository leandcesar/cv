import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  workers: 1,
  reporter: "list",
  use: {
    baseURL: process.env.TEST_BASE_URL ?? "http://127.0.0.1:3000",
    browserName: "chromium",
    launchOptions: process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {},
    trace: "retain-on-failure",
  },
  webServer: process.env.TEST_BASE_URL ? undefined : {
    command: "npm run start -- --hostname 127.0.0.1",
    url: "http://127.0.0.1:3000/pt",
    reuseExistingServer: !process.env.CI,
  },
});
