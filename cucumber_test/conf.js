exports.config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,
  //ignoreUncaughtExceptions: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
  },
  specs: [
    'features/*.feature'
  ],
  baseURL: 'http://localhost:8080/',
  cucumberOpts: {
    //require: ['features/step_definitions/step-definitions.js'],
    //require: ['./features/step_definitions/my_step_definitions.js'],
    require: './features/step_definitions/my_step_definitions.js',
    tags: false,
    //format: 'pretty',
    profile: false,
    'no-source': true
  }
};
