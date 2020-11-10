Mars sits down opposite you. They're broad-shouldered and a bit too tall for their chair. They look embarassed to be here. #{"background": "moonshot-main"}

-> mars_intro

=== mars_intro ===
Uh. Hey there. #{"name": "mars", "mood": "defensive"}
*   [Heya! How are you?] -> mars_1
*   [Hi. How are you?] -> mars_3
*   [Uh. Hi.] -> mars_2

=== mars_1 ===

Heh, hello!   #{"name": "mars", "mood": "pleased" "affinity": +3}

-> mars_3

=== mars_2 ===

... #{"name": "mars", "mood": "defensive" "affinity": -1}

* [ So... How are you?] -> mars_3
* [So... What are you into?] -> swords_segue_2 //TODO: Link this
* [...] -> mars_torture_1


=== mars_torture_1 ===

... #{"name": "mars", "mood": "defensive" "affinity": -1}

* [ So... How are you?] -> mars_3
* [So... What are you into?] -> swords_segue_2 //TODO: Link this
* [...] -> mars_torture_2

=== mars_torture_2 ===

... #{"name": "mars", "mood": "tortured" "affinity": -1}

* [ So... How are you?] -> mars_3
* [So... What are you into?] -> swords_segue_2 //TOSO: Link this
* [...] -> mars_torture_3

=== mars_torture_3 ===
I... I need to go... #{"name": "mars", "mood": "standing" "affinity": -1}

Mars gets up awkwardly and walks away. I guess the date's over...

-> END

=== mars_3 ===

I'm... okay, I guess. I've never done one of these before... #{"name": "mars", "mood": "submisive" "affinity": +1}

*   [I can tell.] -> mars_5
*   [Me neither.] -> mars_6
*   [Don't worry about it.] -> mars_7

=== mars_5 ===

It's that obvious huh?  #{"name": "mars", "mood": "embarassed" "affinity": -2}

-> mars_8

=== mars_6 ===

Heh, I'm glad it's not just me. #{"name": "mars", "mood": "smile" "affinity": +1}

-> mars_8

== mars_7 ===

Um... Thanks. I'll try not to. #{"name": "mars", "mood": "smile"}

-> mars_8

=== mars_8 ===

Sorry. I'm kind of shy sometimes.

So, uh... What should we talk about?

* [What are your interests?] -> swords_segue_1
* [Why are you here?]   -> why_here_1
* [What are you looking for?] -> looking_for_1
* [Tell me about the -real- you.] -> real_you_1

=== swords_segue_1 ===

Um, well, I like swords! I've got a ton of 'em! #{"name": "mars", "mood": "excited"}

* [Oh, you collect swords?] -> swords_1
* [Oh, you're a "sword guy"?] -> swords_2


=== swords_segue_2 ===

Um, it's kinda embarrassing but, um...

I collect swords...

* [Oh, nice!] -> swords_1
* [Oh, you're a "sword guy"?] -> swords_2

=== swords_1 ===

Yeah! I mean, they're just replicas. But they're pretty cool.

* [That's cool] -> swords_3
* [ That's scary] -> swords_4

=== swords_2 ===

Ugh. I hate that term. But yeah, I guess so. #{"name": "mars", "mood": "defensive", "affinity": "-2"}

* [That's cool] -> swords_3
* [ That's scary] -> swords_4


=== swords_3 ===

Thanks! #{"name": "mars", "mood": "smile"}

* [Why do you collect swords?] -> swords_5
* [What else are you into?] -> cartoons_segue_1


=== swords_4 ===

Oh. Uh...

Sorry...

...

* [Sorry, that was rude of me.] -> swords_7
* [Why do you collect swords?] -> swords_5
* [What else are you into? ] -> cartoons_segue_1
* [...] -> mars_torture_4

=== mars_torture_4 ===

... #{"name": "mars", "mood": "defensive" "affinity": -1}

* [Sorry, that was rude of me.] -> swords_7
* [Why do you collect swords?] -> swords_5
* [What else are you into? ] -> cartoons_segue_2
* [...] -> mars_torture_5

=== mars_torture_5 ===

... #{"name": "mars", "mood": "tortured" "affinity": -1}

* [Sorry, that was rude of me.] -> swords_7
* [Why do you collect swords?] -> swords_5
* [What else are you into? ] -> cartoons_segue_2
* [...] -> mars_torture_3


=== swords_7 ===

I'm used to it. Tell someone you're into swords and they assume you've got hang-ups. #{"name": "mars", "mood": "defensive" "affinity": -1} 

I mean, I DO have hang-ups, but it has nothing to do with why I collect swords! #{"name": "mars", "mood": "pleased"}

Thanks for apologising though. #{"name": "mars", "mood": "submissive", "affinity": "+4"}

* [Why do you collect swords?] -> swords_5
* [What else are you into?] -> cartoons_segue_1

=== swords_5 ===

So, um I guess I collect swords because I'm big into epic stories? #{"name": "mars", "mood": "submissive", "affinity": "+3"}

I love tales of adventure. Tales of adversity, tales of heroism, tales of the underdog rising up against an oppressor, tales of the rise and fall of civilisations... #{"name": "mars", "mood": "starry"}

Like, for me, swords represent these stories. I have replica samurai swords, this huge claymore that weighs 10 kilos, Gabriel's daggers from Street Spirits... #{"name": "mars", "mood": "submisive" "affinity": +1}

* [Wait, what was that last one?] -> cartoons_segue_1
* [(Nod and smile)] -> swords_6

=== swords_6 ===

I guess swords kinda represent historic struggles. And, like, it totally sucks that there is conflict, and most conflict is bad. I don't genuinely think war is heroic or whatever, But I guess swords kinda represent those people who tried to make the world better in a way. To overcome bad stuff. #{"name": "mars", "mood": "submisive" "affinity": +1}

For me, at least. #{"name": "mars", "mood": "excited"}

* [So you like heros?] -> heros_1
* [So you want to be a hero?] -> heroes_2
* [What else are you into?] -> cartoons_segue_2

=== heros_1 ===

Who doesn't?! #{"name": "mars", "mood": "excited" "affinity": +1}

Yeah, I love heros. I like underdog heroes the best.

-> cartoons_segue_3

=== heroes_2 ===

I mean, I dunno if I want to be a hero...

I like heroes though. Like, especially underdog heroes. They're the best.

-> cartoons_segue_3

=== why_here_1 ===

Uh, I mean... Do you know Saturn? #{"name": "mars", "mood": "submissive"}

So Saturn's my pal. Saturn was coming tonight and I guess they thought it would be good for me. I don't know though... #{"name": "mars", "mood": "defensive"}

Saturn's the kind of person who can just talk to people. Saturn loves this stuff. #{"name": "mars", "mood": "defensive"}

I'm not like that though... #{"name": "mars", "mood": "embarassed"}

* [What -are- you like?] -> real_you_1
* [What are your interests?] -> swords_segue_1
TODO: Could include another mars torture route

=== looking_for_1 ===

Coffee. #{"name": "mars", "mood": "defensive"}

... Sorry. bad joke. #{"name": "mars", "mood": "smile", "affinity": +2}

Um, I guess it would be nice to have more company. I'm not great at meeting new people... #{"name": "mars", "mood": "submissive"}

Saturn was coming here tonight and he asked me along. So here I am. He's a good guy. #{"name": "mars", "mood": "defensive"}

* [What are your interests?] -> swords_segue_1

== real_you_1 ===

Heh, that's a big question! #{"name": "mars", "mood": "embarassed" "affinity": "+3"}

Um, I'm kinda shy with new people. Maybe you've noticed. #{"name": "mars", "mood": "embarassed"}

I'm not great at small talk. #{"name": "mars", "mood": "submissive"}

But people like having me around. So that's nice. #{"name": "mars", "mood": "embarassed"}

I like it when I can just, like, hang with people. Not too many expectations. #{"name": "mars", "mood": "defensive"}

And I guess I'm a bit of a goof once you get to know me. #{"name": "mars", "mood": "embarassed"}

Mostly I just wana be myself with people, ya know?  #{"name": "mars", "mood": "embarassed"}

* [I get it.] -> real_you_2
* [I don't get it.] -> real_you_3

=== real_you_2 ===

Heh. That's cool.  #{"name": "mars", "mood": "pleased", "affinity": "3"}

* [How about interests?] -> swords_segue_1

=== real_you_3 ===

Oh. Uh... Sorry...  #{"name": "mars", "mood": "embarassed", "affinity": "-3"}

* [How about interests?] -> swords_segue_2



=== cartoons_segue_1 ===

Gabriel's daggers. You know, from the show Street Spirits?

// I don't know it.
// I know it.
// I love it!

TODO: Continue from here

=== cartoons_segue_2 ===

Well, there are some shows I like.

I love big stories with heroes overcoming villains and stuff.

-> cartoons_segue_joiner

== cartoons_segue_3 ===

I like epic TV shows too. Ones with really good heroes. 

-> cartoons_segue_joiner

=== cartoons_segue_joiner ===

Like, live action TV has some okay examples, but cartoons are WAY better. 

There are so many good kids shows these days! Loads of excellent stories with amazing characters.

Street Spirits is probably my favourite. Have you seen it?

// I don't know it.
// I know it.
// I love it!
// Wait, you watch kids' shows?

TODO: Continue from here

//////// NOTES //////////////////////////

// Why are you here: Another planet made him come along. They're here somewhere. Said it would do me good.
// So do you want to be here? I guess I do. I mean... I guess it wouldbe nice to have someone to hang with.
// Oh yeah? How do you like to hang?
// On to cartoons!

// What are you looking for? Companionship. He#'s lonely! And want someone to watch carttons with. Loops back to forced question: What are your hobbies.
//'So, um, earlier you asked why I'm here. And like, i guess what I'm saying is... wana come round and watch cartoons sometime?
// Tell me about the real you. He's a little nervous, but he talks sincerely. People think he's a big tuff guy, all aggression and stuff, but, like, he really just likes good stories. Like, he likes swords too but that's just because they represent the culmination of millenia of human conflict and the epic struggle to become something greatrer,not just an individual but a true nation! Just like his cartoons! But.. um. yeah. about his interests.  And his wants. If you encourage him. And that takes us to the end with a big positive.

// Whether it's opn a battlefield or in a cat cafe, heroines take on terrible odds to win! He loves EPICS.









