---
layout: post
date: 2016-11-23
description: Make a Node.js build system launcher for quicly launching new projects
title: Making a Node.js build system generator
categories: article
image: cullanluther-nodejs-icon-card
---

At work we use a custom, static site build system. Ingredients include the latest and greatest of front-end buzz words. We needed an easy way to launch it quickly so I volunteered.

<!--more-->
<img class="is-full-width" src="/images/cullanluther-nodejs-icon-card.svg">
Projects can move fast so the team needs a tool that is both quick and nimble. We use a highly customized build system that is both flexible and solid. So, the need to launch our build tool for both ease of use and speed is important.

##Bash
My first attempt at the launcher was a bash script. I am pretty familiar with bash at this point, so it was an obvious first choice. With bash you have the ability to manipulate files on your computer and download repos from the web. You can do much much more but the project required these two necessities. My goal was to mimic a yeoman generator. Here is the flow:


1. Copy/paste a long init terminal command from repo, which downloads the repo and moves it to your root, adds code to your .bash_profile, creates a credentials dot file for the script to reference in global variables
2. Opening up a new terminal tab because scripts created in the current pane won’t work until a new instance has been created
3. Enter the alias to launch strings of questions. Each question runs checks to make sure old and new users will have the same experience.
4. If all questions are answered correctly it clones the repo, and moves it to where you specify, creates a folder based on the project name, runs npm install and gulps it for you

Pain points: No one else knew bash, so if I left it would be a struggle for anyone to maintain it. Another issue, no one could remember their freaking repo credentials! If the user has to run the script multiple time because they can’t remember their password then it isn’t going to be very quick.

##Node.js
The second attempt was a real fun growing experience. Never built anything in node directly, but I have done enough custom work in gulp so things looked pretty familiar. Here is the flow:


1. Download the repo
2. `$ cd` into it and run `$ npm install`
3. Then `$ npm install -g`
4. Answer 3 questions and if all are correct it clones the repo, creates and stores repo in a folder using the project name, runs npm install and gulps


Pain points: I can't really think of any, but if I do I will be sure to update this section.

I have changed my script a bit to keep some things private, but here is the shell of the script. [Build Tool Generator](https://github.com/Blumed/build-tool-launcher)
