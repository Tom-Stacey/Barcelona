require('jasmine-given');

// Protractor configuration 
exports.config = {
	// WebDriver selenium uri
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
        'browserName': 'chrome'
    },
  // All e2e specs to be run with Protractor & WebDriver
  specs: ['e2e/*.{js,coffee}'],
  baseUrl : 'http://localhost:9000/#/',

  framework: 'jasmine',

  jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        defaultTimeoutInterval: 300000
    },

    // Timeout speed
    allScriptsTimeout: 200000
};