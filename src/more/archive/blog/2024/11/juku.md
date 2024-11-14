---
layout: blog/24/10/100daystounload.njk
title: "The Time Microsoft Copy Pasted an Entire Social Media"
date: 2024-11-13
light: "#b6f1bb"
dark: "#002109"
accent: "#00ff77"
articleNumber: 38
permalink: "/more/archive/blog/2024/11/juku.html"
---
It seems like these days every social media network is becoming a copy of each other, while most people only use the main gimmick of the network anyway. However, in 2009 Microsoft actually completely copied another social network, not just the features, but even the code itself.

One thing many people forget is that many companies operate completely different in China, making different versions of the same product. The most popular example is Douyin, the Chinese version of TikTok. However, other services such as Minecraft also have dedicated Chinese versions, too. Microsoft's MSN also had a Chinese version, titled MSN China.

In 2009, MSN China decided to launch a microblogging platform called MSN Juku. Because it was a microblogging platform, it was obviously compared to Twitter. But another platform that MSN Juku was compared to even more heavily was Plurk, an at the time popular microblogging platform in Asia.

In fact, it was a little **too** similar, to the point where Plurk launched an investigation and [published it to their blog](https://web.archive.org/web/20091216064543/http://blog.plurk.com/2009/12/14/microsoft-rips-plurk/){target=_blank}. And when you look at screenshots comparing the two, you will notice that they are extremely similar to each other.

![Screenshot comparing 2 social networking websites which look incredibly alike](https://i.imgur.com/cWQgL9K.png)

However, the Plurk team decided to dig even deeper into this, and found that 80% of the code was basically copy and pasted and changed to be slightly different. Here is an example of a  code snippet written by Plurk:

```
TimeLine = {
	init: function(light) {
		this.blocks = [];
		this.plurks = [];
		this.active_blocks = [];
		
		this.getting_plurks = false;
		this.move_tl = false;
		this.mode = 'friends';
		
		if(!light) {
			this.offset = 0;
			this.real_end_offsets = {};
			this.fetch_count = {};
			this.highlight_ids = {};
		}
```

Now compare this to the code from MSN Juku:

```
TimeLine =
{
	init: function(C)
	{
		this.blocks = [];
		this.walls = [];
		this.active_blocks = [];
		this.getting_walls = false;
		this.move_tl = false;
		this.in_ml = false;
		this.mode = "own";
		if (!C)
		{
			this.offset = 0;
			this.real_end_ffsets =
			{};
			this.fetch_count =
			{};
			this.highlight_ids =
			{}
		}
```

Quite similar, don't you think?

MSN Juku was never released past Beta. In fact, the day after the blog post was released, [Microsoft issued a press release](https://web.archive.org/web/20091217190140/http://www.microsoft.com/presspass/press/2009/dec09/12-15statement.mspx){target=_blank} confirming that stolen code was indeed used, and that the application was developed by a third party. The service was immediately shut down, and Microsoft issued an apology to Plurk.

[Plurk issued a response to Microsoft](https://web.archive.org/web/20110701062603/http://en.blog.plurk.com/2009/12/17/plurks-response-to-microsofts-apology/){target=_blank}, saying that they were still debating on taking more legal action, as Microsoft didn't take any accountability, only responsibility, and because Microsoft is a large company with a huge budget, while the Plurk team is just a few people.