/** Negative flow to test -
 ** 1) Successful Login
 ** 2) Successful Logout
 ** 3) Tampering of login credentials
 ** 4) Unsuccessful Login
 */
// describe('Negative Authentication Flow', function () {

// 		// *** Page Object Code ***
// 	  describe('visiting the main page', function () {
// 	    beforeEach(function () {
// 	      browser.get('/#/');
// 	      browser.waitForAngular();
// 	    });

// 	    // *** Test Logic Code GOES HERE ***
// 	    describe('when the user clicks the enabled login button', function() {
// 	        it('should redirect the user to the login page', function() {
// 	        	// Store login button into attribute
// 	            var login_btn = element(By.id("login-btn"));

// 	            // test that button is present & enabled on webpage
// 	            expect(browser.isElementPresent(login_btn)).toBe(true);
// 	            expect(login_btn.isEnabled()).toBe(true);

// 	            // Simulate a user clicking onto login button
// 	            login_btn.click();

// 	            // Finally, check whether user is successfully redirected to the login page.
// 	            expect(browser.getCurrentUrl()).toMatch('http://localhost:9000/#/login');
// 	        });
// 	    }); 
// 	});

//   	// Enter correct credentials to login field
//   	describe('when a user enters a correct username and password', function() {
//   		it('should successfully log the user into the application', function() {
//   			element(By.model("email")).sendKeys("tom@qa.com");
//   			element(By.model("pass")).sendKeys("admin");

//   			element(By.id("submit")).click()

//   			expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/#/login');
//   		});
//   	});

//   	// Logout of application
//   	describe('when a user clicks the logout button', function () {
//   		it('should successfully log the user out of the application', function() {
//   			element(By.id("logout_btn")).click();
//   		});
//   	});
// });