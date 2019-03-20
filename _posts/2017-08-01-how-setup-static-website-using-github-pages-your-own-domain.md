---
title: Setting up a static website using GitHub Pages and Cloudflare with custom domain
published: true
description: Discover how easy it is to setup a static website using Github Pages. Then, supercharge it with Cloudflare to secure it with HTTPS, Caching, and DDoS protection!
tags: github website webdev tutorial
original_url: https://www.linkedin.com/pulse/how-setup-static-website-using-github-pages-your-own-domain-patmore/
---

### These days...

If you want to setup a website there are a many different options, a la: Wordpress, Squarespace, Wix, Weebly, and many many more. The problems with these "website builders" is that you need to sign up and pay for features most of the time if you want functionality. Those features can include: Form Submission, Caching, and even SEO Optimizers. Not all of these are paid plugins, but many times they are. And the worst of all...ADs. The bane of everyone's existence, especially when you can't remove them unless you pay. You want your website to be yours! Creating your own static website, such as a personal one to showcase your work, is a great way to open yourself up to world and show them what you've got!

### You can pay someone...

While most of you who may read this are in the tech community and know a thing or two about Web Development, many of you may not. That is perfectly okay. Show them this guide if they are in the muck about how to serve your website and don't want to create some crazy backend for a static website. I know I wouldn't want to!

### Many guides I've seen...

They have given me the steps about how to serve a website, but there is always a detail the guide missed such as: SSL Certificates, A Records and CNAME Records. Before figuring it all out, I would be scratching my head to find answers. Not with this tutorial. I'm handing you all the knowledge I gathered in one complete package.

### The reason you should use GitHub Pages and Cloudflare together is because...

Well...THEY ARE BOTH COMPLETELY FREE! No seriously they are. You don't need some fancy web hosting service or buy SSL certificates. These two services handle all the brunt of the work for you with ease of mind included in the package, which is FREE. Who doesn't love free? Crazy people. That is who.

### Enough with the chit-chat, let's get started...

First off, if you don't already have one, create a GitHub account. It is fast and super easy. (And if you're a student, like me, you get a lot of free things from the dev pack: Dev Pack). Next, if you also haven't already done so, create a new repository. The button should be on the right side in green (at the time of this writing). Your next screen should look like this, or similar if it has changed:

![](https://cdn.filestackcontent.com/2vvNKKlQQgOCutJmwe3X)

### IMPORTANT STEP

For the repository name, you need to put a specific name as this is how GitHub will allow us to change the domain name later. The repository name, if you are using this for a personal site, would be: **<USERNAME>.github.io**, or just any plain repo name is fine if it for a project. So mine is **landonp1203.github.io** as that is my username. If you do this incorrectly, all of this will not work and you will be scratching your head later if you put a 1 instead of an I. Simple fix later, but triple check now so you don't have to later. Next you can add a description if you'd like and also a README, but that is outside the scope of this tutorial. Then click create repository. BOOM! First step done!

### Now we add the files and change some settings...

Hopefully before this tutorial, you or someone else created your website with HTML/CSS/JS. Now take those files and upload them to GitHub. Again, this is outside the scope of the tutorial and if you don't know how to, look at this link to help you out: [How to upload files to GitHub](https://help.github.com/articles/adding-a-file-to-a-repository/). Next, 1. we are going to create a new file called a CNAME file. A CNAME file is [this](https://en.wikipedia.org/wiki/CNAME_record). 2. Inside the CNAME file we are going to write the name of our domain name. Mine is [landonpatmore.com](https://landonpatmore.com) so that is what I will type. Then you will click "commit new file" and that will be added to your repo.

![](https://cdn.filestackcontent.com/IO6cq761Q22KKWj7xLMZ)

Finally, we are going to change some settings inside the repo, so click the **Settings** tab at the top of the page. Then scroll down until you see a section called 1. **GitHub Pages**. This is a critical part as well. 2. Inside the custom domain text box, type in your domain name exactly how you wrote it in the CNAME file. Again, failure to do this properly will lead to problems later on. 3. Then click **Save**.

![](https://cdn.filestackcontent.com/oSietoRXaTEIPHAhqAJA)

Because I have my website set up already, I have a status message telling me that my site is published and all is good. When you do this for the first time, you will get a warning message saying that Github can't resolve the domain name or something along those lines. Don't worry as the next steps will fix that for us!

### On to the meat of this endeavor...

We are done with GitHub at this time, but we will come back at the end to make sure that GitHub is seeing all of our changes. The next thing we want to do is go to our domain host, mine is Domain.com and login. Then click on your website and go to the DNS settings. We want to go to the settings that say "Nameservers" or "NS Records". This is how Cloudflare is going to handle our DNS settings for us! Once at that settings page, open up a new tab and go to [Cloudflare](https://cloudflare.com). Sign up if you haven't done so already and walk through the steps to add your website to Cloudflare. It is super-uber easy! You should come to a part in the set up where they give you "Cloudflare Nameservers". Copy these Nameservers one at a time and add them in the appropriate name server. There should be Nameserver 1 and Nameserver 2. Mine are, "paul.ns.cloudflare.com" and "rihana.ns.cloudflare.com" respectively. (Yes like the singer :) ). Yours will probably be different so use those, **not** mine.

![](https://cdn.filestackcontent.com/lVz5VcaQE2Mv70rKLFUS)

This will allow Cloudflare to take control of your DNS settings which is exactly what we want as this will allow us to use HTTPS which is super important today even if it's a website of just cat pictures. MEOW! (How cute is this cat???)

![](https://cdn.filestackcontent.com/G7jLWtfqRtGQnw6nrD97)

Now they say that the Nameserver change should take effect in **24 Hours**, but from my experience it takes no more than 10 minutes to propagate if done correctly. You can keep refreshing the Cloudflare page until it gives you confirmation that they have control of your DNS settings. Next, we are going to add some DNS records to Cloudflare. Click the DNS button on the top of the page and this will bring you to your DNS records.

![](https://cdn.filestackcontent.com/HH4g4KeTXOSRtHEQmliK)

You can delete your other records if there are any, unless they are being used for anything important. I just like clean records for exactly what I need. You will add **2 A Name Records**. In the first, the name will be your domain name exactly how you put it in your CNAME file, and the IPv4 address it points to will be **192.30.252.153**. The second record will have the same name, except the IPv4 address will be **192.30.252.154**. These IPs point to GitHub's servers to serve your website to the outside world. We will now add a CNAME record and the name will be **www** and the alias will be **<USERNAME>.github.io**. Also, where it shows the clouds under **Status**, click all of those and turn them orange. This allow for your website to use Cloudflare's CDN to accelerate and protect your website using their technology. What all of this is doing is saying, "Hey Browser, anytime I type this address in, you will point to GitHub's servers, who will find and serve this website". It's that easy. Also some type of wizardry. If you have a repo that isn't called **<USERNAME>.github.io**, that is okay, you will enter the same info. Again, some sort of wizardry is going on in the background and Github just works it out. (The CNAME in your repo is how GitHub knows which repo to serve). Now again, they say this can take up to **24 Hours** to propagate, but it will only 10 minutes from my experience. If you go back to your GitHub repo and open up the settings page, and you refresh after a little while, you should have an All Good status!

![](https://cdn.filestackcontent.com/nQMXJnhhSIyxdY9u4QFt)

You can now type in your domain name and it will point to your website! How cool is that?! But wait there is more. How?!

### We aren't done yet. Well, almost...

We haven't added HTTPS to our website silly! How are we going to do that if we haven't bought an SSL certificate and GitHub doesn't allow us to use HTTPS from their backend? One word: Cloudflare. It does it all. Click on **Firewall** on the top of the page and scroll down until you see **Security Level**. Change that to **High**, just for added protection against bots and DDOS. Next, click the **Crypto** button on the top of the page and inside the SSL box, change the setting from **Off** to **Full**, not "Full (strict)" as that will mean you need your own SSL certificates and whole slew of other things this tutorial doesn't cover. This is the one part that actually can take up to **24 Hours** to propagate as they have to set up certificates and other things. This took about **20 hours** before I saw the status saying **Active Certificate**. So just be patient, everything will work out!

![](https://cdn.filestackcontent.com/wSCxXVqAT0i8cCeK15ks)

Finally, we are now going to setup page redirection. We are going to do this so that no matter how the user enters the URL, they will be redirected to the HTTPS version of your website no matter what. Click on **Page Rules** at the top of the page and click **Add Page Rule**.

Here is the list of Page rules in order:

**I**. In the first text box, type: **https://<URL>/**. Then in the settings area, click the dropdown and select **Forwarding URL** and the box next to it **301 - Permanent Redirect**. Below that, type in **https://www.<URL>** . Click **Save and Deploy**. It should look like this:

![](https://cdn.filestackcontent.com/jbU7LJxlSNytopZ0bJ4J)

**II**. In the text box, type **http://www.<URL>/***. Then, in the settings area, click the dropdown and select **Always Use HTTPS**. Click **Save and Deploy**. It should look like this:

![](https://cdn.filestackcontent.com/jt3LrSqnS6eGmWYPHNe0)

**III**. In the text box, type **https://<URL>/*** . Then, in the settings area, click the dropdown and select **Cache Level**. For the next dropdown, select **Cache Everything**. Click **Save and Deploy**. It should look like this:

![](https://cdn.filestackcontent.com/lMHSdbAvSGSZRvsNbsFA)

### And that is it...

It is that simple. What we accomplished was:

1. Setting up free hosting of our static website with Github

Set up Cloudflare to handle our DNS settings

3. Set up Cloudlfare to send all traffic through HTTPS as well as Cache all of our files for the end user to experience faster load times

If you are experiencing any issues, **PLEASE PLEASE PLEASE** check your DNS settings. Use the website called [DNS Checker](https://dnschecker.org) which will allow you to check your DNS records. Make sure to check your Nameservers and IP addresses!

I know this was a long tutorial on how to do this, but I wanted to make sure that no one was as frustrated as me while doing this process the first time. Now, using these steps, it is a complete breeze and I hope it is for you as well! Go tinker with Cloudflare as they offer a lot of awesome things for free! If you have any questions or anything at all, please feel free to drop a comment below!

Enjoy your day and happy hacking!