---
layout: post
date: 2017-03-07
description: Quickly list all files in a directory with a bash function
title: Create a custom file list using a simple bash function
categories: article
image: cullan-luther-bash-functions
---

Often I find myself needing to copy and paste a bunch of file names into my code. This process on a mac can be arguise so I made a simple bash function to make this process a breeze.

<!--more-->

<iframe width="100%" height="315" src="https://www.youtube.com/embed/eZqLQf33yCE" frameborder="0" allowfullscreen></iframe>

<p class="spacer">
Paste the code found below into your .bash_profile found in the root of your computer. Open up a new terminal instance and boom you have a quick file list. The script will add the list automatically to your clipboard. No need to cat just paste. I have some improvements I am working on already, but if you have some ideas I would love to hear about them.
</p>


{% gist blumed/d928da541eed34fc0eb88675808219f5 %}