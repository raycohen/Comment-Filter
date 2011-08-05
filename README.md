Comment Filter
================================
A Chrome extension that removes comments from the Internet.


Overview
--------------------------
A growing number of websites allow users to leave comments on their articles, videos, and other content.  While the intent may have been born of a noble desire to foster discussion and community, the results are in and there is only one word to describe them: **ugly**.

Comment-prone internet denizens have taken to abusing this system. Finding a thread of comments that is not festering with logical fallacies, incorrect information, oversimplified analysis of complex issues, misspellings, poor grammar, and just generally dumb shit is nearly impossible.  Each time an optimistic young browser (such as yourself) gets to that special part of the page below the actual content, groans, muttered swears, and a feeling of disappointment with the world are not far off. 

Enter the comment filter.  A simple chrome extension that does its best to remove comments from the pages you browse **before** they can do damage.


Features
--------------------------

* Detects and removes widely used comment plugins, including those created by Disqus and Facebook.
* Attempts to identify and remove sections of the page likely to contain comments.

Coming Soon
--------------------------
* Sensitivity settings 
* White list for sites not to clean

Installation (for Users)
--------------------------

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
Chuckle to self as you reload this page and significant chunks of it suddenly disappear.
</pre>

3) Make the world a safer place.


About
-------------------------
This work is licensed under GPLv3.  Created by Rob Spectre initially for the "Jeter Filter", and molded into something immensely more useful by Raymond Cohen.