/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
  describe('RSS Feeds', function() {

//tests to make sure that the allFeeds variable has been defined and that it is
// not empty
          it('Test allFeeds are defined', function() {
              expect(allFeeds).toBeDefined();
              //expect that allfeeds is not empty.
              expect(allFeeds.length).not.toBe(0);
            });

  //Test that loops through each feed in the allFeeds object and ensures it has a URL defined

          it('Test allfeeds has URL defined', function(){
            for (var i = 0 ; i < allFeeds.length ; i++){
                expect(allFeeds[i].url).toBeDefined()
                //expect that the URL is not empty.
                expect(allFeeds[i].url.length).not.toBe(0);
              }
            })

//Test that loops through each feed in the allFeeds object and ensures it has a name defined
//and that the name is not empty.

           it('Test allfeeds has name defined', function(){
             for(var i = 0; i < allFeeds.length ; i++){
               expect(allFeeds[i].name ).toBeDefined()
               //expect that the allFeeds name is not empty.
               expect(allFeeds[i].name.length).not.toBe(0)
                }
              })

  });
/* New test suite named "The menu" */
describe('The menu', function() {

  // Test that ensures the menu element is hidden by default in the menu element.
        it('Test menu hidden by default',function(){
          expect($('body').hasClass('menu-hidden')).toBe(true);
          })

//test that ensures the menu changes visibility when the menu icon is clicked.
      it('Test menu visibility when clicked',function(){

          $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
          $('.menu-icon-link').click();
          expect($('body').hasClass('menu-hidden')).toBe(true);
          });
});

    /* New test suite named "Initial Entries" */
describe('Initial Entries', function() {

// Test that ensures when the loadFeed function is called and completes its work.

          beforeEach(function(done) {
            setTimeout(function() {
            loadFeed(0, done)
            })
  // Make sure that it contents minimally one feed children
          }, 3000);
        it('Test minimally number of elements ', function(){
          expect($('.feed .entry').length).not.toBe(0);
            })
  });


/* New test suite named "New Feed Selection" */
describe('New Feed Selection', function() {

  //Test that ensures when a new feed is loaded by the loadFeed function that the
  //content actually changes.
  var test
          beforeEach(function(done) {
              loadFeed(0, function() {
                  test = $('.feed').html();
                  loadFeed(1, done);
              });
          });

          // Make sure that content actually changes when a new feed is loaded
          it('Content changes or not', function() {
              expect($('.feed').html()).not.toEqual(test);
          });
      });







}());
