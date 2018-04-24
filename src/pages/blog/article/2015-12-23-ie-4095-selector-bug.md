---
layout: post
date: 2015-12-23
title: IE CSS 4095 selector gotcha is the worst
description: Ever have your css stop working after 4095 selectors are declared? Look no further try bless.
categories: article
image: ie-bug
---

Ever have your css stop working after 4095 selectors are declared? Look no further bless is here! Here are some tools to help you squash this annoying bug.

<!--more-->

Here is a visual aid to show how the problem works. If you're on a Mac like me then you can install [Virtual Box + Vagrant](https://github.com/xdissent/ievms) solution. Open this page in IE 9 or below. Inside the codepen scroll down to the bottom.
<p data-height="268" data-theme-id="0" data-slug-hash="FzxBg" data-default-tab="result" data-user="philipwalton" class='codepen'>See the Pen <a href='http://codepen.io/philipwalton/pen/FzxBg/'>4095 Selector IE Bug</a> by Philip Walton (<a href='http://codepen.io/philipwalton'>@philipwalton</a>) on <a href='http://codepen.io'>CodePen</a>.</p><script async src="//assets.codepen.io/assets/embed/ei.js"></script>

You'll see the red color stop after 4095 selectors are used from the stylesheet. Easy, just make another stylesheet and add selectors until the next you hit our favorite number again.

An elegant solution to this problem is [Bless](http://blesscss.com/). This app counts your css selectors to 4095 and creates a new stylesheet with the remainder. The other thing I like about this solution is it adds the @import to the original style.css. This worked well for me since I was working on a large site that would have required a lot of changes in order to add the additional css file.

Installation:

1. npm CLI `$ npm install -g blesscss` [CLI Usage](https://github.com/BlessCSS/bless#cli-usage)

2. Pass in a css file you would like blessed `$ blessc style.css`

3. Passing `-x` at the end as an argument will minify your code for example `$ blessc style.css -x`

4. Passing `--no-cleanup` at the end as an argument will prune old styles and update css file appropriately for example `$ blessc style.css --no-cleanup`

Even better solution is a [gulp plugin](https://www.npmjs.com/package/gulp-bless) I found created by [Adam Lynch](https://twitter.com/lynchy010). Installing and configuring his plugin will automate this process, which makes happy little web developers.

Installation:

  `$ npm install gulp-bless`

Usage:
{% highlight js %}
var gulp = require('gulp');
var bless = require('gulp-bless');

gulp.task('css', function() {
    gulp.src('style.css')
        .pipe(bless())
        .pipe(gulp.dest('./splitCSS'));
});

gulp.task('default', ['watch']);

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch('./css/*.css', ['css']);
});
{% endhighlight %}

Here is what I did to add the Bless gulp plugin to my build. First I included `var bless = require('gulp-bless');` at the top to initiate the plugin in my gulpfile file. Then I added `.pipe(bless()).pipe(gulp.dest('./splitCSS'));` to my css build task and that is it. Pretty simple and only takes a few minutes to install. Hope you find this helpful.
