# empeo Registration — Gherkin Test Cases
> As a user, I want to register for empeo so that I can use the HR management system.

---

**Background:**

- `Given the user has access to the empeo registration URL "https://portal.uat.gofive.co.th/Register/empeo"`

## 📄 Page Load

```gherkin
@TC_001 @positive @page-load
  Scenario: TC_001 - Verify registration page loads with default Thai registered company option selected
    When the user opens the empeo registration URL
    Then the registration page is displayed successfully
    And the "บริษัทจดทะเบียนในไทย" option is selected by default
    And the following fields are displayed:
      | Field                  |
      | Company search field   |
      | Business type dropdown |
      | Users dropdown         |
      | Email field            |
      | First name field       |
      | Last name field        |
      | Mobile number field    |
      | Promo code field       |
      | Terms checkbox         |
      | Submit button          |

```

## 🔘 Company Type

```gherkin
@TC_002 @positive @company-type
  Scenario: TC_002 - Verify form changes when user selects Other company type
    Given the user is on the empeo registration page
    When the user selects "อื่นๆ" radio option
    Then the "อื่นๆ" option is selected
    And the company name field is displayed instead of the company search field
    And all other required fields remain displayed

```

```gherkin
@TC_003 @positive @company-type
  Scenario: TC_003 - Verify form changes back when user selects Thai registered company type
    Given the user is on the empeo registration page
    And the user has selected "อื่นๆ" option
    When the user selects "บริษัทจดทะเบียนในไทย" radio option
    Then the "บริษัทจดทะเบียนในไทย" option is selected
    And the company search field is displayed
    And all other required fields remain displayed

```

## ✅ Validate Field — Empty Form

```gherkin
@TC_004 @negative @validation
  Scenario: TC_004 - Verify required field validation when submitting empty form for Thai registered company
    Given the user is on the registration page
    And the company type is "บริษัทจดทะเบียนในไทย"
    And all fields are empty
    When the user clicks "ทดลองใช้ฟรี" button
    Then the system prevents registration
    And the following required validation messages are displayed:
      | Field                              |
      | Company search required message    |
      | Business type required message     |
      | Users required message             |
      | Email required message             |
      | First name required message        |
      | Last name required message         |
      | Mobile number required message     |
      | Privacy policy and terms message   |

```

```gherkin
@TC_005 @negative @validation
  Scenario: TC_005 - Verify required field validation when submitting empty form for Other company type
    Given the user is on the registration page
    When the user selects "อื่นๆ" radio option
    And all fields are empty
    And the user clicks "ทดลองใช้ฟรี" button
    Then the system prevents registration
    And the following required validation messages are displayed:
      | Field                              |
      | Company name required message      |
      | Business type required message     |
      | Users required message             |
      | Email required message             |
      | First name required message        |
      | Last name required message         |
      | Mobile number required message     |
      | Privacy policy and terms message   |

```

## 🔍 Company Search

```gherkin
@TC_006 @positive @company-search
  Scenario: TC_006 - Verify user can search and select company by company name
    Given the user is on the registration page
    And the company type is "บริษัทจดทะเบียนในไทย"
    When the user enters "บริษัท โรโบเวลธ์กรุ๊ป จำกัด" in the company search field
    And the user selects the matching company from the search result
    Then the selected company is displayed in the company search field
    And no company validation error is displayed

```

```gherkin
@TC_007 @positive @company-search
  Scenario: TC_007 - Verify user can search and select company by tax ID
    Given the user is on the registration page
    And the company type is "บริษัทจดทะเบียนในไทย"
    When the user enters tax ID "0105563069591" in the company search field
    And the user selects the matching company from the search result
    Then the selected company is displayed in the company search field
    And no company validation error is displayed

```

```gherkin
@TC_008 @negative @company-search @validation
  Scenario: TC_008 - Verify company search field required validation for Thai registered company
    Given the user is on the registration page
    And the company type is "บริษัทจดทะเบียนในไทย"
    And the company search field is empty
    And other required fields are filled with valid data
    And the terms and conditions checkbox is accepted
    When the user clicks "ทดลองใช้ฟรี" button
    Then the system prevents registration
    And the company search field is highlighted as invalid
    And the validation message "กรุณากรอกเลขประจำตัวผู้เสียภาษีหรือชื่อบริษัท" is displayed

```

```gherkin
@TC_009 @negative @company-search @validation
  Scenario: TC_009 - Verify validation when selected Thai registered company has already been registered
    Given the user is on the registration page
    And the company type is "บริษัทจดทะเบียนในไทย"
    When the user enters tax ID "0745561010054" in the company search field
    And the user selects "บริษัท โกไฟว์ จำกัด" from the search result
    Then the company field is highlighted as invalid
    And the system displays a message that this company has already been registered
    And the message displays the masked registered email
    And the user cannot proceed with registration using this company

```

```gherkin
@TC_010 @negative @company-search
  Scenario: TC_010 - Verify company search with non-existing tax ID or company name
    Given the user is on the registration page
    And the company type is "บริษัทจดทะเบียนในไทย"
    When the user enters "9999999999999" in the company search field
    Then no matching company is displayed in the search result
    And the user cannot select any company
    And the user cannot proceed with invalid company data

```

## 🏢 Company Name (Other Type)

```gherkin
@TC_011 @positive @company-name
  Scenario: TC_011 - Verify user can enter company name for Other company type
    Given the user is on the registration page
    And the company type is "อื่นๆ"
    When the user enters "TestCompany" in the company name field
    Then the company name is accepted
    And no company name validation error is displayed

```

```gherkin
@TC_012 @negative @company-name @validation
  Scenario: TC_012 - Verify company name required validation for Other company type
    Given the user is on the registration page
    And the company type is "อื่นๆ"
    And the company name field is empty
    And other required fields are filled with valid data
    And the terms and conditions checkbox is accepted
    When the user clicks "ทดลองใช้ฟรี" button
    Then the system prevents registration
    And the company name field is highlighted as invalid
    And the company name required validation message is displayed

```

## 💼 Business Type

```gherkin
@TC_013 @positive @business-type
  Scenario: TC_013 - Verify user can select business type from dropdown
    Given the user is on the registration page
    When the user clicks the Business Type dropdown
    And the user selects a valid business type
    Then the selected business type is displayed in the field
    And no business type validation error is displayed

```

```gherkin
@TC_014 @negative @business-type @validation
  Scenario: TC_014 - Verify business type required field validation
    Given the user is on the registration page
    And the Business Type dropdown is unselected
    And other required fields are filled with valid data
    And the terms and conditions checkbox is accepted
    When the user clicks "ทดลองใช้ฟรี" button
    Then the system prevents registration
    And the Business Type dropdown is highlighted as invalid
    And the validation message "กรุณากรอกประเภทธุรกิจ" is displayed

```

## 👥 Users

```gherkin
@TC_015 @positive @users
  Scenario: TC_015 - Verify user can select number of users from dropdown
    Given the user is on the registration page
    When the user clicks the Users dropdown
    And the user selects a valid number of users
    Then the selected users value is displayed in the field
    And no users validation error is displayed

```

```gherkin
@TC_016 @negative @users @validation
  Scenario: TC_016 - Verify users required field validation
    Given the user is on the registration page
    And the Users dropdown is unselected
    And other required fields are filled with valid data
    And the terms and conditions checkbox is accepted
    When the user clicks "ทดลองใช้ฟรี" button
    Then the system prevents registration
    And the Users dropdown is highlighted as invalid
    And the validation message "กรุณากรอกผู้ใช้งาน" is displayed

```

## 📧 Email

```gherkin
@TC_017 @negative @email @validation
  Scenario: TC_017 - Verify email required field validation
    Given the user is on the registration page
    And the email field is empty
    And other required fields are filled with valid data
    And the terms and conditions checkbox is accepted
    When the user clicks "ทดลองใช้ฟรี" button
    Then the system prevents registration
    And the email field is highlighted as invalid
    And the validation message "กรุณากรอกอีเมล" is displayed

```

```gherkin
@TC_018 @negative @email @validation
  Scenario: TC_018 - Verify email format validation
    Given the user is on the registration page
    And other required fields are filled with valid data
    And the terms and conditions checkbox is accepted
    When the user enters "TTTTTTTT@gmail.c" in the email field
    And the user clicks "ทดลองใช้ฟรี" button
    Then the system prevents registration
    And the email field is highlighted as invalid
    And the validation message "กรุณาใส่อีเมลที่ถูกต้อง" is displayed

```

## 🪪 First Name / Last Name

```gherkin
@TC_019 @negative @first-name @validation
  Scenario: TC_019 - Verify first name required field validation
    Given the user is on the registration page
    And the first name field is empty
    And other required fields are filled with valid data
    And the terms and conditions checkbox is accepted
    When the user clicks "ทดลองใช้ฟรี" button
    Then the system prevents registration
    And the first name field is highlighted as invalid
    And the validation message "กรุณากรอกชื่อ" is displayed

```

```gherkin
@TC_020 @negative @last-name @validation
  Scenario: TC_020 - Verify last name required field validation
    Given the user is on the registration page
    And the last name field is empty
    And other required fields are filled with valid data
    And the terms and conditions checkbox is accepted
    When the user clicks "ทดลองใช้ฟรี" button
    Then the system prevents registration
    And the last name field is highlighted as invalid
    And the validation message "กรุณากรอกนามสกุล" is displayed

```

## 📱 Mobile Number

```gherkin
@TC_021 @negative @mobile @validation
  Scenario: TC_021 - Verify mobile number required field validation
    Given the user is on the registration page
    And the mobile number field is empty
    And other required fields are filled with valid data
    And the terms and conditions checkbox is accepted
    When the user clicks "ทดลองใช้ฟรี" button
    Then the system prevents registration
    And the mobile number field is highlighted as invalid
    And the validation message "กรุณากรอกเบอร์โทรศัพท์มือถือ" is displayed

```

```gherkin
@TC_022 @negative @mobile @validation
  Scenario: TC_022 - Verify invalid mobile number length validation
    Given the user is on the registration page
    And other required fields are filled with valid data
    And the terms and conditions checkbox is accepted
    When the user enters "12345" in the mobile number field
    And the user clicks "ทดลองใช้ฟรี" button
    Then the system prevents registration
    And the mobile number field is highlighted as invalid
    And the validation message "รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง" is displayed

```

```gherkin
@TC_023 @negative @mobile @validation
  Scenario: TC_023 - Verify mobile number field does not accept alphabet or special characters
    Given the user is on the registration page
    When the user enters "abc@$%" in the mobile number field
    Then the mobile number field does not accept alphabet or special characters

```

## 🌐 Country Code

```gherkin
@TC_024 @positive @country-code
  Scenario: TC_024 - Verify user can change country code
    Given the user is on the registration page
    When the user clicks the country code dropdown
    And the user selects country code "+93"
    Then the country code list is displayed
    And the selected country code "+93" is displayed in the mobile number field
    And the mobile number input remains available

```

## 🎟️ Promo Code

```gherkin
@TC_025 @positive @promo-code
  Scenario: TC_025 - Verify promo code field is displayed when user clicks Use Promo Code
    Given the user is on the registration page
    When the user clicks "ใช้โค้ดส่วนลด"
    Then the promo code input is displayed
    And the user can enter a promo code

```

```gherkin
@TC_026 @positive @promo-code
  Scenario: TC_026 - Verify valid promo code is accepted
    Given the user is on the registration page
    And the promo code field is displayed
    When the user enters promo code "FREE15DAY"
    Then the promo code is accepted
    And no invalid promo code validation message is displayed

```

## 📜 Terms and Conditions

```gherkin
@TC_027 @negative @terms @validation
  Scenario: TC_027 - Verify user cannot register without accepting privacy policy and terms
    Given the user is on the registration page
    And all required fields are filled with valid data
    And the terms and conditions checkbox is unchecked
    When the user clicks "ทดลองใช้ฟรี" button
    Then the system prevents registration
    And the checkbox validation message asks the user to accept privacy policy and terms of use

```

```gherkin
@TC_028 @positive @terms
  Scenario: TC_028 - Verify privacy policy and terms links are accessible
    Given the user is on the registration page
    When the user clicks the "นโยบายความเป็นส่วนตัว" link
    Then the privacy policy content is opened correctly
    When the user returns to the registration page
    And the user clicks the "ข้อกำหนดและเงื่อนไขการใช้งาน" link
    Then the terms of use content is opened correctly

```

## 🔐 OTP

```gherkin
@TC_029 @positive @otp
  Scenario: TC_029 - Verify OTP verification modal is displayed after submitting valid registration form
    Given the user is on the registration page
    And all required registration fields are filled with valid data including phone "0967690708"
    And the terms and conditions checkbox is accepted
    When the user clicks "ทดลองใช้ฟรี" button
    Then the registration form is submitted successfully
    And the OTP verification modal is displayed with:
      | Element                                     |
      | Background page is dimmed                   |
      | Modal title "กรุณาตรวจสอบข้อความ"          |
      | Masked phone number                         |
      | Reference code                              |
      | Six OTP input boxes                         |
      | Confirm button "ยืนยัน"                    |
      | Close icon                                  |

```

```gherkin
@TC_030 @positive @otp
  Scenario: TC_030 - Verify user can verify OTP successfully with valid 6-digit OTP
    Given the user is on the OTP verification modal
    When the user enters valid 6-digit OTP "123456"
    Then the confirm button "ยืนยัน" is enabled
    When the user clicks the confirm button "ยืนยัน"
    Then the system verifies OTP successfully
    And the user proceeds to the registration completion page

```

```gherkin
@TC_031 @negative @otp
  Scenario: TC_031 - Verify Confirm button remains disabled when OTP is empty or incomplete
    Given the user is on the OTP verification modal
    When the OTP input is empty
    Then the confirm button "ยืนยัน" is disabled
    When the user enters less than 6 OTP digits
    Then the confirm button "ยืนยัน" remains disabled
    When the user enters all 6 OTP digits
    Then the confirm button "ยืนยัน" is enabled

```

```gherkin
@TC_032 @negative @otp
  Scenario: TC_032 - Verify invalid OTP displays error toast and keeps user on OTP modal
    Given the user is on the OTP verification modal
    When the user enters incorrect 6-digit OTP "000000"
    And the user clicks the confirm button "ยืนยัน"
    Then the system prevents OTP verification
    And an error toast is displayed at the top-right of the page with:
      | Element       | Value                                      |
      | Toast title   | โปรดตรวจสอบอีกครั้ง                        |
      | Toast message | OTP ไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง       |
    And the OTP verification modal remains displayed
    And the masked phone number and reference code remain displayed
    And the OTP input is cleared or remains editable for retry
    And the countdown for requesting new OTP continues if still active

```

```gherkin
@TC_033 @positive @otp
  Scenario: TC_033 - Verify resend OTP link is displayed and clickable after countdown ends
    Given the user is on the OTP verification modal
    When the OTP countdown has ended
    Then the text "ยังไม่ได้รับ OTP? ส่งใหม่อีกครั้ง" is displayed
    And the "ส่งใหม่อีกครั้ง" link is clickable
    When the user clicks "ส่งใหม่อีกครั้ง"
    Then the system resends OTP successfully
    And the countdown starts again or a resend confirmation is displayed

```

```gherkin
@TC_034 @positive @otp
  Scenario: TC_034 - Verify user can close OTP verification modal
    Given the user is on the OTP verification modal
    When the user clicks the close icon on the OTP modal
    Then the OTP verification modal is closed
    And the user returns to the registration page
    And the background page becomes active again

```

## 🚀 Submit — End to End

```gherkin
@TC_035 @positive @submit @e2e
  Scenario: TC_035 - Verify user can submit registration for Thai registered company with valid data
    Given the user is on the empeo registration page
    When the user selects "บริษัทจดทะเบียนในไทย" radio option
    And the user enters a valid tax ID in the company search field
    And the user selects the matching company from the search result
    And the company is displayed in the company field with no validation error
    And the user selects a valid business type
    And the user selects a valid number of users
    And the user enters a valid unique email
    And the user enters first name "Automation"
    And the user enters last name "Tester"
    And the user enters mobile number "0967690708"
    And the user accepts the privacy policy and terms checkbox
    And the user clicks "ทดลองใช้ฟรี" button
    Then the OTP verification modal is displayed
    When the user enters valid OTP "123456"
    And the user clicks the confirm button "ยืนยัน"
    Then the registration is completed successfully
    And the user is redirected to the create password page

```

```gherkin
@TC_036 @positive @submit @e2e
  Scenario: TC_036 - Verify user can submit registration for Other registered company with valid data
    Given the user is on the empeo registration page
    When the user selects "อื่นๆ" radio option
    And the user enters company name "QA Test Company"
    And the user selects a valid business type
    And the user selects a valid number of users
    And the user enters a valid unique email
    And the user enters first name "Automation"
    And the user enters last name "Tester"
    And the user enters mobile number "0967690708"
    And the user accepts the privacy policy and terms checkbox
    And the user clicks "ทดลองใช้ฟรี" button
    Then the OTP verification modal is displayed
    When the user enters valid OTP "123456"
    And the user clicks the confirm button "ยืนยัน"
    Then the registration is completed successfully
    And the user is redirected to the create password page
```

