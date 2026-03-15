exports.config = {

runner: 'local',

hostname: 'localhost',
port: 4723,
path: '/',

specs: ['./specs/**/*.js'],

maxInstances: 2,

capabilities: [{
 platformName: 'Android',
 'appium:deviceName': 'Android Emulator',
 'appium:automationName': 'UiAutomator2',
 'appium:app': './app/android-native-demo.apk'
}],

framework: 'mocha',

mochaOpts: {
 timeout: 60000,
 retries: 1
},

reporters: [
 'spec',
 ['allure', { outputDir: 'allure-results' }]
],

afterTest: async function (test, context, { error }) {

 if (error) {
  await browser.saveScreenshot(`./screenshots/${test.title}.png`)
 }

}

}