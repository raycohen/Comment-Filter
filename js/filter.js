/*
 * Comment Filter - Content Script
 * 
 * This is the primary JS file that manages the detection and filtration of Comments from the web page.
 */
console.info('removing Disqus element');

function filterComments() {
  $("#disqus_thread").remove();
  $("#comments").remove();

  $('iframe.comments').remove();

  $('iframe[src^="http://www.facebook.com/plugins/comments.php"]').remove();
  $('iframe[src^="https://www.facebook.com/plugins/comments.php"]').remove();
  
  $('script[src^="http://intensedebate.com/comment"]').parent().remove();
  
  $('.sl-echo-comments').remove();
}

filterComments();

setTimeout(filterComments, 5000);
