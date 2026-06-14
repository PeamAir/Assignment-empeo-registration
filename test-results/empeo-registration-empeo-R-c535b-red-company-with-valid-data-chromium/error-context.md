# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: empeo-registration.spec.ts >> empeo Registration >> TC_035 - Verify user can submit registration for Thai registered company with valid data
- Location: tests/empeo-registration.spec.ts:402:7

# Error details

```
TimeoutError: page.waitForURL: Timeout 120000ms exceeded.
=========================== logs ===========================
waiting for navigation until "domcontentloaded"
============================================================
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e7]:
    - generic [ref=e8]:
      - img "logo" [ref=e10]
      - generic [ref=e18]:
        - generic [ref=e23]: ไทย
        - generic [ref=e28] [cursor=pointer]: 
      - generic [ref=e29]:
        - generic [ref=e30]:
          - generic [ref=e31]: โปรแกรมบริหารงาน บุคคลครบวงจร
          - generic [ref=e32]:
            - generic [ref=e33]:
              - generic [ref=e34]: ให้เราช่วยคุณจัดการความท้าทายในการบริหารคนด้วยระบบที่ทันสมัย ทรงพลัง และใช้งานง่าย
              - generic [ref=e36]:
                - generic [ref=e37]: ลองใช้ฟรี 30 วัน
                - button " ดูวิดีโอ" [ref=e40] [cursor=pointer]:
                  - generic [ref=e41]: 
                  - generic [ref=e42]: ดูวิดีโอ
            - img "detail-image" [ref=e43]
        - generic [ref=e45]:
          - generic [ref=e46]:
            - generic [ref=e47]: ทดลองใช้งาน empeo ฟรี!
            - generic [ref=e48]: ไม่จำเป็นต้องใช้บัตรเครดิต ยกเลิกได้ทุกเมื่อ
          - generic [ref=e50]:
            - generic [ref=e51]:
              - generic [ref=e54] [cursor=pointer]:
                - radio [checked] [ref=e56]
                - generic [ref=e57]: บริษัทจดทะเบียนในไทย
              - generic [ref=e60] [cursor=pointer]:
                - radio [ref=e62]
                - generic [ref=e63]: อื่นๆ
            - generic [ref=e72]:
              - generic [ref=e75]: 
              - textbox "กรอกเลขประจำตัวผู้เสียภาษี หรือ ชื่อบริษัท" [ref=e78]: "0125558024568"
            - generic [ref=e82]:
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - textbox "ชื่อบริษัท*" [disabled]: บริษัท กสิกร ซอฟต์ จำกัด
            - generic [ref=e83]:
              - generic [ref=e91]:
                - generic [ref=e97]: เทคโนโลยี
                - generic [ref=e101] [cursor=pointer]: 
              - generic [ref=e109]:
                - generic [ref=e115]: 1-20
                - generic [ref=e119] [cursor=pointer]: 
            - textbox "อีเมล*" [ref=e128]: automation.1781445150759@gmail.com
            - generic [ref=e129]:
              - textbox "ชื่อ*" [ref=e137]: Automation
              - textbox "นามสกุล*" [ref=e145]: Tester
            - generic [ref=e148]:
              - generic [ref=e152]: "+66"
              - textbox "เบอร์มือถือ*" [ref=e154]: "0967690708"
            - generic [ref=e155]:
              - img "coupon" [ref=e156]
              - generic [ref=e157] [cursor=pointer]: ใช้โค้ดส่วนลด
            - generic [ref=e158]:
              - paragraph [ref=e159]:
                - checkbox [checked] [ref=e160] [cursor=pointer]: 
                - generic [ref=e161]:
                  - text: ฉันยอมรับ
                  - link "นโยบายความเป็นส่วนตัว" [ref=e162] [cursor=pointer]:
                    - /url: https://www.empeo.com/privacy-policy/
                  - text: และ
                  - link "ข้อกำหนดและเงื่อนไขการใช้งาน" [ref=e163] [cursor=pointer]:
                    - /url: https://www.empeo.com/terms-and-conditions/
              - text: 
            - button "ทดลองใช้ฟรี" [ref=e166] [cursor=pointer]:
              - generic [ref=e167]: ทดลองใช้ฟรี
          - generic [ref=e168]:
            - generic [ref=e169]:
              - img "image-step" [ref=e170]
              - generic [ref=e171]: ลงทะเบียนเรียบร้อย ใช้งานได้ทันที
            - generic [ref=e173]:
              - img "image-step" [ref=e174]
              - generic [ref=e175]: พร้อมคู่มือการใช้งาน ระบบแบบครบถ้วน
            - generic [ref=e177]:
              - img "image-step" [ref=e178]
              - generic [ref=e179]: พร้อมดูแลคุณ ผ่าน Live Chat ทุกวันไม่เว้นวันหยุด
      - generic [ref=e181]:
        - generic [ref=e182]:
          - generic [ref=e183]: empeo ระบบ HR ที่บริษัทต่างๆให้ความไว้วางใจ
          - generic [ref=e184]:
            - generic [ref=e185]:
              - img "footer-feature" [ref=e186]
              - generic [ref=e187]: 5,000+
              - generic [ref=e188]: บริษัท
            - generic [ref=e189]:
              - img "footer-feature" [ref=e190]
              - generic [ref=e191]: 45,000+
              - generic [ref=e192]: ผู้ใช้งานต่อวัน
            - generic [ref=e193]:
              - img "footer-feature" [ref=e194]
              - generic [ref=e195]: 30+
              - generic [ref=e196]: ทีมดูแลลูกค้ากว่า 30 คน
        - generic [ref=e199]:
          - list [ref=e200]:
            - listitem [ref=e201] [cursor=pointer]
            - listitem [ref=e202] [cursor=pointer]
            - listitem [ref=e203] [cursor=pointer]
          - generic [ref=e204]:
            - img [ref=e207]
            - img "image-preview" [ref=e210]
    - img "Crisp Chat" [ref=e212] [cursor=pointer]
  - generic [ref=e215]:
    - generic [ref=e216] [cursor=pointer]: 
    - generic [ref=e219]:
      - paragraph [ref=e220]: กรุณาตรวจสอบข้อความ
      - generic [ref=e221]:
        - paragraph [ref=e222]: โปรดกรอกรหัส OTP ที่ถูกส่งไปยัง 096-XXX-0708
        - paragraph [ref=e223]: "ref: 7600"
      - generic [ref=e226]:
        - textbox [ref=e227]
        - textbox [ref=e228]
        - textbox [ref=e229]
        - textbox [ref=e230]
        - textbox [ref=e231]
        - textbox [ref=e232]
      - button "ยืนยัน" [disabled] [ref=e235]:
        - generic: ยืนยัน
      - generic [ref=e237]: ยังไม่ได้รับ OTP? ส่งใหม่อีกครั้ง
```

# Test source

```ts
  473 |   async expectRequiredValidationMessagesForOtherCompany() {
  474 |     await this.expectOtherCompanyNameRequiredValidation();
  475 |     await this.expectBusinessTypeRequiredValidation();
  476 |     await this.expectUsersRequiredValidation();
  477 |     await this.expectEmailRequiredValidation();
  478 |     await this.expectFirstNameRequiredValidation();
  479 |     await this.expectLastNameRequiredValidation();
  480 |     await this.expectPhoneRequiredValidation();
  481 |     await this.expectTermsRequiredValidation();
  482 |   }
  483 | 
  484 |   async expectTextVisible(text: string | RegExp) {
  485 |     await expect(this.page.getByText(text).first()).toBeVisible();
  486 |   }
  487 | 
  488 |   async expectConfirmOtpDisabled() {
  489 |     await expect(this.otpConfirmButton).toBeDisabled();
  490 |   }
  491 | 
  492 |   async expectConfirmOtpEnabled() {
  493 |     await expect(this.otpConfirmButton).toBeEnabled();
  494 |   }
  495 | 
  496 |   async expectOtpModalDisplayed() {
  497 |     await expect(this.otpModal).toBeVisible();
  498 |     await expect(this.otpInputs.first()).toBeVisible();
  499 |     await expect(this.otpConfirmButton).toBeVisible();
  500 |   }
  501 | 
  502 |   async fillOtp(otp: string) {
  503 |     await expect(this.otpInputs.first()).toBeVisible();
  504 |     await this.otpInputs.first().click();
  505 |     await this.page.keyboard.type(otp, { delay: 100 });
  506 |     await this.page.waitForTimeout(1000);
  507 |   }
  508 | 
  509 | 
  510 |   async verifyOtp(otp: string) {
  511 |     await this.fillOtp(otp);
  512 |     await this.clickConfirmOtp();
  513 |   }
  514 | 
  515 |   async expectInvalidOtpToast() {
  516 |     await expect(this.otpToast).toBeVisible();
  517 |     await this.expectOtpModalDisplayed();
  518 |   }
  519 | 
  520 |   async expectResendOtpCountdown() {
  521 |     await expect(this.waitOtpText).toBeVisible();
  522 |   }
  523 | 
  524 |   async waitUntilResendOtpLinkVisible() {
  525 |     await expect(this.resendOtpLink).toBeVisible({ timeout: 40_000 });
  526 |   }
  527 | 
  528 |   async clickResendOtp() {
  529 |     await this.waitUntilResendOtpLinkVisible();
  530 |     await this.resendOtpLink.click();
  531 |   }
  532 | 
  533 |   async closeOtpModal() {
  534 |     await this.otpCloseButton.click();
  535 |   }
  536 | 
  537 |   async expectOtpModalClosed() {
  538 |     await expect(this.otpModal).not.toBeVisible();
  539 |   }
  540 | 
  541 |   async prepareValidThaiRegistrationUntilOtp(data: {
  542 |     companyKeyword: string;
  543 |     companyName: string | RegExp;
  544 |     businessType: string | RegExp;
  545 |     users: string | RegExp;
  546 |     email: string;
  547 |     firstName: string;
  548 |     lastName: string;
  549 |     phone: string;
  550 |   }) {
  551 |     await this.fillThaiRegisteredCompanyForm(data);
  552 |     await this.acceptTerms();
  553 |     await this.submitRegistration();
  554 |     await this.expectOtpModalDisplayed();
  555 |   }
  556 | 
  557 |   async prepareValidOtherCompanyRegistrationUntilOtp(data: {
  558 |     companyName: string;
  559 |     businessType: string | RegExp;
  560 |     users: string | RegExp;
  561 |     email: string;
  562 |     firstName: string;
  563 |     lastName: string;
  564 |     phone: string;
  565 |   }) {
  566 |     await this.fillOtherCompanyForm(data);
  567 |     await this.acceptTerms();
  568 |     await this.submitRegistration();
  569 |     await this.expectOtpModalDisplayed();
  570 |   }
  571 | 
  572 |   async expectRegistrationSuccess() {
> 573 |     await this.page.waitForURL(/\/Register\/empeo\/create-password\?token=/, {
      |                     ^ TimeoutError: page.waitForURL: Timeout 120000ms exceeded.
  574 |       timeout: 120_000,
  575 |      waitUntil: 'domcontentloaded',
  576 |     });
  577 | 
  578 |     await expect(this.createPasswordInput).toBeVisible({ timeout: 30_000 });
  579 |   }
  580 | }
  581 | 
```