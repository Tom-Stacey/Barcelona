/** Positive flow to test -
 ** 1) Successful Login
 ** 2) Successful Logout
 ** 3) Tampering of login credentials
 ** 4) Unsuccessful Login
 */
describe('Navbar displays correctly', function () {

		// *** Page Object Code ***
	  describe('visiting the main page', function () {
	    beforeEach(function () {
	      browser.get('/#/');
	      browser.waitForAngular();
	    });



	    // *** Test Logic Code GOES HERE ***
	    describe('when the user looks at the navbar without being logged in', function() {
	        it('should show Home and About and nothing else', function() {
	            // test that button is present & enabled on webpage

                var home_btn = element(By.id("home"));
			    var about_btn = element(By.id("about"));
			    var talks_btn = element(By.id("talks"));
			    var attendees_btn = element(By.id("attendees"));

	            expect(browser.isElementPresent(home_btn)).toBe(true);
	            expect(browser.isElementPresent(about_btn)).toBe(true);
	            expect(browser.isElementPresent(talks_btn)).toBe(false);
	            expect(browser.isElementPresent(attendees_btn)).toBe(false);
	            expect(home_btn.isEnabled()).toBe(true);
	            expect(about_btn.isEnabled()).toBe(false);

	            // Simulate a user clicking onto login button
	            login_btn.click();

	            // Finally, check whether user is successfully redirected to the login page.
	            expect(browser.getCurrentUrl()).toMatch('http://localhost:9000/#/login');
	        });
	    }); 
	});

  	// Enter correct credentials to login field
  	describe('when a user logs in', function() {
  		it('should show talks and attendees in the navbar', function() {
		    var home_btn = element(By.id("home"));
		    var about_btn = element(By.id("about"));
		    var talks_btn = element(By.id("talks"));
		    var attendees_btn = element(By.id("attendees"));

  			element(By.model("email")).sendKeys("tom@qa.com");
  			element(By.model("pass")).sendKeys("admin");

  			element(By.id("submit")).click()

            expect(browser.isElementPresent(home_btn)).toBe(true);
            expect(browser.isElementPresent(about_btn)).toBe(true);
            expect(browser.isElementPresent(talks_btn)).toBe(true);
            expect(browser.isElementPresent(attendees_btn)).toBe(true);
  		});
  	});

  	// Logout of application
  	describe('when a user clicks the logout button', function () {
  		it('should successfully hide the talks and attendees buttons', function() {
			var home_btn = element(By.id("home"));
		    var about_btn = element(By.id("about"));
		    var talks_btn = element(By.id("talks"));
		    var attendees_btn = element(By.id("attendees"));
  			
  			element(By.id("logout-btn")).click();

            expect(browser.isElementPresent(home_btn)).toBe(true);
            expect(browser.isElementPresent(about_btn)).toBe(true);
            expect(browser.isElementPresent(talks_btn)).toBe(false);
            expect(browser.isElementPresent(attendees_btn)).toBe(false);
  		});
  	});
});