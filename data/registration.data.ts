export const registrationData = {
  url: '/Register/empeo',

  thaiRegisteredCompany: {
    taxId: '0125558024568',
    companyName: 'บริษัท กสิกร ซอฟต์ จำกัด',
  },

  usedThaiRegisteredCompany: {
    taxId: '0745561010054',
    companyName: 'บริษัท โกไฟว์ จำกัด',
  },

  nonExistingCompany: {
    taxId: '9999999999999',
    companyName: 'NonExistingCompany',
  },

  otherCompany: {
    companyName: `QA Test Company ${Date.now()}`,
  },

  user: {
    businessType: 'เทคโนโลยี',
    users: ' 1-20 ',
    email: `automation.${Date.now()}@gmail.com`,
    firstName: 'Automation',
    lastName: 'Tester',
    phone: '0967690708',
  },

  invalid: {
    email: 'invalid-email',
    mobileForFailed: '0951415919',
    mobileShort: '12345',
    mobileText: 'abc@$%',
    promoCode: 'INVALIDCODE',
    otp: '000000',
    incompleteOtp: '123',
  },

  promoCode: 'FREE15DAY',
  otp: '123456',
  countryCode: '+93',
};
