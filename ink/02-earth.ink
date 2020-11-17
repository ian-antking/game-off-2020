Earth sits down opposite you. He grins awkwardly.

Hi honey. #{"name": "earth", "mood": "awkwardgrin"}
* [Oh my goodness, it's you...] -> earth_1_1
* [Oh. It's you.] -> earth_1_2
* [Don't call me honey.] -> earth_1_3
* [\(Glare at Earth)] -> earth_1_4

=== earth_1_1 ===
 Yep. it's me. #{"name": "earth", "mood": "awkwardgrin"} 
 -> earth_2

=== earth_1_2 ===
Yep. it's me. #{"name": "earth", "mood": "awkwardgrin"} 
-> earth_2

=== earth_1_3 ===
Oh, uh... sorry. #{"name": "earth", "mood": "sad"}

I didn't know I couldn't call you that anymore. #{"name": "earth", "mood": "sad"}
-> earth_2

=== earth_1_4 ===
Eesh... #{"name": "earth", "mood": "shrink"} 
-> earth_2

=== earth_2 ===

* [What are YOU doing here?] -> earth_3
* [Did you know I'd be here?] -> earth_4
* [Who are you here with?] -> earth_5
* [How are you?] -> earth_6

=== earth_3 ===
Same thing as you, looks like. #{"name": "earth", "mood": "1palmup"}

TODO: Finish this route, adjoin to earth_a


=== earth_4 ===
What? No, of course not. #{"name": "earth", "mood": "2palmsup"}

My life doesn't revolve around you, you know. #{"name": "earth", "mood": "1palmup"}

Just like you don't revolve around me anymore. #{"name": "earth", "mood": "sad"}

Venus asked me along. They've been helping me out since you left. It's been rough... #{"name": "earth", "mood": "1palmup"}

-> earth_a

=== earth_5
That's not really your business. Not anymore. #{"name": "earth", "mood": "1palmup"}

Oh, okay... I'm here with Venus. #{"name": "earth", "mood": "resigned"}

Things have been rough since you left. Venus has been helping me out. #{"name": "earth", "mood": "resigned"}

They thought that dating might help me get out of my orbit for a while. Give me something else to think about. #{"name": "earth", "mood": "resigned"}

And it was working. Until now. #{"name": "earth", "mood": "2palmsup"} 

-> earth_a

TODO: Needs a route.

=== earth_6
I... #{"name": "earth", "mood": "lookaway"}

I mean, not great to be honest. #{"name": "earth", "mood": "1palmup"}

I'm getting better now. But Moon, you just left. #{"name": "earth", "mood": "2palmsup"}

We had no idea where you were, why you'd gone... #{"name": "earth", "mood": "2palmsup"} 

-> earth_a




=== earth_a

I still don't understand why you left us. Why did you do it Moon?

*   [I didn't love you anymore.] -> earth_7
*   [You didn't respect me enough.] -> earth_8
*   [I needed a change.] -> earth_9
*   ["Us"? Who's "us"?] -> earth_10

=== earth_7
Oh. Wow.

It's that simple, huh?

...

Sorry. It's a lot to take in...

Deep breaths Earth, deep breaths.

I... I can't deny that it hurts to hear you say that. It hurts a lot.

But it's better than not knowing why you left.

... I can't hold it against you. That wouldn't be fair. You feel what you feel, know what I mean?

And I won't ask for you back. If you don't want me then there's no point.

But hey, we're here to socialise right? How about we catch up? A lot's changed since you left.

TODO: Link.

=== earth_8
I... I didn't know you felt that way.

...

No. No, that's not true. I can understand why you felt like that.

Ever since we created life together I've been completely focussed on myself.

It was just too exciting. The children kept growing and learning and changing, and they kept changing me... It was addictive.

-> earth_16

=== earth_9
... Seriously? That's it? #{"name": "earth, "mood": "incredulous "}
You walked out on us because you needed a change? You could at least have said something! #{"name": "earth, "mood": "1palmup"}


*   [You would have tried to make me stay.] -> earth_17
*   ["Us"? Who's "us"?] -> earth_10

=== earth_17

Maybe. Would that have been so bad? #{"name": "earth, "mood": "1palmup"}

Was staying with us really that hard for you? #{"name": "earth, "mood": "1palmup"}

Was there really nothing that would have made you want to stay? Nothing I could have changed? #{"name": "earth, "mood": "1palmup"}

TODO: Complete

=== earth_10

Yes, us. Your family. Me and the children; all of the living beings on my surface. 

We've been lost without you Moon.

The nights are darker. The tides don't work. And the sea turtles...

Well, maybe you don't want to know what happened to the sea turtles.  #{"name": "earth", "mood": "sad"}

//* [I'm sorry. I didn't think...] -> earth_11
* [They aren't my children. They're your children.] -> earth_12
* [They aren't children. They're parasites.] -> earth_13

//=== earth_11

=== earth_12
I... I didn't know you felt that way.

-> earth_16

=== earth_16

I know they live on my surface but they wouldn't be who they are without you. You had a huge part in raising them.

They think of you as a parent. They love you. They literally look up to you. 

Ah, well, they used to anyway.

I'm sorry. It must have been hard for you, putting up with the responsibility of a trillion children and getting nothing back. 

All of their gifts went to me.

Oh god. I didn't even realise how neglected you were...

I don't know if I can make up for that... But I'd like to try, if you would let me.

A lot's changed since you left. And I'm ready to do whatever I need to to repair our relationship.

Even if I can't be your partner I... I really hope we can come to be friends.

Maybe we could start right now. We're both here. We have good coffee. And I have so much to tell you!

Whaddyasay? Should we just, you know, talk a while?

* [Sure.] -> earth_b
* [No.] -> earth_end_2

-> END

=== earth_13

What?! How can you say that?!

They're literally tiny pockets of the universe observing itself. They're practically divine!

* [...] -> earth_14
* [That's hippie nonsense] -> earth_14
* [Ew! One just landed on me!] -> earth_15

=== earth_14

Okay, okay. We have fundamentally different views about life. #{"name": "earth", "mood": "1palmup"}

I can respect that. We don't have to agree on everything. #{"name": "earth", "mood": "1palmup"}

But if we can I'd really like to try and repair this bridge. #{"name": "earth", "mood": "1palmup"}

Things can't go back to how they were. Maybe that's a good thing. Maybe we can find a new way to get along. #{"name": "earth", "mood": "1palmup"}

I miss you Moon. I want you back in my world. As a friend if nothing else. #{"name": "earth", "mood": "1palmup"}

But only if you want that too. #{"name": "earth", "mood": "1palmup"}

Whaddyasay? We're both here, we have good coffee. And I have so much to tell you about. Can we just talk a while? #{"name": "earth", "mood": "1palmup"}

* [Sure.] -> earth_b
* [No.] -> earth_end_2

=== earth_15

I won't apologise for our children's natural tendency to investigate other celestial bodies.  #{"name": "earth", "mood": "uppity"}

They need to explore. They need to grow and learn to be self sufficient. #{"name": "earth", "mood": "uppity"}

I won't be here to look after them forever. And you certainly won't. #{"name": "earth", "mood": "1palmup"}

-> earth_end_1

=== earth_b

-> END


=== earth_end_1
Man, I really thought we could make something better of this. Make amends, maybe even be friends. But I guess not.  #{"name": "earth", "mood": "2palmsup"}

Hello my lovelies! How is your little exchange going? Are we hitting it off?  #{"name": "fenrir", "mood": "neutral"}

\*snort\* #{"name": "earth, "mood": "uppity"}

Ahem. Maybe not.  #{"name": "fenrir", "mood": "embarassed"}

Well, this round is almost over. Please say your farewells and we'll progress to the next round. #{"name": "fenrir", "mood": "embarassed"}

Bye Moon. I hope you find what you need.  #{"name": "earth", "mood": "sincere"}

Earth left. I guess that's that.

-> END

=== earth_end_2

\*sigh...* #{"name": "earth", "mood": "sad"}

Okay. I...  #{"name": "earth", "mood": "1palmup"}

I'm glad that I got to see you at least. #{"name": "earth", "mood": "sincere"}

I'm glad I got some insight into why you left.   #{"name": "earth", "mood": "sincere"}

And I'm glad to know that you're moving on. Because it means that I can too.  #{"name": "earth", "mood": "2palmsup"}

Thank you for that. #{"name": "earth", "mood": "sincere"}

I'll see you around Moon.  #{"name": "earth", "mood": "sincere"}

* Yeah. You take care. -> earth_end_2a
* Yeah. See you around. -> earth_end_2b
* No. You won't. -> earth_end_2c

=== earth_end_2a

Thanks Moon. You too. #{"name": "earth", "mood": "sincere"}

Earth left.

-> earth_end_2d

=== earth_end_2b

Sure. #{"name": "earth", "mood": "embarassed"}

Earth left.

-> earth_end_2d

=== earth_end_2c

... #{"name": "earth", "mood": "dejected"}

Earth left.

-> earth_end_2d

=== earth_end_2d
Hello Moon, my dear!  #{"name": "fenrir", "mood": "neutral"}
I thought I'd wait for you two to finish your conversation before coming over. I'm sure you had a lot to talk about. #{"name": "fenrir", "mood": "neutral"}
This round is now over. I'll take your drink order, then we'll proceed. #{"name": "fenrir", "mood": "neutral"}

-> END



