import { expect, Locator, Page } from '@playwright/test'; 

export class RegistrationPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/Register/empeo', { waitUntil: 'domcontentloaded' });
  }

  async expectPageLoaded() {
    await expect(this.page.getByText('ทดลองใช้งาน empeo ฟรี!')).toBeVisible();
    await expect(this.page.getByText('บริษัทจดทะเบียนในไทย')).toBeVisible();
    await expect(this.page.getByText('อื่นๆ')).toBeVisible();
  }

  // ---------- Locators ----------

  private get thaiCompanyRadio() {
    return this.page.getByTestId('input_radio_registration_company_thai');
  }

  private get otherCompanyRadio() {
    return this.page.getByTestId('input_radio_registration_company_others');
  }

  private get taxIdInput() {
    return this.page.getByTestId('input_textfield_input_registration_tax_id');
  }

  private get taxIdDropdown() {
    return this.page.getByTestId('dropdown_selection_registration_tax_id');
  }

  async expectSelectedThaiCompany(companyName: string | RegExp) {
    await expect(this.taxIdDropdown).toContainText(companyName);
  }

  async expectSelectedThaiCompanyName(companyName: string) {
    await expect(this.taxIdInput).toHaveValue(companyName);
  }

  async expectSelectedThaiCompanyTaxId(taxId: string) {
    await expect(this.taxIdInput).toHaveValue(taxId);
  }

  private get taxIdRequiredErrorMessage() {
    return this.taxIdDropdown.locator('p.e-error');
  }

  private get otherCompanyNameInput() {
    return this.page.getByTestId('input_textfield_input_register_company_name');
  }

  private get businessTypeDropdown() {
    return this.page.getByTestId('dropdown_selection_registration_company_type');
  }

  private get userAmountDropdown() {
    return this.page.getByTestId('dropdown_selection_registration_user_amount');
  }
  
  private get firstNameInput() {
    return this.page.getByTestId('input_textfield_input_register_first_name');
  }

  private get lastNameInput() {
    return this.page.getByTestId('input_textfield_input_register_last_name');
  }

  private get emailInput() {
    return this.page.getByTestId('input_textfield_input_registration_email');
  }

  private get emailRequiredErrorMessage() {
    return this.page.getByTestId('text_text_error_registration_required_email');
  }

  private get emailFormatErrorMessage() {
    return this.page.getByTestId('text_text_error_registration_email');
  }

  private get phoneInput() {
    return this.page.locator('#phone');
  }

  private get phoneRequiredErrorMessage() {
    return this.page.getByTestId('text_text_error_registration_required_phone_number');
  }

  private get phoneFormatErrorMessage() {
    return this.page.getByTestId('text_text_error_registration_validate_phone_number');
  }

  private get promoCodeInput() { 
    return this.page.getByTestId('input_text_registration_coupon_code'); 
  }

  private get promoCodeButton() { 
    return this.page.getByTestId('input_button_registration_register_ticket_got_coupon'); 
  }

  private get promoCodeInvalidErrorMessage() { 
    return this.page.getByTestId('text_text_error_registration_coupon_code'); 
  }

  private get termsCheckbox() {
    return this.page.getByTestId('input_checkbox_registration_checkbox').first();
  }

  private get termsSection() {
    return this.page.locator('p').filter({
      has: this.page.getByTestId('button_button_registration_privacy_policy'),
    });
  }

  private get termsErrorMessage() {
    return this.page
      .locator('em[data-testid="text_text_error_registration_tax_id"]')
      .last();
  }

  private async expectFieldRequiredError(input: Locator) {
    const field = input.locator('xpath=ancestor::*[.//*[@data-testid="error_message_icon"]][1]');

    await expect(field.getByTestId('error_message_icon')).toBeVisible();
    await expect(field.getByTestId('error_message_text')).toBeVisible();
  }

  private get otpModal() {
    return this.page.locator('[id^="e-content-tab-registration-empeo_3"]');
  }

  private get waitOtpText() {
    return this.otpModal.locator('.otp-resned-text.go5-text-color-8.mr-2');
  }

  private get otpConfirmButton() {
    return this.otpModal.getByTestId('button_button_registration_verify');
  }

  private get otpInputs() {
    return this.otpModal.locator('input[id^="otp_"]');
  }

  private get otpToast() {
    return this.page.getByRole('status').first();
  }

  private get resendOtpLink() {
    return this.page.getByTestId('button_button_registration_otp_resend').first();
  }

  private get otpCloseButton() {
    return this.page.locator('.go5-dialog-icon-close.gf-icon-close');
  }

  private get createPasswordInput() {
    return this.page.getByTestId('input_password_crate_password_password');
  }

  private get confirmCreatePasswordInput() {
    return this.page.getByTestId('input_password_crate_password_confirm_password');
  }

  private get otpErrorDialog() {
    return this.page.getByRole('dialog', { name: /Error!/i });
  }


  // ---------- Helper ----------

  private async safeFill(locator: Locator, value: string) {
    await locator.waitFor({ state: 'visible' });
    await locator.fill(value);
  }

  private textInputByPlaceholder(text: RegExp | string) {
    return this.page.getByPlaceholder(text).first();
  }

  async selectDropdownOption(dropdownIndex: number, optionText: string | RegExp) {
    const registrationForm = this.page.locator('form').first();

    await registrationForm
      .locator('.go5-dropdown-input-selection .go5-dropdown-selection-input')
      .nth(dropdownIndex)
      .click();

    const optionRegex =
      typeof optionText === 'string'
        ? new RegExp(`^${optionText}$`)
        : optionText;

    const option = this.page
      .locator('div, span, p')
      .filter({ hasText: optionRegex })
      .last();

    await expect(option).toBeVisible();
    await option.click();
  }

  private async expectDropdownRequiredError(dropdown: Locator) {
    await expect(dropdown.getByTestId('error_message_icon')).toBeVisible();
    await expect(dropdown.getByTestId('error_message_text')).toBeVisible();
  }


  // ---------- Actions ----------

  async clickSubmit() {
    await this.page.getByTestId('button_submit_registration_try_for_free').click();
  }

  async clickConfirmOtp() {
    await expect(this.otpConfirmButton).toBeEnabled({ timeout: 40_000 });
    await this.otpConfirmButton.click();
    // Fail fast if a visible error appears (dialog or toast) instead of silently timing out at waitForURL
    await expect(this.otpErrorDialog).not.toBeVisible({ timeout: 30_000 });
    await expect(this.otpToast).not.toBeVisible({ timeout: 5_000 }).catch(() => {
      throw new Error('OTP submission failed: error toast appeared. Check if company/phone is already registered.');
    });
  }

  async selectThaiRegisteredCompany() {
    await this.thaiCompanyRadio.scrollIntoViewIfNeeded();
    await this.thaiCompanyRadio.click();
  }

  async selectOtherCompany() {
    await this.otherCompanyRadio.scrollIntoViewIfNeeded();
    await this.otherCompanyRadio.click();
  }

  async expectThaiCompanyFormDisplayed() {
    await expect(this.taxIdInput).toBeVisible();
  }

  async expectOtherCompanyFormDisplayed() {
    await expect(this.otherCompanyNameInput).toBeVisible();
  }

  async expectTaxIdInputValue(value: string) { 
    await expect(this.taxIdInput).toHaveValue(value); 
  }

  async expectOtherCompanyNameValue(value: string) { 
    await expect(this.otherCompanyNameInput).toHaveValue(value); 
  }

  async searchThaiCompany(keyword: string) {
    await this.selectThaiRegisteredCompany();
    await this.safeFill(this.taxIdInput, keyword);
  }

  async selectCompanyNameFromSearchResult(companyName: string | RegExp) {
    await this.page.getByText(companyName).first().click();
  }

  async searchAndSelectThaiCompany(keyword: string, companyName: string | RegExp) {
    await this.searchThaiCompany(keyword);
    await this.selectCompanyNameFromSearchResult(companyName);
  }
  
  async selectTaxIdFromSearchResult(taxId: string | RegExp) {
    await this.page.getByText(taxId).first().click();
  }

  async searchAndSelectTaxIDThaiCompany(keyword: string, taxId: string | RegExp) {
    await this.searchThaiCompany(keyword);
    await this.selectTaxIdFromSearchResult(taxId);
  }

  async enterOtherCompanyName(companyName: string) {
    await this.selectOtherCompany();
    await this.safeFill(this.otherCompanyNameInput, companyName);
  }

  async expectCompanyAlreadyUsedValidation() {
    await expect(this.page.locator('.checkDuplicateCompany')).toBeVisible();
  }

  async expectNoCompanyResult() {
    await expect(this.page.getByTestId('dropdown_selection_registration_tax_id').locator('go5-dropdown-popup').first()).toBeVisible();
  }

  async selectBusinessType(option: string | RegExp) {
    await this.selectDropdownOption(0, option);
  }

  async selectUsers(option: string | RegExp) {
    await this.selectDropdownOption(1, option);
  }

  async fillEmail(email: string) {
    await this.safeFill(this.emailInput, email);
  }

  async fillFirstName(firstName: string) {
    await this.safeFill(this.firstNameInput, firstName);
  }

  async fillLastName(lastName: string) {
    await this.safeFill(this.lastNameInput, lastName);
  }

  async typeMobileNumber(phone: string) {
    await this.phoneInput.click();
    await this.phoneInput.pressSequentially(phone);
  }

  async changeCountryCode(countryCode: string | RegExp) {
    await this.page.getByTestId('\'input_number_registration_phone_number\'').getByText('+').first().click();
    await this.page.getByText(countryCode, { exact: true }).click();
  }

  async expectCountryCodeSelected(countryCode: string) { 
    await expect(this.page.getByText(countryCode, { exact: true }).first()).toBeVisible(); 
  }

  async clickUsePromoCode() {
    await this.promoCodeButton.click();
  }

  async fillPromoCode(code: string) {
    await this.clickUsePromoCode();
    await this.safeFill(this.promoCodeInput, code);
  }

  async acceptTerms() {
    await this.termsCheckbox.evaluate((el) => {
      el.scrollIntoView({ block: 'center', inline: 'center' });
    });
    await this.termsCheckbox.scrollIntoViewIfNeeded();
    await this.termsCheckbox.click({ force: true });
  }

  async clickPrivacyPolicyLink() {
    await this.page.getByTestId('button_button_registration_privacy_policy').click();
  }

  async clickTermsLink() {
    await this.page.getByTestId('button_button_registration_terms_and_conditions').click();
  }

  async fillCommonUserFields(data: {
    businessType: string | RegExp;
    users: string | RegExp;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
  }) {
    await this.selectBusinessType(data.businessType);
    await this.selectUsers(data.users);
    await this.fillEmail(data.email);
    await this.fillFirstName(data.firstName);
    await this.fillLastName(data.lastName);
    await this.typeMobileNumber(data.phone);
  }

  async fillThaiRegisteredCompanyForm(data: {
    companyKeyword: string;
    companyName: string | RegExp;
    businessType: string | RegExp;
    users: string | RegExp;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
  }) {
    await this.searchAndSelectThaiCompany(data.companyKeyword, data.companyName);
    await this.fillCommonUserFields(data);
  }

  async fillOtherCompanyForm(data: {
    companyName: string;
    businessType: string | RegExp;
    users: string | RegExp;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
  }) {
    await this.enterOtherCompanyName(data.companyName);
    await this.fillCommonUserFields(data);
  }

  async submitRegistration() {
    await this.clickSubmit();
  }

  async expectCompanySearchRequiredValidation() {
    await expect(this.taxIdRequiredErrorMessage).toBeVisible();
  }

  async expectOtherCompanyNameRequiredValidation() {
    await this.expectFieldRequiredError(this.otherCompanyNameInput);
  }

  async expectBusinessTypeRequiredValidation() {
    await this.expectDropdownRequiredError(this.businessTypeDropdown);
  }

  async expectUsersRequiredValidation() {
    await this.expectDropdownRequiredError(this.userAmountDropdown);
  }

  async expectEmailRequiredValidation() {
    await expect(this.emailRequiredErrorMessage).toBeVisible();
  }

  async expectEmailFormatValidation() {
    await expect(this.emailFormatErrorMessage).toBeVisible();
  }

  async expectFirstNameRequiredValidation() {
    await this.expectFieldRequiredError(this.firstNameInput);
  }

  async expectLastNameRequiredValidation() {
    await this.expectFieldRequiredError(this.lastNameInput);
  }

  async expectPhoneRequiredValidation() {
    await expect(this.phoneRequiredErrorMessage).toBeVisible();
  }

  async expectPhoneInvalidValidation() {
    await expect(this.phoneFormatErrorMessage).toBeVisible();
  }

  async expectPhoneEmpty() {
    await expect(this.phoneInput).toHaveValue('');
  }

  async expectPhoneContainsOnlyDigits() {
    const value = await this.phoneInput.inputValue();
    expect(value).toMatch(/^\d*$/);
  }

  async expectPromoCodeFieldDisplayed() { 
    await expect(this.promoCodeInput).toBeVisible(); 
  }

  async expectPromoCodeValue(code: string) { 
    await expect(this.promoCodeInput).toHaveValue(code); 
  }

  async expectInvalidPromoCodeValidation() { 
    await expect(this.promoCodeInvalidErrorMessage).toBeVisible(); 
  }

  async expectNoInvalidPromoCodeValidation() {
    await expect(this.promoCodeInvalidErrorMessage).not.toBeVisible(); 
  }

  async expectTermsRequiredValidation() {
    await expect(this.termsErrorMessage).toBeVisible();
  }

  async expectRequiredValidationMessagesForThaiCompany() {
    await this.expectCompanySearchRequiredValidation();
    await this.expectBusinessTypeRequiredValidation();
    await this.expectUsersRequiredValidation();
    await this.expectEmailRequiredValidation();
    await this.expectFirstNameRequiredValidation();
    await this.expectLastNameRequiredValidation();
    await this.expectPhoneRequiredValidation();
    await this.expectTermsRequiredValidation();
}

  async expectRequiredValidationMessagesForOtherCompany() {
    await this.expectOtherCompanyNameRequiredValidation();
    await this.expectBusinessTypeRequiredValidation();
    await this.expectUsersRequiredValidation();
    await this.expectEmailRequiredValidation();
    await this.expectFirstNameRequiredValidation();
    await this.expectLastNameRequiredValidation();
    await this.expectPhoneRequiredValidation();
    await this.expectTermsRequiredValidation();
  }

  async expectTextVisible(text: string | RegExp) {
    await expect(this.page.getByText(text).first()).toBeVisible();
  }

  async expectConfirmOtpDisabled() {
    await expect(this.otpConfirmButton).toBeDisabled();
  }

  async expectConfirmOtpEnabled() {
    await expect(this.otpConfirmButton).toBeEnabled();
  }

  async expectOtpModalDisplayed() {
    await expect(this.otpModal).toBeVisible();
    await expect(this.otpInputs.first()).toBeVisible();
    await expect(this.otpConfirmButton).toBeVisible();
  }

  async fillOtp(otp: string) {
    await expect(this.otpInputs.first()).toBeVisible();
    await this.otpInputs.first().click();
    await this.page.keyboard.type(otp, { delay: 100 });
    await this.page.waitForTimeout(1000);
  }


  async verifyOtp(otp: string) {
    await this.fillOtp(otp);
    await this.clickConfirmOtp();
  }

  async expectInvalidOtpToast() {
    await expect(this.otpToast).toBeVisible();
    await this.expectOtpModalDisplayed();
  }

  async expectResendOtpCountdown() {
    await expect(this.waitOtpText).toBeVisible();
  }

  async waitUntilResendOtpLinkVisible() {
    await expect(this.resendOtpLink).toBeVisible({ timeout: 40_000 });
  }

  async clickResendOtp() {
    await this.waitUntilResendOtpLinkVisible();
    await this.resendOtpLink.click();
  }

  async closeOtpModal() {
    await this.otpCloseButton.click();
  }

  async expectOtpModalClosed() {
    await expect(this.otpModal).not.toBeVisible();
  }

  async prepareValidThaiRegistrationUntilOtp(data: {
    companyKeyword: string;
    companyName: string | RegExp;
    businessType: string | RegExp;
    users: string | RegExp;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
  }) {
    await this.fillThaiRegisteredCompanyForm(data);
    await this.acceptTerms();
    await this.submitRegistration();
    await this.expectOtpModalDisplayed();
  }

  async prepareValidOtherCompanyRegistrationUntilOtp(data: {
    companyName: string;
    businessType: string | RegExp;
    users: string | RegExp;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
  }) {
    await this.fillOtherCompanyForm(data);
    await this.acceptTerms();
    await this.submitRegistration();
    await this.expectOtpModalDisplayed();
  }

  async expectRegistrationSuccess() {
    await this.page.waitForURL(/\/Register\/empeo\/create-password\?token=/, {
      timeout: 120_000,
     waitUntil: 'domcontentloaded',
    });

    await expect(this.createPasswordInput).toBeVisible({ timeout: 30_000 });
  }
}
