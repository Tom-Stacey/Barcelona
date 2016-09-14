// Protractor configuration 
exports.config = {
	// WebDriver selenium uri
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // All e2e specs to be run with Protractor & WebDriver
  specs: ['e2e/*.js']
};