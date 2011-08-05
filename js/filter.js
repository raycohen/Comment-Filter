/*
 * Comment Filter - Content Script
 * 
 * This is the primary JS file that manages the detection and filtration of Comments from the web page.
 */

function filterComments() {
  console.info('cleansing Disqus');
  $("#disqus_thread").remove();
  $("#comments, div.comments, section.comments").remove();

  $('iframe.comments').remove();

  console.info('cleansing Facebook');
  $('iframe[src^="http://www.facebook.com/plugins/comments.php"]').remove();
  $('iframe[src^="https://www.facebook.com/plugins/comments.php"]').remove();  
  $(document.getElementsByTagName('fb:comments')).remove();
  
  $('script[src^="http://intensedebate.com/comment"]').parent().remove();
  
  $('.sl-echo-comments').remove();
}

filterComments();

setTimeout(filterComments, 5000);
