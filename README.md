# Creative Project 3 Project Specification
## Overview
For your third Creative Project, you will explore different API's available as public web services
and use the Fetch API to asynchronously request and process response data on your own website. Learning how to find and use public APIs is
an extremely important skill in modern web development (and working with public datasets is one of the most fun parts of being a web developer!).

There are a ton of APIs on the web today - you can find ones for dog breeds, government datasets, dictionary web services, weather data, etc. With that, even when the data they respond with may be very interesting, some APIs can be frustrating to work with due to poor documentation (what? documentation is actually useful?) or outdated response formats (XML, HTML, etc.). The APIs supported for CP3 all return data in JSON or plaintext format since we cover that more in this class, and these formats tend to be easier to work with.

Specifically, you must choose from the following public APIs to request and process interesting data with and integrate into your own webpage:

* [Debt to the Penny API](https://www.transparency.treasury.gov/article/api-debt-to-the-penny)
* [PokeAPI](https://pokeapi.co/)
* [Dark Sky API ](https://darksky.net/dev/docs)
* [Last.fm API](https://www.last.fm/api/)
* [Chuck Norris API](http://www.icndb.com/api/)
* [BigOven API](https://api2.bigoven.com/)
* [N2YO API](https://www.n2yo.com/api/)
* [OpenSky API](https://opensky-network.org/apidoc/)
* [Lorem Picsum API](https://picsum.photos/)
* [Lyrics API](https://lyricsovh.docs.apiary.io/#)

**You must visibly cite the API you are using on your page** (e.g. in a page footer).

### Note about API Keys
* Some of these APIs require API keys - an API key is helpful to ensure the service isn't overloaded with requests from clients, and most public APIs you work with as a web developer will require some sort of key or authentication. Each API has sufficient documentation to get access to your key once you register for a developer account (required for a key). That said, feel free to visit WPL/OH if you have any questions about getting/using API keys! Remember that you should **not** be opting in to any paid subscription plan.

## Ideas for CP3
As a Creative Project, we encourage you to explore the new material covered in class, as well as related (but optional) content we may link to along the way, as long as you follow the CSE 154 Code Quality Guidelines and adhere to Academic Integrity policies. In past quarters, some students have built upon their Creative Project each week. You may choose to do a new website for each CP, or build on the existing project from previous CP's.

As long as you meet the requirements outlined below, you have freedom in what kind of website you create.

## Development Strategy for Using Fetch with an API
1. Design your page (either with a front-end or wireframe) to plan for your implementation, imagining if you had the data you wanted
from the API. **Do this before you write any Fetch call(s)**.
2. Find out how to build a URL to fetch from your chosen API (most APIs will have examples in their documentation).
    * What is the base URL? For example, the base URL of the [NASA Astronomy Photo of the Day (APOD)](https://api.nasa.gov/api.html#apod) API used in lecture is https://api.nasa.gov/planetary/apod.
    * What are any required parameters (often called query parameters) you need to add to the URL? For example, the APOD API requires a query parameter of "api_key" which accepts a value of an API key you can register for on the API's home page. Without registering for an API key, the APOD API conveniently lets you provide a value "DEMO_KEY" for a limited number of daily requests. Using this required parameter, you can make a request to https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY to get JSON data for the photo of the current day (try it!).  
    * Are there any optional parameters you can choose from to request specific information from the API? In the APOD API, you can also use an optional parameter called "date" documented on their API page to specify the date. For example, you can make a request to https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2000-01-30 to get the Astronomy photo of the day for January 30th, 2000. Some other APIs let you choose the date when filtering out response data, but they may use a different parameter name than date. All of the 6 APIs will specify what possible paths and parameters are available for you to use.
3. Get an example JSON representation from the API by visiting the URL with query parameters. Copy/paste the JSON into your browser console and expand the result to understand the hierarchy of an example JSON response for the API. Most APIs will have examples you can copy/paste in a new page and output the JSON. Make sure you use your API key as a query parameter if using an API that requires one. For testing, you may find it helpful to store the JSON as a temporary global variable so you can focus on working with the JSON data parsing and DOM manipulation before working with any Fetch calls. **Do not have any JSON stored in as global or module-global variables in your final submission**.
4. Go back to the API documentation for any clarifications on what any field names in the JSON mean. Some will be intuitive; some may need a bit of clarification in the documentation.
5. **Note: You can get up to this step without using any Fetch calls in your assignment.** Once you know how to access the field names you want for a response, finish your JS response function to use the JSON and update your page with the data you want to use to meet the external requirements.
6. To test possible errors (you will need to display a descriptive error message on the page if an API returns an error caught in the `catch` statement), you can temporarily replace your response function with the error-handling function in the fetch.
7. Can you think of any other ways to use the API (e.g. other query parameters or endpoints) or incorporate another API?

## External Requirements
Your project must include the following three files at a minimum:
  * `index.html` - main page of your website
  * `styles.css` - file to style your `.html` file
  * `index.js` - containing your JavaScript code

**Important note**: These files _must_ be named exactly as shown above and placed at the root of your cp3 directory. When submitting to Gradescope, you are expected to wait for the autograder to finish running to confirm that the code lints and that the directory structure is correct. We will not grade assignments with incorrect directory structure/missing any required files.

Your website must somehow dynamically load information from the web API you've chosen and present information from that response on the page. This requires that you must:
  * Respond to some event UI event in addition to the `load` to determine when to fetch the data
  * Dynamically integrate the data returned from the API into the page by manipulating the DOM elements in some non-trivial way using `element.appendChild`, `element.removeChild`, or `element.replaceChild`
  * Use the `checkStatus` function from lecture/section to throw an Error if the fetch response status is not `ok` before processing the data. This is a helper function we are requiring you to use (with JSDoc) in your AJAX programs, but the rest of your functions must be your own.
  * Handle any errors caused in the fetch request/response process by displaying a helpful message to the user on the page (i.e. without using `alert`, `console.log` or `console.error`). To do so, you should define a function (e.g. `handleError`) to implement the error-message-displaying and pass that function the `fetch` call chain's `catch` statement.

## Internal Requirements
For full credit, your page must not only match the External Requirements listed above, but you must also
demonstrate that you understand what it means to write code following a set of programming standards.
Your code should maintain good code quality by following the
  [CSE154 Code Quality Guide](https://courses.cs.washington.edu/courses/cse154/codequalityguide/). Make sure to review the section specific to JavaScript! We also expect you to implement relevant feedback from previous assignments. Some guidelines that are particularly important to remember for this assignment are included below.

### HTML/CSS
* Continue to follow the standards for your HTML/CSS, including consistent whitespace/indentation, proper use of classes/ids, separation of languages, avoiding redundancy in CSS, etc.

### JS
* Continue to follow the standards in the JS Code Quality Guidelines and CP2/HW2 specs. This includes good use of function decomposition, separation of JS from HTML/CSS, minimizing module-global variables, etc. A few reminders of common JS Code Quality issues in CP2/HW2/CP3:
* Minimize styling in JS (e.g. changing the `.style` property of elements) - prefer adding/removing classes to DOM elements instead, and
  style the classes in your CSS. Remember that there is an exception when dynamically generating values for styles or positions that are not reasonably factored out in CSS.
* Any `.js` code you use must use the module-global pattern (recall the module-global template) and `"use strict";`.
* Decompose your JS by writing smaller, more generic functions that complete one task rather than a few larger "do-everything" functions. Limit your use of anonymous functions - meaningful behavior should be factored out with a named function.
* Localize your variables as much as possible. You should not use any global variables (outside the module pattern) - see [Code Quality Guide](https://courses.cs.washington.edu/courses/cse154/codequalityguide/javascript/#module-pattern) for reference. Only use module-global variables whenever absolutely necessary. Do not store DOM element objects, such as those returned by the `document.getElementById` function, as module-global variables.
* **New** Any AJAX requests in your JS code must use the Fetch API.
* **New** Do not make unnecessary requests to the API. That is, there should be no code in your JS that requests from an API and **never** does anything with the response. Furthermore, be mindful of how frequently you are making requests to a web service. Some APIs will have request limits (e.g. 1000/day), so you'll want to make sure you aren't making redundant requests in loops/timers (it is normal for many pages to make one or few more requests to get the data needed).
* If you want to explore other JS features beyond what we've taught in class, you must cite what resources you used to learn them in order to be eligible for credit. We strongly encourage students to ask the staff for resources instead of finding online tutorials on their own (some are better than others).

#### All:
* Format your HTML/CSS/JS to be consistent and readable, similar to the examples from class: Properly use whitespace and indent code, as shown in class and in the [Code Quality Guide](https://courses.cs.washington.edu/courses/cse154/codequalityguide/javascript/#whitespace-before-blocks).
* Links to your `.html`,  `.css` and `.js` files should be **relative links**, not absolute.
* All file names and links in your project must be lowercased (e.g. `img/puppy.jpg` but not `img/puppy.JPG` or `img/Puppy.jpg`).
* For full credit, all HTML, CSS, and JS files must be well-formed and pass validation. The HTML, CSS, and JS validator/linters will run automatically each time you commit and push your work. In order to be eligible for full points on this CP, your code must pass all validation/linting (indicated by no errors and a green checkmark). See the resources page for a detailed guide explaining how to view your feedback. Note that these validators/linters may take some time to run, so make sure you leave enough time to make any necessary changes before the deadline. A slow linter is not a valid reason for why an assignment was turned in late. 
* Your page should include
[school-appropriate content](https://courses.cs.washington.edu/courses/cse154/20sp/syllabus/index.html#academic-conduct)
and [copyrights and citations](https://courses.cs.washington.edu/courses/cse154/20sp/index.html#copyright). If we find plagiarism in CPs or inappropriate content, **you will be ineligible for any points on the CP**. Ask the instructor if you're unsure if your work is appropriate/correctly cited.

## Grading
This CP will be out of 8 points and will likely (subject to adjustments) be distributed as:
* External Correctness (~50%)
* Internal Correctness (~40%)
* Documentation (~10%)

## Academic Integrity
Creative Projects are unique in that students may look for outside resources for inspiration or assistance
in accomplishing their goals. On occasion, students may wish to use portions of sample code that have been
obtained on our course website or others. In order to avoid academic misconduct for a Creative Project
in CSE 154 you must include
[school-appropriate content](https://courses.cs.washington.edu/courses/cse154/20sp/syllabus/index.html#academic-conduct)
and follow the Academic Integrity/Collaboration Policies outlined in more detail on the syllabus [here](https://courses.cs.washington.edu/courses/cse154/20sp/syllabus/index.html#cp-policies). If we find inappropriate content or plagiarism in CPs **you will be ineligible
for any points on the CP**. Ask the instructor if you're unsure if your work is cited appropriately. Any external sources like images should be cited where used in the source code or (ideally) visible in a page footer. Refer to this [copyright example](https://courses.cs.washington.edu/courses/cse154/20sp/code-examples/assets/copyright-examples/copyrightexample2.html) page for how to cite images from different sources.
