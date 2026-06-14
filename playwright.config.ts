import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 60_000,

  expect: {
    timeout: 10_000,
  },

  fullyParallel: false,

  retries: 0,

  reporter: [
    ['list'],
    ['html'],
  ],

  use: {
    baseURL: 'https://portal.uat.gofive.co.th',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});