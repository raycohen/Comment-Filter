/*
 * Comment Filter - Content Script
 * 
 * This is the primary JS file that manages the detection and filtration of Comments from the web page.
 */

function filterComments() {
  $("#disqus_thread").remove();
  $("#comments, div.comments, section.comments, #comments-view").remove();

  $('iframe.comments').remove();
  
  $('iframe[src^="http://www.facebook.com/plugins/comments.php"]').remove();
  $('iframe[src^="https://www.facebook.com/plugins/comments.php"]').remove();  
  $(document.getElementsByTagName('fb:comments')).remove();
  
  $('script[src^="http://intensedebate.com/comment"]').parent().remove();
  
  $('.sl-echo-comments').remove();
}

filterComments();

setTimeout(filterComments, 5000);
