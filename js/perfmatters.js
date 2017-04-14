// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp
function logCRP(){var a=window.performance.timing,b=a.domContentLoadedEventStart-a.domLoading,c=a.domComplete-a.domLoading;document.getElementById("crp-stats").textContent="DCL: "+b+"ms, onload: "+c+"ms"}window.addEventListener("load",function(a){logCRP()});
