Mars sits down opposite you. They're broad-shouldered and a bit too tall for their chair. They look embarassed to be here. #{"background": "moonshot-main"}

-> mars_intro

=== mars_intro ===
Uh. Hey there. #{"name": "Mars", "mood": "defensive"}
*   [Heya! How are you?] -> mars_1
*   [Hi. How are you?] -> mars_3
*   [Uh. Hi.] -> mars_2

=== mars_1 ===

Heh, hello!   #{"name": "Mars", "mood": "pleased", "affinity": 3}

-> mars_3

=== mars_2 ===

... #{"name": "Mars", "mood": "defensive", "affinity": -1}

* [ So... How are you?] -> mars_3
* [So... What are you into?] -> swords_segue_2 //TODO: Link this
* [...] -> mars_torture_1


=== mars_torture_1 ===

... #{"name": "Mars", "mood": "defensive", "affinity": -1}

* [ So... How are you?] -> mars_3
* [So... What are you into?] -> swords_segue_2 //TODO: Link this
* [...] -> mars_torture_2

=== mars_torture_2 ===

... #{"name": "Mars", "mood": "tortured", "affinity": -1}

* [ So... How are you?] -> mars_3
* [So... What are you into?] -> swords_segue_2 //TOSO: Link this
* [...] -> mars_end_8

=== mars_3 ===

I'm... okay, I guess. I've never done one of these before... #{"name": "Mars", "mood": "submisive", "affinity": 1}

*   [I can tell.] -> mars_5
*   [Me neither.] -> mars_6
*   [Don't worry about it.] -> mars_7

=== mars_5 ===

It's that obvious huh?  #{"name": "Mars", "mood": "embarassed", "affinity": -2}

-> mars_8

=== mars_6 ===

Heh, I'm glad it's not just me. #{"name": "Mars", "mood": "smile", "affinity": 1}

-> mars_8

== mars_7 ===

Um... Thanks. I'll try not to. #{"name": "Mars", "mood": "smile"}

-> mars_8

=== mars_8 ===

Sorry. I'm kind of shy sometimes. #{"name": "Mars", "mood": "defensive"}

So, uh... What should we talk about? #{"name": "Mars", "mood": "submissive"}

* [What are your interests?] -> swords_segue_1
* [Why are you here?]   -> why_here_1
* [What are you looking for?] -> looking_for_1
* [Tell me about the -real- you.] -> real_you_1

=== swords_segue_1 ===

Um, well, I like swords! I've got a ton of 'em! #{"name": "Mars", "mood": "excited"}

* [Oh, you collect swords?] -> swords_1
* [Oh, you're a "sword guy"?] -> swords_2


=== swords_segue_2 ===

Um, it's kinda embarrassing but, um... #{"name": "Mars", "mood": "defensive"}

I collect swords... #{"name": "Mars", "mood": "submissive"}

* [Oh, nice!] -> swords_1
* [Oh, you're a "sword guy"?] -> swords_2

=== swords_1 ===

Yeah! I mean, they're just replicas. But they're pretty cool. #{"name": "Mars", "mood": "pleased", "affinity": 3}

* [That's cool] -> swords_3
* [ That's scary] -> swords_4

=== swords_2 ===

Ugh. I hate that term. And I'm not a guy, I'm a celestial. #{"name": "Mars", "mood": "defensive", "affinity": -2}

But yeah, I guess so. #{"name": "Mars", "mood": "defensive"}

* [That's cool] -> swords_3
* [ That's scary] -> swords_4


=== swords_3 ===

Thanks! #{"name": "Mars", "mood": "smile"}

* [Why do you collect swords?] -> swords_5
* [What else are you into?] -> cartoons_segue_2


=== swords_4 ===

Oh. Uh... #{"name": "Mars", "mood": "defensive", "affinity": -3}

Sorry... #{"name": "Mars", "mood": "sad"}

... #{"name": "Mars", "mood": "sad"}

* [Sorry, that was rude of me.] -> swords_7
* [Why do you collect swords?] -> swords_5
* [What else are you into? ] -> cartoons_segue_2
* [...] -> mars_torture_4

=== mars_torture_4 ===

... #{"name": "Mars", "mood": "defensive" "affinity": -3}

* [Sorry, that was rude of me.] -> swords_7
* [Why do you collect swords?] -> swords_5
* [What else are you into? ] -> cartoons_segue_2
* [...] -> mars_torture_5

=== mars_torture_5 ===

... #{"name": "Mars", "mood": "tortured", "affinity": -3}

* [Sorry, that was rude of me.] -> swords_7
* [Why do you collect swords?] -> swords_5
* [What else are you into? ] -> cartoons_segue_2
* [...] -> mars_end_8


=== swords_7 ===

I'm used to it. Tell someone you're into swords and they assume you've got hang-ups. #{"name": "Mars", "mood": "defensive", "affinity": 6} 

I mean, I DO have hang-ups, but it has nothing to do with why I collect swords! #{"name": "Mars", "mood": "pleased"}

Thanks for apologising though. #{"name": "Mars", "mood": "submissive"}

* [Why do you collect swords?] -> swords_5
* [What else are you into?] -> cartoons_segue_2

=== swords_5 ===

So, um I guess I collect swords because I'm big into epic stories? #{"name": "Mars", "mood": "submissive", "affinity": 3}

I love tales of adventure. Tales of adversity, tales of heroism, tales of the underdog rising up against an oppressor, tales of the rise and fall of civilisations... #{"name": "Mars", "mood": "starry"}

Like, for me, swords represent these stories. I have replica samurai swords, this huge claymore that weighs 10 kilos, Gabriel's daggers from Street Spirits... #{"name": "Mars", "mood": "submisive"}

* [Wait, what was that last one?] -> cartoons_segue_1
* [(Nod and smile)] -> swords_6

=== swords_6 ===

I guess swords kinda represent historic struggles. And, like, it totally sucks that there is conflict, and most conflict is bad. I don't genuinely think war is heroic or whatever, But I guess swords kinda represent those people who tried to make the world better in a way. To overcome bad stuff. #{"name": "Mars", "mood": "submisive", "affinity": 3}

For me, at least. #{"name": "Mars", "mood": "excited"}

* [So you like heros?] -> heros_1
* [So you want to be a hero?] -> heroes_2
* [What else are you into?] -> cartoons_segue_2

=== heros_1 ===

Who doesn't?! #{"name": "Mars", "mood": "excited" "affinity": 3}

Yeah, I love heros. I like underdog heroes the best. #{"name": "Mars", "mood": "happy"}

-> cartoons_segue_3

=== heroes_2 ===

I mean, I dunno if I want to be a hero... #{"name": "Mars", "mood": "defensive"}

I like heroes though. Like, especially underdog heroes. They're the best.  #{"name": "Mars", "mood": "submissive"}

-> cartoons_segue_3

=== why_here_1 ===

Uh, I mean... Do you know Saturn? #{"name": "Mars", "mood": "submissive"}

So Saturn's my pal. Saturn was coming tonight and I guess they thought it would be good for me. I don't know though... #{"name": "Mars", "mood": "defensive"}

Saturn's the kind of person who can just talk to people. Saturn loves this stuff. #{"name": "Mars", "mood": "defensive"}

I'm not like that though... #{"name": "Mars", "mood": "embarassed"}

* [What -are- you like?] -> real_you_1
* [What are your interests?] -> swords_segue_1
TODO: Could include another Mars torture route

=== looking_for_1 ===

Coffee. #{"name": "Mars", "mood": "defensive"}

... Sorry. bad joke. #{"name": "Mars", "mood": "smile", "affinity": 3}

Um, I guess it would be nice to have more company. I'm not great at meeting new people... #{"name": "Mars", "mood": "submissive"}

Saturn was coming here tonight and he asked me along. So here I am. He's a good guy. #{"name": "Mars", "mood": "defensive"}

* [What are your interests?] -> swords_segue_1

== real_you_1 ===

Heh, that's a big question! #{"name": "Mars", "mood": "embarassed" "affinity": 3}

Um, I'm kinda shy with new people. Maybe you've noticed. #{"name": "Mars", "mood": "embarassed"}

I'm not great at small talk. #{"name": "Mars", "mood": "submissive"}

But people like having me around. So that's nice. #{"name": "Mars", "mood": "embarassed"}

I like it when I can just, like, hang with people. Not too many expectations. #{"name": "Mars", "mood": "defensive"}

And I guess I'm a bit of a goof once you get to know me. #{"name": "Mars", "mood": "embarassed"}

Mostly I just wana be myself with people, ya know?  #{"name": "Mars", "mood": "embarassed"}

* [I get it.] -> real_you_2
* [I don't get it.] -> real_you_3

=== real_you_2 ===

Heh. That's cool.  #{"name": "Mars", "mood": "pleased", "affinity": 3}

* [How about interests?] -> swords_segue_1

=== real_you_3 ===

Oh. Uh... Sorry...  #{"name": "Mars", "mood": "embarassed", "affinity": -3}

* [How about interests?] -> swords_segue_2



=== cartoons_segue_1 ===

Gabriel's daggers. You know, from the show Street Spirits?  #{"name": "Mars", "mood": "submissive"}

* [I don't know it] -> cartoons_1
* [I know it] -> cartoons_2
* [I love it!] -> cartoons_3

TODO: Continue from here

=== cartoons_segue_2 ===

Well, there are some shows I like. #{"name": "Mars", "mood": "submissive"}

I love big character-driven stories with awesome heroes and villains and stuff. #{"name": "Mars", "mood": "defensive"}

-> cartoons_segue_joiner

== cartoons_segue_3 ===

I like epic TV shows too. #{"name": "Mars", "mood": "happy"}

Ones with really good characters. Like, if the characters are flat it's just kinda dull for me. #{"name": "Mars", "mood": "defensive"}

-> cartoons_segue_joiner

=== cartoons_segue_joiner ===

Like, live action TV has some okay examples, but cartoons are WAY better. #{"name": "Mars", "mood": "happy"}

There are so many good animated shows these days! Loads of really good stories with amazing characters. #{"name": "Mars", "mood": "excited"}

I guess there's stuff you can do with cartoons that just doesn't work with live action. #{"name": "Mars", "mood": "defensive"}

Street Spirits is probably my favourite show. Have you seen it? #{"name": "Mars", "mood": "submissive"}

* [I don't know it] -> cartoons_1
* [I know it] -> cartoons_2
* [I love it!] -> cartoons_3
* [Wait, you watch kids' shows?] -> cartoons_4

TODO: Continue from here

=== cartoons_1 ===

Oh man, you're missing something awesome here! #{"name": "Mars", "mood": "embarassed"}

So, right. The show's about these orphans okay? They live on the streets of this huge city called Level 13, it's like a kinda cyberpunk world but with victoran social norms and stuff. #{"name": "Mars", "mood": "submissive"}

The kids in the city are being abducted. At first it looks like some kinda human trafficking deal, but it's not! #{"name": "Mars", "mood": "starry"}

The gang doing the kidnapping is actually a government run exorcism squad, and the orphans don't realise they're actually- #{"name": "Mars", "mood": "starry"}

Heh, I nearly told ya the big reveal in season one. Sorry! I get kinda excited about good shows. #{"name": "Mars", "mood": "pleased"}

* [I'd watch that.] -> cartoons_8
* [Sounds dumb.] -> cartoons_9
// * [So the kids are ghosts right?] -> cartoons_10
// Leads to a convo about spoilers, then back to Mars asking if you want to watch shows with him.

=== cartoons_9 ===

Oof. Ouch. #{"name": "Mars", "mood": "tortured", "affinity": -5}

I mean, yeah, I guess it is kinda dumb... #{"name": "Mars", "mood": "defensive"}

Is that so bad though? Maybe it's good to be kinda dumb sometimes. You gotta take what dumb joy you can get, right? #{"name": "Mars", "mood": "defensive"}

Like, being afraid to enjoy stuff cuz you don't wana look dumb is kinda... sad.... #{"name": "Mars", "mood": "defensive"}

Know what, I should probably go. I wanna get a drink beofre the next round.  #{"name": "Mars", "mood": "defensive"}

* [Bye.] -> mars_end_1b
* [ Wait...] -> cartoons_13

=== cartoons_13 ===

Yeah? #{"name": "Mars", "mood": "defensive"}

* [Can I watch cartoons with you?] -> mars_end_6
* [You've got a stain on your lapel.] -> mars_end_7

=== cartoons_2 ===

Oh man, it's SO good. #{"name": "Mars", "mood": "submissive"}

-> cartoons_12

=== cartoons_3 ===

Heh, awesome! Me too! #{"name": "Mars", "mood": "excited", "affinity": 10}

-> cartoons_12

=== cartoons_12 ===

Like, Gabriel is SUCH a good character. I almost DIED when she found out she was a ghost at the end of season 1! #{"name": "Mars", "mood": "excited"}

And she just, like, totally WRECKED the High Prophet! #{"name": "Mars", "mood": "pleased"}

And then the bit with Esteban going off with his parents' ghosts... #{"name": "Mars", "mood": "submissive"}

It was SO SAD! #{"name": "Mars", "mood": "crying"}

sniffle... #{"name": "Mars", "mood": "sad"}

Say, uh... wana watch it with me sometime? #{"name": "Mars", "mood": "submissive"}

* [Sure.] -> mars_end_3
* [Maybe.] -> mars_end_4
* [Maybe not.] -> mars_end_5

=== cartoons_8 ===

Heh, awesome. #{"name": "Mars", "mood": "pleased", "affinity": 3}

Say, uh... If you like the show... #{"name": "Mars", "mood": "defensive"}

Maybe we could watch it together sometime? #{"name": "Mars", "mood": "embarassed"}

* [Sure.] -> mars_end_3
* [Maybe.] -> mars_end_4
* [Maybe not.] -> mars_end_5


=== cartoons_4 ===

I mean... they're not just for kids... #{"name": "Mars", "mood": "tortured", "affinity": -5}

Eh, never mind. It's not important.  #{"name": "Mars", "mood": "sad"}

Know what, I should probably go get a drink beofre the next round.  #{"name": "Mars", "mood": "defensive"}

* [Bye.] -> mars_end_1a
* [ Wait...] -> cartoons_5

=== cartoons_5 ===

Um... Yeah?  #{"name": "Mars", "mood": "defensive"}

* [I LOVE kids' shows.] -> cartoons_6
* [Get me a drink too.] -> mars_end_2

=== cartoons_6 ===

! #{"name": "Mars", "mood": "surprised"}

HA! Oh man, I'm a total goof! I thought you were, like, saying animated shows are dumb or something. #{"name": "Mars", "mood": "pleased", "affinity": 10}

So hey, uh, have you seen Street Spirits? #{"name": "Mars", "mood": "submissive"}

* [I don't know it] -> cartoons_1
* [I know it] -> cartoons_2
* [I love it!] -> cartoons_3

=== mars_end_1a ===

Sure.  #{"name": "Mars", "mood": "tortured", "affinity": -30}

Mars left. He looked dejected.

Hello! #{"name": "Fenrir", "mood": "excited"}

Oh. You're sitting alone. Did your partner go somewhere? #{"name": "Fenrir", "mood": "neutral"}

This round's almost over. Now might be a good time to top up your drink. #{"name": "Fenrir", "mood": "attention"} 

-> END

=== mars_end_1b ===

Sure.  #{"name": "Mars", "mood": "tortured", "affinity": -30}

Mars left.

Hello! #{"name": "Fenrir", "mood": "excited"}

Oh. You're sitting alone. Did your partner go somewhere? #{"name": "Fenrir", "mood": "neutral"}

This round's almost over. Now might be a good time to top up your drink. #{"name": "Fenrir", "mood": "attention"} 

-> END

=== mars_end_2 ===

Um... #{"name": "Mars", "mood": "defensive", "affinity": -30}

I mean... #{"name": "Mars", "mood": "defensive"}

... No? #{"name": "Mars", "mood": "defensive"}

Mars left. Can you blame him?

Oh. Oh my. He did NOT looky happy...  #{"name": "Fenrir", "mood": "neutral"}

Oh well. You can't win them all, am I right?  #{"name": "Fenrir", "mood": "neutral"}

We'll take a short break now. #{"name": "Fenrir", "mood": "neutral"}

-> END

=== mars_end_3 ===

Nice! #{"name": "Mars", "mood": "excited", "affinity": 30}

Oh man, that's really great. #{"name": "Mars", "mood": "pleased"}

Uh, I guess this round's nearly over. I'll look out for you at the end okay? #{"name": "Mars", "mood": "pleased"}

See ya later Moon! #{"name": "Mars", "mood": "pleased"}

Mars left with a grin on his face. #{}

Well, he certainly looked happy! #{"name": "Fenrir", "mood": "neutral"}

I think someone's made a new friend! #{"name": "Fenrir", "mood": "wink2"}

We'll take a short break now. Why not get another drink? #{"name": "Fenrir", "mood": "neutral"}

-> END

=== mars_end_4 ===

Okay. Uh, well, I think this round's almost over. I'll be around at the end probably. Let me know if you wana watch some shows sometime, k? #{"name": "Mars", "mood": "defensive"}

See ya Moon. #{"name": "Mars", "mood": "defensive"}

Mars left.

Hello! #{"name": "Fenrir", "mood": "excited"}

You two finished at just the right time. This round's almost over. #{"name": "Fenrir", "mood": "neutral"}

-> END

=== mars_end_5 ===

Oh... um.  #{"name": "Mars", "mood": "sad"}

Okay. That's cool. #{"name": "Mars", "mood": "embarassed"}

I might be around at the end if you change your mind. But, uh... yeah. See you around I guess.  #{"name": "Mars", "mood": "defensive"}

Mars left.

Hello! #{"name": "Fenrir", "mood": "excited"}

You two finished at just the right time. This round's almost over. #{"name": "Fenrir", "mood": "neutral"}

-> END

=== mars_end_6 ===

Oh! Uh... #{"name": "Mars", "mood": "surprised", "affinity": 30}

Yeah, absolutely! #{"name": "Mars", "mood": "excited"}

Sorry, I was kinda rude before. #{"name": "Mars", "mood": "defensive"}

I guess it just gets to me when people judge me for, like, enjoying something. Maybe I should be less defensive about it. #{"name": "Mars", "mood": "pleased"}

Anyway, I'll be around later. If you still wanna meet up let me know, k? #{"name": "Mars", "mood": "submissive"}

See ya later Moon! #{"name": "Mars", "mood": "pleased"}

Mars left with a smile on his face.

Well, he certainly looked happy! #{"name": "Fenrir", "mood": "neutral"}

I think someone's made a new friend! #{"name": "Fenrir", "mood": "wink2"}

We'll take a short break now. Why not get another drink? #{"name": "Fenrir", "mood": "neutral"}

-> END

=== mars_end_7 ===

! #{"name": "Mars", "mood": "tortured", "affinity" -30}

Mars left suddenly. He looked horrifically embarassed.

Oh. Oh my. He did NOT looky happy...  #{"name": "Fenrir", "mood": "neutral"}

Oh well. You can't win them all, am I right?  #{"name": "Fenrir", "mood": "neutral"}

We'll take a short break now. #{"name": "Fenrir", "mood": "neutral"}

-> END

=== mars_end_8 ===

I... I need to go... #{"name": "Mars", "mood": "standing" "affinity": -30}

Mars gets up awkwardly and walks away. I guess the date's over...

Hello! Hasn't your date turned up yet?  #{"name": "Fenrir", "mood": "wave"}

What's that? He already left? #{"name": "Fenrir", "mood": "neutral"}

Oh! Oh dear. Well. Never mind. There's always next time, right? #{"name": "Fenrir", "mood": "wink1"}

-> END


//////// NOTES //////////////////////////

// Why are you here: Another planet made him come along. They're here somewhere. Said it would do me good.
// So do you want to be here? I guess I do. I mean... I guess it wouldbe nice to have someone to hang with.
// Oh yeah? How do you like to hang?
// On to cartoons!

// What are you looking for? Companionship. He#'s lonely! And want someone to watch carttons with. Loops back to forced question: What are your hobbies.
//'So, um, earlier you asked why I'm here. And like, i guess what I'm saying is... wana come round and watch cartoons sometime?
// Tell me about the real you. He's a little nervous, but he talks sincerely. People think he's a big tuff guy, all aggression and stuff, but, like, he really just likes good stories. Like, he likes swords too but that's just because they represent the culmination of millenia of human conflict and the epic struggle to become something greatrer,not just an individual but a true nation! Just like his cartoons! But.. um. yeah. about his interests.  And his wants. If you encourage him. And that takes us to the end with a big positive.

// Whether it's opn a battlefield or in a cat cafe, heroines take on terrible odds to win! He loves EPICS.








