---
layout: post
date: 2016-9-03
description: A webapp and bookmarklet for consistent device info and bug tracking communication
title: Created a Bookmarklet and this is what I learned
categories: article
image: consistent-device-date-better-bug-tracking
---

Bookmarklets are pretty neat and can be very useful if done right. I have made one recently and here are a few things I ran into. 

<!--more-->

First off the why of it. I work with a bunch of talented individuals at a growing digital agency. Our projects like most others, run through QA and client UAT once my part is done. When the tickets role in I often have to sift through each ticket and try to recreate the bug. Sometimes the bug documented is missing key small details about the device used to capture the bug. Pulling more details from clients can sometimes take longer than the bug ends up taking to get fixed. We needed a solid foundation to communicate effectively about each ticket. I sat down with QA and asked what information is often missing and I asked my dev team the same thing. Here is a list of items mentioned: 

<ol>
    <li>OS and Version</li>
    <li>Browser and Version</li>
    <li>Is it mobile?</li>
    <li>Device screen size</li>
    <li>Orientation</li>
    <li>Is the view Zoomed? - Not currently possible</li>
    <li>Url</li>
    <li>Date</li>
    <li>Time</li>
</ol>

All of these thing where pretty simple to gather minus the Zoom. Playing around with bookmarklets before I started creating a javascript file on my server. The bookmarklet call and run that script via ajax, but The W3C specification for Content Security Policy 1.0 has deemed this dangerous to users. So, I ended just make all the javascript fit in the URL field in the browser. This works in chrome, firefox, safari, but guess what. It doesn't work in IE Edge, 11, 10. IE 9 and below is pretty easy. IE Edge you have to bookmark a page and find the saved file deep in your computer. [Here is a link on how to do this](http://www.itworld.com/article/2954526/personal-technology/). Ultimately it is extremely inconvenient. IE 11 and 10 you just have to save the bookmark in a very specific way. This means I had to make separate instructions for each IE browser, which I did. Made it so you only see it if you are using that particular browser.

The tool renders on a page first so you can receive info on mobile devices. Just swap out the URL. Works great in browser testing services like [Browser Stack](https://www.browserstack.com/) or [Sauce Labs](https://saucelabs.com/). All and all it was a great project. Hopefully, we get the tool being used as the foundational stamp on all our bugs logged in the future. This should save a great deal of time and money. [Here is a link to the project](/project/device/). Feel free to use on your project if you would like. If you have any suggestions let me know down in the comments below or send me a friendly email. 