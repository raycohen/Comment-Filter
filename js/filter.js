/*
 * Comment Filter - Content Script
 * 
 * This is the primary JS file that manages the detection and filtration of Comments from the web page.
 */
console.info('removing Disqus element');
$("#disqus_thread").remove();
$("#comments").remove();

$("iframe[src^=http://www.facebook.com/plugins/comments.php]").remove();
$("iframe[src^=https://www.facebook.com/plugins/comments.php]").remove();