Comment Filter
================================
A Chrome extension that removes comments from the Internet.


Overview
--------------------------
A growing number of websites allow users to leave comments on their articles, videos, and other content.  While the intent may have been born of a noble desire to foster discussion and community, the results are in and there is only one word to describe them: **ugly**.

Comment-prone internet denizens have taken to abusing this system. Finding a thread of comments that is not festering with logical fallacies, incorrect information, oversimplified analysis of complex issues, misspellings, poor grammar, and just generally dumb shit is nearly impossible.  Each time an optimistic young browser (such as yourself) gets to that special part of the page below the actual content, groans, muttered swears, and a feeling of disappointment with the world are not far off.

Enter the comment filter.  A simple chrome extension that does its best to remove comments from the pages you browse **before** they can do damage.

References
--------------------------
* http://xkcd.com/481/
* http://flowingdata.com/2011/08/05/flowchart-should-you-argue-on-the-internet/
* http://www.hbo.com/real-time-with-bill-maher/episodes/0/223-episode/article/new-rules.html

Features
--------------------------

* Detects and removes widely used comment plugins, including those created by Facebook, Disqus, IntenseDebate and Echo.
* Attempts to identify and remove sections of the page likely to contain comments.

Try It Out
--------------------------
* http://developers.facebook.com/docs/reference/plugins/comments/
* http://www.huffingtonpost.com/2011/08/04/mark-zuckerberg-worst-dressed-silicon-valley-gq_n_918439.html
* http://www.engadget.com/2011/08/05/mapnificent-visualizes-public-transportation-travel-time-is-mor/
* http://www.youtube.com/watch?v=X9YMU0WeBwU&ob=av2e

Coming Soon
--------------------------
* Sensitivity settings 
* White list for sites not to clean

Installation (for Users)
--------------------------
**coming soon**

Just install the extension from the Chrome Web Store!

Then surf the web, comforted by the protection you are now afforded.


Installation (for Developers)
-------------------------
Want to hack on the Comment Filter?  Sweet!

Here's a howto to get the source of the Chrome Extension running in your environment.

1) Grab latest source
<pre>
git clone git@github.com:raycohen/Comment-Filter.git
</pre>

2) Enable Chrome Extension in your Chrome install
<pre>
Open Chrome.
Navigate to Settings... Tools... Extensions.
Click + on "Developer mode"
Click "Load unpacked extensions..."
Navigate to directory you installed Comment Filter and click Open.
You're Done... Visit a page with comments to try it out.
</pre>

3) Browse the web with less pain.


About
-------------------------
This work is licensed under GPLv3.  Created by Rob Spectre initially for the "Jeter Filter", and molded into something immensely more useful by Raymond Cohen.