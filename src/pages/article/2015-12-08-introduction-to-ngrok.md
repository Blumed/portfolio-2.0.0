---
layout: post
date: 2015-12-03
title:  For a Secure Local Tunnel Try Ngrok
description: Ngrok quickly exposes a secure local tunnel via the command line. Simple and easy to use.
categories: article
---

Have you ever needed to show your progress to a client, but didn't want to push to a staging/test environment? I know I have. Passing the minimum three arguments on the command line can expose a local environment in seconds with Ngrok.

<!--more-->

We found ourselves in a situation in which our dev/test environments bottle necked our progress. Ngrok created the possibilities to use our local-host to test and work the bugs out on a specific device.

Quick setup guide for testing local code on external devices

1. [Download the application](https://ngrok.com/download)
2. Install $`unzip /path/to/ngrok.zip`
3. Personally I like ngrok in my home directory
4. Test install $`./ngrock -help`
5. If localhost:3000 is my local server then type $ `./ngrok http 3000` to launch ngrok.
6. Initial stats will show you how to access http/https address. Also you can watch your servers head/stats by going to [http://127.0.0.1:4040/status](http://127.0.0.1:4040/status)

Explore more possiblities visit [ngrok docs](https://ngrok.com/docs).

## Bash Argument Examples

Custom subdomain names<br>
`ngrok http -subdomain=yourcoolsite 80`

Set a password<br>
`ngrok http -auth="username:password" 8080`

Rewrite Headers<br>
`ngrok http -host-header=rewrite yourcoolsite:80`

Useful Combo<br>
`ngrok http -subdomain=local-host -host-header=rewrite local-host.com:80`

Check out this video which helped sell me on the idea of giving it a try.

<iframe width="100%" height="350px" src="https://www.youtube.com/embed/8iHJwBDrp_g" frameborder="0" allowfullscreen></iframe>
