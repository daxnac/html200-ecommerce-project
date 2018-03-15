# Description

This is an assignment to build a responsive ecommerce web page. Nav and product container div will use flexbox. Sidebar/aside is a module that changes layout and location based on window size. Submitting the mailing list signup form results in user feedback on the page. Clicking a product's “add to cart” or “remove from cart” button updates cart count at top.

Students may use the provided mockups to guide their design to whatever extent they like. Matching the mockups is not required.

## Provided Materials

  - basic HTML and CSS
  - JSON list of products in script.js file
  - reset.css
  - images for all products
  - suggested design mockups

## Assignments

Lesson 03:

  - Make design decisions about how you'd like your site to look. You can use the provided mockups to guide your design to whatever extent you'd like- feel free to implement them exactly or make up your own design completely.
  - Code basic CSS for page. `reset.css` file should remain as it is. `main.css` file can be added to, changed, or completely redone.
  - `nav ul` and `.item-container` elements should be styled as flexbox containers. Implement a responsive grid system of your own design, or use a library, or don't use a grid at all. Be sure all important size values are proportional (em, rem, %).
  - We'll continue working on the CSS for this project throughout the course, in particular making it more responsive. The styling does not have to be perfect after this assignment. It's fine to change or add to the HTML as necessary for your styling.

Lesson 05:

  - Write a JS form handler function to be triggered on form submit. It should print to the console a friendly message that includes the value of the form element with name "email". Something like "Thanks for signing up for our mailing list, bobross@example.com!"

Lesson 06:

  - Serve appropriately sized images. Use GIMP or another photo-editing program to resize all images to more reasonable, consistent dimensions. This includes product images, the logo, and any background or other images you've included.

Lesson 07:

  - Write Javascript function that toggles the inclusion of a product in the "cart".
  - Add/edit HTML as necessary to trigger the function on click of a button for each product.

Lesson 08:

  - Write CSS that uses media queries to change layouts/style based on device size. There shoud be at least one obvious layout change in addition to elements fluidly changing width.
  - Finish styling the page.

Lesson 09:

  - Write Javascript that causes the total number of items in the cart to display next to the cart icon when that total changes.
  - Write Javascript that displays the friendly message on form submit in the page, not in the console.
  - Update the HTML and CSS as necessary to accomodate these changes.
  - Update the Testing section of this README with your own information.

*Extra Challenge*: Incorporate unit tests with [Qunit](https://qunitjs.com/).

*Extra Challenge*: Code a popup that toggles between hidden and displayed when user clicks on cart icon. It should show information about items in the cart (maybe list of their names, but up to you).

*Extra Challenge*: Serve appropriately sized images for user's device. Create multiple sizes of each image, and serve the appropriate one using the `srcset` and `sizes` attributes on the `img` tags. This will require naming all of the images consistently, e.g. "ombre-infinity400.jpg", "ombre-infinity200.jpg". [More](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) about [srcset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

*Extra Challenge*: Use browser storage to save details about a user's cart so when they revisit the page, it's in the same state as when they left it. [More about browser storage](https://www.w3schools.com/html/html5_webstorage.asp)

*Extra Challenge*: Dynamically generate the HTML for product listings from the JSON objects in script.js.

## Requirements

  - Site layout looks good on all sizes of devices. At a minimum, elements are proportionally styled and aside element changes location and layout at different screen sizes. This should be tested using a variety of devices and at least one online browser compatiblity testing tool.
  - Nav and product container elements are styled using flexbox.
  - Appropriately sized images are served.
  - User can add and remove items from their cart, which changes cart count number at top of page.
  - This README is updated to include information about the testing steps taken to ensure site quality.
  - Site is live on GH Pages hosting.

## Grading
Each weekly assignment will be graded independently. There will not be a final grade for the entire project.

## Testing

Target Audience:

  - Main users will be the general public, very diverse.  Mostly female with an age group of 18-35 years old. They will be mostly out in public, on the go and/or socilializing. I believe this is will be the main trigger or would attract these users go online to look for WWW products. Users get attracted at the trend of apparel the public is wearing.

  - These users will definitely be on mobile, based on he age group possibly on iPhones and Android devices. So expectation would be use of Safari and Chrome browsers.
  
  - Users will be a mix of low to high income bracket.

Testing:

  - Google Mobile Friendly Test
      Results: Passed responsiveness test
 
  - http://responsivedesignchecker.com/ - 
      Results: Site responsive and formatting is looks good on different devices.
      
  - Real iPhone 6+/ Safari
      Results: Speed, responsivenes and formatting are good.
      
  - Real Samsung Galaxy S8 / Chrome
      Results: Same as iPhone, Speed, responsivenes and formatting are good.
  
  - https://www.webpagetest.org 
      Results: A's, but with warning on the images. Images my need to be resized or optimized.
      - NOTE: Also, due to the current chilly season, expect possible increased traffic from fall to early spring season.

Site Design:

  - Overall the site is responsive but adjustments can be made based on user audience and testing results. Specifically to be mobile first and user friendly. Adjust some of the sections. The product list should be the priority, once users go on the site, provide categorization/filters for easy browsing and sorting. Then next would be the Cart, should be easy to add/remove and purchase. 
  
  - Assuming these users will be out but want the product as soon as possible, maybe add In-store pickup at nearest store or these users could just be showrooming as well.
  
  - Add a module that would show deals or on sale products
  
  - Based on the real phone testing, some adjustment to the size of the buttons can be done as users touch.
  
  - Images will needs to be resize to have better load times.
  
  - Monitor site and plan make adjustments to accomodate for future traffic increase.