/*
|--------------------------------------------------------------------------
| Google Analytics Tracking
|--------------------------------------------------------------------------
|
| This is the standard Google Analytics Javascript tracking code from
| their website. It's slightly modified because we use AngularJS
| routing, so it only had to send pageview whenever we don't.
| The Angulartics module takes care of tracking for us.
|
*/

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-xxxxxxxx-x', 'auto');

// Track non-AngularJS pages
if(window.location.href.indexOf('dashboard') == -1) {
   ga('send', 'pageview');
}