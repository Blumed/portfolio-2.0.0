---
layout: post
date: 2016-1-10
description: Using a jekyll gulp build system. Made a script to help automate social post image formatting and resizing.
title: Automate your social post images the easy way
categories: article
image: 01-20-2016-automation
---

Using jekyll and gulp to build your blog? I made a little tool that skips a step so you can post faster and go further. 

<!--more-->

Currently, I am learning unix at work, so what better way to learn something than to build a tool for myself. My tool takes a gulp task that runs through my uncompressed image assets folder and compresses/resizes/moves images to the desired social media folder. I only care about Open Graph and Twitter. The Open Graph should also work for schema.org, which I coupled together.

To start off this is my directory structure.

<img src="/images/file-structure.png" class="is-full-width"/>

You can modify my script any way you want, but just so you have a clear view of where to begin.

Here are the steps you'll need to take in order to implement this process.

1&#46; Read [David Ensinger](http://davidensinger.com/2013/04/adding-open-graph-tags-to-jekyll/) blog post about creating meta tag logic. Very helpful if you forget to add an image or leave something out. I like the idea that my pages all have default title/descriptions/images.

2&#46; Have your head look something like [mine](https://gist.github.com/Blumed/edd63e8b7a4648972b7d).

3&#46; Here is the bash script I [made](https://gist.github.com/Blumed/418639d749b15cf1ec52). Named my file social.sh and it is in the root of the project.

4&#46; $ `brew install imagemagick`

5&#46; $ `npm install gulp-exec --save-dev` be sure to be in the root of your project.

6&#46; Edit your gulp.js and be sure to restart gulp after changes are made.

    {% highlight js %}
    //initiate
    var gulp = require("gulp"), exec = require('child_process').exec;

    // Compress/Resize/Move images
    gulp.task('share', function(){
        exec('./social.sh', function (err, stdout, stderr) {
            console.log(stdout);
        });
    });
    {% endhighlight %}

7&#46; Since this is jekyll we need to edit the front matter so our default image is not used. Here is an example of my yaml front matter I have on this very article. As you can see I am only using the file name for the image data. The rest of the information is hidden away on the meta data.

{% highlight yaml %}
---
layout: post
date: 2016-01-20
title:  Automate your social post images the easy way
description: Using jekyll gulp build system I made a script to help automate social post image formatting and resizing.
categories: article
image: automating-social-images
---
{% endhighlight %}

8&#46; Open terminal and cd into the root of your project then type `gulp share` ... BOOM! or if you have built a string of production commands to run once you're ready to publish just add it and forget about it. Something like this.

{% highlight js %}
gulp.task("publish", ["build"], function () {
  gulp.start("html", "share", "copy", "images", "fonts", "javascript", "javascriptScripts");
});
{% endhighlight %}
