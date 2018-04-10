---
layout: post
date: 2015-11-08
description: Found a Safari box-shadow inset bug. An interesting prefetching issue that could be affecting your site.
title:  Safari Box Shadow Inset Bug
categories: article
---
Last week I found a little bug in Safari and it looked like this<br> 
```
box-shadow: inset 0 0 1000px 5px rgba(0,0,0,.9);
```

<!--more-->

We had tests from QA comeback with reports that our site would show up blank on Safari and Android 4.3. After hours of looking and removing chunks of css I finally found the culprit. These are the steps I found to reproduce it.

1. First turn on your OSX Activity Monitor and make sure the default is set to CPU and double click the colorful graph on the bottom. This opens up a persistent colored view of your CPU.
2. Open Safari clear cookies and cache, but do not clear history.
3. Type in the desired url and do not press enter. Safari will start prefetching your site. This activates the bug.
4. Watch your Activity Monitor see if Safari spikes to 300%. If it does it will slowly drop to 99% then climb back up to 300% and loop forever.

Once the prefetch starts and Enter is pressed. The page will be blank and after about 10 minutes the page will slowly load. This is horrible UX. Essentially the bug is a Safari prefetching box-shadow inset issue. A similar bug was reported with Chrome M39, which I found on [HackingUi blog post](http://hackingui.com/front-end/chrome-box-shadow-bug-that-crashed-our-site/) From what I can tell the Chrome issue has been fixed. As of 11-10-15 Safari has not fixed this issue. We ended up adding the vignette to the image and removing the box-shadow all together.

Later on in the week I have submitted the but to Safari. They have not contacted me back yet. I will update this post once they do.
