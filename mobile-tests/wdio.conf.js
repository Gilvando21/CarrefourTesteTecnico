exports.config = {

 runner: 'local',
 framework: 'mocha',
 specs: ['./test/specs/**/*.js'],

 reporters: [
  'spec',
  ['allure', { outputDir: 'allure-results' }]
 ],

 services: ['appium'],

 capabilities: [{
   platformName: 'Android',
   'appium:deviceName': 'Android Emulator',
   'appium:automationName': 'UiAutomator2'
 }],

 mochaOpts: {
   ui: 'bdd',
   timeout: 60000
 }

}