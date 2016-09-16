/*
 * Test successfull authentication.
 */
describe('AngularJS App', function () {

		// *** Page Object Code ***
	  describe('visiting the login page', function () {
	    beforeEach(function () {
	      browser.get('/#/login');
	      browser.waitForAngular();
	    });

	    // *** Test Logic Code GOES HERE ***
	    // Enter correct credentials to login field
	  	describe('when a user enters a correct username and password', function() {
	  		it('should successfully log the user into the application', function() {
	  			element(By.model("email")).sendKeys("tom@qa.com");
	  			element(By.model("pass")).sendKeys("admin");

	  			element(By.id("submit")).click()

	  			var welcomeUserMessage = element(By.id("hi-usr"));
	  			expect(welcomeUserMessage.isPresent()).toBe(true);
	  		});
	  	});
	});
});