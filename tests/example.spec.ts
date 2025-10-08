import { test, expect } from '@playwright/test';

test('should submit student form successfully', async ({ page }) => {
  // Go to the IndexPage (assuming dev server is running on port 9000)
  await page.goto('/');

  // 1. Fill Student ID
  await page.getByLabel('Student ID (เลขประจำตัว)').fill('6704101311');

  // 2. Fill Full Name
  await page.getByLabel('Full Name (ชื่อ-นามสกุล)').fill('Kulthiwa Miakhunthod');

  // 3. Fill Email
  await page.getByLabel('Email').fill('kulthiwa@example.com');

  // 4. Click the Submit button
  await page.getByRole('button', { name: 'Submit Data' }).click();

  // 5. Check the notification message (confirming successful submission)
  await expect(page.getByRole('alert')).toContainText('Form Data Submitted Locally!');
});