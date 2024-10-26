---
layout: blog/24/10/100daystounload.njk
title: "Congrats, you Accomplished Nothing (Internet Archive DDoS)"
date: 2024-10-10
light: "#ffdad4"
dark: "#3a0a04"
accent: "#ff3300"
articleNumber: 4
permalink: "/more/archive/blog/2024/10/iadown.html"
---
The Internet Archive (will be referred to as IA for the rest of this post) just cannot seem to catch a break. First they had to shut down their virtual library, and now they just got breached. This is one of the dumbest breaches yet, I felt physical pain reading everything.

## Data Breach

IA has been suffering multiple data breaches recently, taking it offline. As of me writing this, the IA is still completely offline:

![Screenshot of a temporary service unavailable screen on the Internet Archive](https://i.imgur.com/VFNb9ko.png)

DDoS attacks happen all of the time to the IA, for some reason. However, I'm not at the DDoS part yet. The only reason I'm bringing it up is because during one of the attacks, users visiting the IA would see this message displayed in a Javascript pop-up:[^1]

> Have you ever felt like the Internet Archive runs on sticks and is constantly on the verge of suffering a catastrophic security breach? It just happened. See 31 million of you on \[have i been pwned]!

According to the [Twitter account of Have I Been Pwned](https://twitter.com/haveibeenpwned/status/1844146274758689206){target=_blank}, 31 million accounts were breached, 54% already in the database. This is all of the information that was taken in this breach:

- Usernames
- Emails
- Encrypted passwords

Brewster Kahle, the founder of the IA, responded on Twitter:

<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">What we know: DDOS attack–fended off for now; defacement of our website via JS library; breach of usernames/email/salted-encrypted passwords.<br><br>What we’ve done: Disabled the JS library, scrubbing systems, upgrading security.<br><br>Will share more as we know it.</p>&mdash; Brewster Kahle (@brewster_kahle) <a href="https://twitter.com/brewster_kahle/status/1844183111514603812?ref_src=twsrc%5Etfw">October 10, 2024</a></blockquote>

I would like to mention that this breech is not in any way connected to the DDoS attacks, yet. Troy Hunt from Have I Been Pwned [said he was sent the file on September 30](https://twitter.com/troyhunt/status/1844148532703526928){target=_blank}. Now, let's talk about the actual DDoS attacks.

## DDoS Attacks

This is where things start to get a little stupid. The DDoS attacks against the IA were sent by the BlackMeta hacktivist group.[^2] Information about the attack was shared by the attackers on Twitter:

<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">The Internet archive has and is suffering from a devastating attack We have been launching several highly successful attacks for five long hours and, to this moment, all their systems are completely down.<br><br>second round | New attack <br>09/10/2024 Duration 6 hours… <a href="https://t.co/SL9lz4gSld">pic.twitter.com/SL9lz4gSld</a></p>&mdash; 𝐒𝐍_𝐁𝐋𝐀𝐂𝐊𝐌𝐄𝐓𝐀 (@Sn_darkmeta) <a href="https://twitter.com/Sn_darkmeta/status/1844080692772401399?ref_src=twsrc%5Etfw">October 9, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

The reason why is incredibly stupid. If Twitter's Birdwatch note didn't spoil it for you, the attacker shared the motive in a follow up Tweet:

<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">They are under attack because the archive belongs to the USA, and as we all know, this horrendous and hypocritical government supports the genocide that is being carried out by the terrorist state of “Israel”.</p>&mdash; 𝐒𝐍_𝐁𝐋𝐀𝐂𝐊𝐌𝐄𝐓𝐀 (@Sn_darkmeta) <a href="https://twitter.com/Sn_darkmeta/status/1844104165192253945?ref_src=twsrc%5Etfw">October 9, 2024</a></blockquote>

The reason why is because the attacker thinks the U.S. government owns the Internet Archive (they don't), and they're doing this to protest against supporting the genocide of Palestine that Israel is carrying out, which the U.S. government supports. First off, fuck Israel. But at the same time, if you're going to send a message, make sure you're sending it to the right people. My theory is that this isn't the actual reason behind the attack, just an excuse. After all, taking down the IA can actually be used for pro-Palestine activities, as [@lamborghinibank points out](https://twitter.com/lamborghinibank/status/1844195014621946210){target=_blank}.

Don't worry, this get's dumber. When confronted about this, they completely dodged the question, and instead decided to address the blue check allegations:

<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">Who said we paid whit our money for the bleu check :)</p>&mdash; 𝐒𝐍_𝐁𝐋𝐀𝐂𝐊𝐌𝐄𝐓𝐀 (@Sn_darkmeta) <a href="https://twitter.com/Sn_darkmeta/status/1844109202119328045?ref_src=twsrc%5Etfw">October 9, 2024</a></blockquote>

That's right, they find it completely acceptable to purchase a blue check because they aren't spending their own money. Always remember to brag about your crimes online, cool people will even show up to your door to congratulate you.

So, yeah Blackmeta, [you're gay](https://youtu.be/6jQkxsEbnS4){target=_blank}.
## Sources

[^1]: https://www.theverge.com/2024/10/9/24266419/internet-archive-ddos-attack-pop-up-message
[^2]: https://www.bleepingcomputer.com/news/security/internet-archive-hacked-data-breach-impacts-31-million-users/