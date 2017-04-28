## Website Performance Optimization portfolio project

This project focuses on optimizing an online portfolio site for speed! In particular, I optimized the critical rendering path and made this page render as quickly as possible by applying techniques learned in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

### Getting started

To get started, download the completed project here: https://github.com/abgregs/frontend-nanodegree-mobile-portfolio

### Optimizations Made

To optimize views/pizza.html, modifications were made to views/js/main.js to achieve a rate of ~60 fps or higher when scrolling. Changes were also made to ensure it takes less than 5 ms each time the pizzas are resized using the slider bar.

The optimizations made to achieve ~60 fps were as follows:

In the function updatePositions() the calculation performed to get the scroll position was taken out of the for loop to eliminate redundant queries made each time the loop runs. In the event listener used on scrolling, the call to updatePositions() was updated to use requestAnimationFrame.

The optimizations made to reduce the time for resizing the pizzas were as follows:

In the function changePizzaSizes(size) the redundant uses of document.querySelectorAll('randomPizzaContainer') were consolidated and assigned to a single variable outside the for loop. The unnecessary call to determineDx() was also eliminated from the function.

To optimize index.html for a PageSpeed score of 90 or higher, the following changes were made:

Optimized/compressed the images
Moved all js to the bottom of the body
Minified CSS and JS files
Added async attribute to JS files
Added media="print to print.css
Removed the webfont
Inlined styles.css

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
