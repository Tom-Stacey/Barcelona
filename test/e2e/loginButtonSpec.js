/*
 * Test that Login button is working as expected.
 */
describe('AngularJS App', function () {

		// *** Page Object Code ***
	  describe('visiting the main page', function () {
	    beforeEach(function () {
	      browser.get('/#/');
	      browser.waitForAngular();
	    });

	    // *** Test Logic Code GOES HERE ***
	    describe('when the user clicks the enabled login button', function() {
	        it('should redirect the user to the login page', function() {
	        	// Store login button into attribute
	            var login_btn = element(By.id("login-btn"));

	            // test that button is present & enabled on webpage
	            expect(browser.isElementPresent(login_btn)).toBe(true);
	            expect(login_btn.isEnabled()).toBe(true);

	            // Simulate a user clicking onto login button
	            login_btn.click();

	            // Finally, check whether user is successfully redirected to the login page.
	            expect(browser.getCurrentUrl()).toMatch('http://localhost:9000/#/login');
	        });
	    }); 
	});
});