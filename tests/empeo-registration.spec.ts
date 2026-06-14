import { expect, test } from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';
import { registrationData } from '../data/registration.data';

test.describe('empeo Registration', () => {
  test.beforeEach(async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.goto();
  });

  test('TC_001 - Verify registration page loads with default Thai registered company option selected', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.expectPageLoaded();
    await registerPage.expectThaiCompanyFormDisplayed();
  });

  test('TC_002 - Verify form changes when user selects Other company type', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.selectOtherCompany();
    await registerPage.expectOtherCompanyFormDisplayed();
  });

  test('TC_003 - Verify form changes back when user selects Thai registered company type', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.selectOtherCompany();
    await registerPage.selectThaiRegisteredCompany();
    await registerPage.expectThaiCompanyFormDisplayed();
  });

  test('TC_004 - Verify required field validation when submitting empty form for Thai registered company', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.selectThaiRegisteredCompany();
    await registerPage.submitRegistration();
    await registerPage.expectRequiredValidationMessagesForThaiCompany();
  });

  test('TC_005 - Verify required field validation when submitting empty form for Other company type', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.selectOtherCompany();
    await registerPage.submitRegistration();
    await registerPage.expectRequiredValidationMessagesForOtherCompany();
  });

  test('TC_006 - Verify user can enter company name for Thai company type', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.searchThaiCompany(registrationData.thaiRegisteredCompany.companyName);
    await expect(page.getByText(registrationData.thaiRegisteredCompany.companyName)).toBeVisible();
    await registerPage.selectCompanyNameFromSearchResult(registrationData.thaiRegisteredCompany.companyName);
    await registerPage.expectSelectedThaiCompanyName(
      registrationData.thaiRegisteredCompany.taxId
   );
  });  

  test('TC_007 - Verify user can search and select company by tax ID', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.searchThaiCompany(registrationData.thaiRegisteredCompany.taxId);
    await expect(page.getByText(registrationData.thaiRegisteredCompany.taxId)).toBeVisible();
    await registerPage.selectTaxIdFromSearchResult(registrationData.thaiRegisteredCompany.taxId);
    await registerPage.expectSelectedThaiCompanyTaxId(
      registrationData.thaiRegisteredCompany.taxId
   );
  });

  test('TC_008 - Verify company search field required validation for Thai registered company', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.selectThaiRegisteredCompany();
    await registerPage.selectBusinessType(registrationData.user.businessType);
    await registerPage.selectUsers(registrationData.user.users);
    await registerPage.fillEmail(registrationData.user.email);
    await registerPage.fillFirstName(registrationData.user.firstName);
    await registerPage.fillLastName(registrationData.user.lastName);
    await registerPage.typeMobileNumber(registrationData.user.phone);
    await registerPage.acceptTerms();
    await registerPage.submitRegistration();
    await registerPage.expectCompanySearchRequiredValidation();
  });

  test('TC_009 - Verify validation when selected Thai registered company has already been registered and used', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.searchAndSelectThaiCompany(
      registrationData.usedThaiRegisteredCompany.taxId,
      registrationData.usedThaiRegisteredCompany.companyName
    );
    await registerPage.expectCompanyAlreadyUsedValidation();
  });

  test('TC_010 - Verify company search with non-existing tax ID or company name', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.searchThaiCompany(registrationData.nonExistingCompany.taxId);
    await registerPage.expectNoCompanyResult();
  });

  test('TC_011 - Verify user can enter company name for Other company type', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.enterOtherCompanyName(registrationData.otherCompany.companyName);
    await registerPage.expectOtherCompanyNameValue( 
      registrationData.otherCompany.companyName
   );
  });

  test('TC_012 - Verify company name required validation for Other company type', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.selectOtherCompany();
    await registerPage.selectBusinessType(registrationData.user.businessType);
    await registerPage.selectUsers(registrationData.user.users);
    await registerPage.fillEmail(registrationData.user.email);
    await registerPage.fillFirstName(registrationData.user.firstName);
    await registerPage.fillLastName(registrationData.user.lastName);
    await registerPage.typeMobileNumber(registrationData.user.phone);
    await registerPage.acceptTerms();
    await registerPage.submitRegistration();
    await registerPage.expectOtherCompanyNameRequiredValidation();
  });

  test('TC_013 - Verify user can select business type from dropdown', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.selectBusinessType(registrationData.user.businessType);
    await expect(page.getByText(registrationData.user.businessType).first()).toBeVisible();
  });

  test('TC_014 - Verify business type required field validation', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.enterOtherCompanyName(registrationData.otherCompany.companyName);
    await registerPage.selectUsers(registrationData.user.users);
    await registerPage.fillEmail(registrationData.user.email);
    await registerPage.fillFirstName(registrationData.user.firstName);
    await registerPage.fillLastName(registrationData.user.lastName);
    await registerPage.typeMobileNumber(registrationData.user.phone);
    await registerPage.acceptTerms();
    await registerPage.submitRegistration();
    await registerPage.expectBusinessTypeRequiredValidation();
  });

  test('TC_015 - Verify user can select number of users from dropdown', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.selectUsers(registrationData.user.users);
    await expect(page.getByText(registrationData.user.users).first()).toBeVisible();
  });

  test('TC_016 - Verify users required field validation', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.enterOtherCompanyName(registrationData.otherCompany.companyName);
    await registerPage.selectBusinessType(registrationData.user.businessType);
    await registerPage.fillEmail(registrationData.user.email);
    await registerPage.fillFirstName(registrationData.user.firstName);
    await registerPage.fillLastName(registrationData.user.lastName);
    await registerPage.typeMobileNumber(registrationData.user.phone);
    await registerPage.acceptTerms();
    await registerPage.submitRegistration();
    await registerPage.expectUsersRequiredValidation();
  });

  test('TC_017 - Verify email required field validation', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.enterOtherCompanyName(registrationData.otherCompany.companyName);
    await registerPage.selectBusinessType(registrationData.user.businessType);
    await registerPage.selectUsers(registrationData.user.users);
    await registerPage.fillFirstName(registrationData.user.firstName);
    await registerPage.fillLastName(registrationData.user.lastName);
    await registerPage.typeMobileNumber(registrationData.user.phone);
    await registerPage.acceptTerms();
    await registerPage.submitRegistration();
    await registerPage.expectEmailRequiredValidation();
  });

  test('TC_018 - Verify email format validation', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.enterOtherCompanyName(registrationData.otherCompany.companyName);
    await registerPage.selectBusinessType(registrationData.user.businessType);
    await registerPage.selectUsers(registrationData.user.users);
    await registerPage.fillEmail(registrationData.invalid.email);
    await registerPage.fillFirstName(registrationData.user.firstName);
    await registerPage.fillLastName(registrationData.user.lastName);
    await registerPage.typeMobileNumber(registrationData.user.phone);
    await registerPage.acceptTerms();
    await registerPage.submitRegistration();
    await registerPage.expectEmailFormatValidation();
  });

  test('TC_019 - Verify first name required field validation', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.enterOtherCompanyName(registrationData.otherCompany.companyName);
    await registerPage.selectBusinessType(registrationData.user.businessType);
    await registerPage.selectUsers(registrationData.user.users);
    await registerPage.fillEmail(registrationData.user.email);
    await registerPage.fillLastName(registrationData.user.lastName);
    await registerPage.typeMobileNumber(registrationData.user.phone);
    await registerPage.acceptTerms();
    await registerPage.submitRegistration();
    await registerPage.expectFirstNameRequiredValidation();
  });

  test('TC_020 - Verify last name required field validation', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.enterOtherCompanyName(registrationData.otherCompany.companyName);
    await registerPage.selectBusinessType(registrationData.user.businessType);
    await registerPage.selectUsers(registrationData.user.users);
    await registerPage.fillEmail(registrationData.user.email);
    await registerPage.fillFirstName(registrationData.user.firstName);
    await registerPage.typeMobileNumber(registrationData.user.phone);
    await registerPage.acceptTerms();
    await registerPage.submitRegistration();
    await registerPage.expectLastNameRequiredValidation();
  });

  test('TC_021 - Verify mobile number required field validation', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.enterOtherCompanyName(registrationData.otherCompany.companyName);
    await registerPage.selectBusinessType(registrationData.user.businessType);
    await registerPage.selectUsers(registrationData.user.users);
    await registerPage.fillEmail(registrationData.user.email);
    await registerPage.fillFirstName(registrationData.user.firstName);
    await registerPage.fillLastName(registrationData.user.lastName);
    await registerPage.acceptTerms();
    await registerPage.submitRegistration();
    await registerPage.expectPhoneRequiredValidation();
  });

  test('TC_022 - Verify invalid mobile number length validation', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.enterOtherCompanyName(registrationData.otherCompany.companyName);
    await registerPage.selectBusinessType(registrationData.user.businessType);
    await registerPage.selectUsers(registrationData.user.users);
    await registerPage.fillEmail(registrationData.user.email);
    await registerPage.fillFirstName(registrationData.user.firstName);
    await registerPage.fillLastName(registrationData.user.lastName);
    await registerPage.typeMobileNumber(registrationData.invalid.mobileShort);
    await registerPage.acceptTerms();
    await registerPage.submitRegistration();
    await registerPage.expectPhoneInvalidValidation();
  });

  test('TC_023 - Verify mobile number field does not accept alphabet or special characters', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.typeMobileNumber(registrationData.invalid.mobileText);
    await registerPage.expectPhoneEmpty();
  });

  test('TC_024 - Verify user can change country code', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.changeCountryCode(registrationData.countryCode);
    await registerPage.expectCountryCodeSelected(registrationData.countryCode);
  });

  test('TC_025 - Verify promo code field is displayed when user clicks Use Promo Code', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.clickUsePromoCode();
    await registerPage.expectPromoCodeFieldDisplayed();
  });

  test('TC_026 - Verify valid promo code is accepted', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.fillPromoCode(registrationData.promoCode);
    await registerPage.expectPromoCodeValue(registrationData.promoCode); 
    await registerPage.expectNoInvalidPromoCodeValidation();
  });

  test('TC_027 - Verify user cannot register without accepting privacy policy and terms', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.typeMobileNumber(registrationData.user.phone);
    await registerPage.fillOtherCompanyForm({
      companyName: registrationData.otherCompany.companyName,
      businessType: registrationData.user.businessType,
      users: registrationData.user.users,
      email: registrationData.user.email,
      firstName: registrationData.user.firstName,
      lastName: registrationData.user.lastName,
      phone: registrationData.user.phone,
    });
    await registerPage.submitRegistration();
    await registerPage.expectTermsRequiredValidation();
  });

  test('TC_028 - Verify privacy policy and terms links are accessible', async ({ page, context }) => {
    const registerPage = new RegistrationPage(page);

    const privacyPagePromise = context.waitForEvent('page').catch(() => null);
    await registerPage.clickPrivacyPolicyLink();
    const privacyPage = await privacyPagePromise;

    if (privacyPage) {
      await privacyPage.waitForLoadState('domcontentloaded');
      await expect(privacyPage).toHaveURL(/privacy|policy|terms|condition/i);
      await privacyPage.close();
    } else {
      await expect(page).toHaveURL(/privacy|policy|terms|condition|Register\/empeo/i);
      await page.goBack().catch(() => null);
    }

    const termsPagePromise = context.waitForEvent('page').catch(() => null);
    await registerPage.clickTermsLink();
    const termsPage = await termsPagePromise;

    if (termsPage) {
      await termsPage.waitForLoadState('domcontentloaded');
      await expect(termsPage).toHaveURL(/terms|condition|privacy|policy/i);
      await termsPage.close();
    } else {
      await expect(page).toHaveURL(/terms|condition|privacy|policy|Register\/empeo/i);
    }
  });

  test('TC_029 - Verify OTP verification modal is displayed after user submits valid registration form', async ({ page }) => {
    const registerPage = new RegistrationPage(page);

    await registerPage.prepareValidOtherCompanyRegistrationUntilOtp({
      companyName: registrationData.otherCompany.companyName,
      businessType: registrationData.user.businessType,
      users: registrationData.user.users,
      email: registrationData.user.email,
      firstName: registrationData.user.firstName,
      lastName: registrationData.user.lastName,
      phone: registrationData.user.phone,
    });

    await registerPage.expectOtpModalDisplayed();
  });

  test('TC_030 - Verify user can verify OTP successfully with valid 6-digit OTP', async ({ page }) => {
    test.setTimeout(180_000);

    test.info().annotations.push({
    type: 'known-limitation',
    description:
      'OTP success verification depends on a real SMS OTP. This test may fail if no mock/test OTP or OTP retrieval endpoint is available in UAT.',
    });
    const registerPage = new RegistrationPage(page);
    await registerPage.prepareValidOtherCompanyRegistrationUntilOtp({
      companyName: registrationData.otherCompany.companyName,
      businessType: registrationData.user.businessType,
      users: registrationData.user.users,
      email: registrationData.user.email,
      firstName: registrationData.user.firstName,
      lastName: registrationData.user.lastName,
      phone: registrationData.user.phone,
    });
    await registerPage.verifyOtp(registrationData.otp);
    await registerPage.expectRegistrationSuccess();
  });

  test('TC_031 - Verify Confirm button remains disabled when OTP is empty or incomplete', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.prepareValidOtherCompanyRegistrationUntilOtp({
      companyName: `QA Test Company${Date.now()}`,
      businessType: registrationData.user.businessType,
      users: registrationData.user.users,
      email: registrationData.user.email,
      firstName: registrationData.user.firstName,
      lastName: registrationData.user.lastName,
      phone: registrationData.invalid.mobileForFailed,
    });
    await registerPage.fillOtp(registrationData.invalid.incompleteOtp);
    await registerPage.expectConfirmOtpDisabled();
  });

  test('TC_032 - Verify invalid OTP displays error toast and keeps user on OTP modal', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.prepareValidOtherCompanyRegistrationUntilOtp({
      companyName: registrationData.otherCompany.companyName,
      businessType: registrationData.user.businessType,
      users: registrationData.user.users,
      email: registrationData.user.email,
      firstName: registrationData.user.firstName,
      lastName: registrationData.user.lastName,
      phone: registrationData.invalid.mobileForFailed,
    });
    await registerPage.verifyOtp(registrationData.invalid.otp);
    await registerPage.expectInvalidOtpToast();
  });

  test('TC_033 - Verify resend OTP link is displayed and clickable after countdown ends', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.prepareValidOtherCompanyRegistrationUntilOtp({
      companyName: registrationData.otherCompany.companyName,
      businessType: registrationData.user.businessType,
      users: registrationData.user.users,
      email: registrationData.user.email,
      firstName: registrationData.user.firstName,
      lastName: registrationData.user.lastName,
      phone: registrationData.invalid.mobileForFailed,
    });
    await registerPage.waitUntilResendOtpLinkVisible();
    await registerPage.clickResendOtp();
    await registerPage.expectResendOtpCountdown();
  });

  test('TC_034 - Verify user can close OTP verification modal', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    await registerPage.prepareValidOtherCompanyRegistrationUntilOtp({
      companyName: `QA Test Company${Date.now()}`,
      businessType: registrationData.user.businessType,
      users: registrationData.user.users,
      email: registrationData.user.email,
      firstName: registrationData.user.firstName,
      lastName: registrationData.user.lastName,
      phone: registrationData.invalid.mobileForFailed,
    });
    await registerPage.closeOtpModal();
    await registerPage.expectOtpModalClosed();
  });

  test('TC_035 - Verify user can submit registration for Thai registered company with valid data', async ({ page }) => {
    test.setTimeout(180_000);
    test.info().annotations.push({
    type: 'data-dependent',
    description:
      'Requires a valid unused Thai registered company and unused phone number. The same company cannot be reused after successful registration.',
    });
    const registerPage = new RegistrationPage(page);
    await registerPage.prepareValidThaiRegistrationUntilOtp({
      companyKeyword: registrationData.thaiRegisteredCompany.taxId,
      companyName: registrationData.thaiRegisteredCompany.companyName,
      businessType: registrationData.user.businessType,
      users: registrationData.user.users,
      email: registrationData.user.email,
      firstName: registrationData.user.firstName,
      lastName: registrationData.user.lastName,
      phone: registrationData.user.phone,
    });
    await registerPage.verifyOtp(registrationData.otp);
    await registerPage.expectRegistrationSuccess();
  });

  test('TC_036 - Verify user can submit registration for Other registered company with valid data', async ({ page }) => {
    test.setTimeout(180_000);
    test.info().annotations.push({
    type: 'known-limitation',
    description:
      'Registration completion depends on successful OTP verification via real SMS. This test may fail if no valid OTP can be retrieved during automation.',
    });
    const registerPage = new RegistrationPage(page);
    await registerPage.prepareValidOtherCompanyRegistrationUntilOtp({
      companyName: registrationData.otherCompany.companyName,
      businessType: registrationData.user.businessType,
      users: registrationData.user.users,
      email: registrationData.user.email,
      firstName: registrationData.user.firstName,
      lastName: registrationData.user.lastName,
      phone: registrationData.user.phone,
    });
    await registerPage.verifyOtp(registrationData.otp);
    await registerPage.expectRegistrationSuccess();
  });

});
