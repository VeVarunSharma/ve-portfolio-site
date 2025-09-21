import { test, expect } from '@playwright/test';

test('should navigate to the home page', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: "Hi, I'm Ve Sharma" }).first()).toBeVisible();
});

test('should have the correct page title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Ve Sharma/);
});

test('should open the email client when email button is clicked', async ({ page }) => {
    await page.goto('/');
    const emailButton = page.getByRole('link', { name: 'Email' });
    await expect(emailButton).toHaveAttribute('href', /mailto:ve@vesharma.dev/);
});

test('should show the social proof banner', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#backed-by')).toBeVisible();
});

test('should display skills section', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#skills')).toBeVisible();
});

test('should display thought leadership section', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#thought-leadership')).toBeVisible();
});
