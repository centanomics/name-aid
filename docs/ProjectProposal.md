# [Concept Name]

## Application Definition Statement

I'm building an application that will help presentors, narrators, or anyone with a speaking position to pronounce names. This isn't just limited to names, thus can be used with concepts as well, mainly science terms. Users will be able to create collections for names of a group of graduates, competetion memebers, groups of concepts that relate to each other, etc. They will then be able to reference that collection or specific word later on when needed.

## Target Market

The ideal user would be someone who speaks publicly on a regulular basis. [This website](https://learn.org/articles/What_Degree_Do_I_Need_to_be_a_Professional_Public_Speaker.html) mentions that relevant degrees are Business communication, Multimedia Journalism, and many others. As an example, a sports announcer [makes an average of \$41,800](https://www.sports-management-degrees.com/faq/how-much-does-a-broadcast-sports-announcer-make/) per year. Average age would be between 30-50. A hobby would include participating in trivia games.

Secondary markets would include people around ages 20 to 30. They have a bachelors degree minimum and they are either aiming to be or are already teachers. The average income for a teacher at a public school is [\$59,050](https://nces.ed.gov/blogs/nces/post/a-closer-look-at-teacher-income). Some of their hobbies include going to museums and and taking day trips.

## User Profile

![](https://randomuser.me/api/portraits/men/29.jpg)

Harry Jones

- Harry is a commentator for the World Cup
- He commentates for his home country, the USA
- He also commentates at the USA games whenever he is able to
- Has been commentating for many years
- had trouble pronouncing a player's name at the previous world cup
- Feels bad about that incident
- Wants to be able to organize player names by team
- Wants to have team names quickly accessible before starting live commentary
- Dislikes disorganization, tardiness, and other unprofessional things
- Is very by the book
- Finds joy in doing his work as propery as he can

![](https://randomuser.me/api/portraits/women/90.jpg)

Roxanne Wild

- Recently just got her Teacher's License
- About to start teaching her first group of sixth graders this coming fall
- Always wanted to be a teacher
- Teaching in a very diverse community
- Only 23 years old
- Wants to have her students names in one place, separated by period
- Wants to be able to create collections of terms for the upcoming units
- Wants to share those collections with her student if they wanted it to help with pronuniciation
- Dislikes making any mistakes
- Will go out of her way to avoid making a mistake
- Enjoys calm situations
- Likes having control have a situation

## Use Cases

### Roxanne:

- She just saw the roster for each of the classes she is going to teach. She wants to add each class to a collection and practice pronouncing their names before the semester starts
- Her classes are about to start a new unit. She understands that a few of the key terms used throughout this unit are difficult to pronounce. She creates a collcetion of those terms and allows her students to look at the pronunciations if they want
- She notices that the person who is going to be the announcer at the science fair is having a trouble with a few of the terms used in the project and names of the competitors. She creates a Science fair group and puts the collections of terms and names within the group and shares that with the announcer.

### Harry:

- He has trouble pronouncing names from teams from a few select countries. In order to prevent himself from fumbling over his words live, he creates a collection of names for those he has trouble with.
- Harry notices a fellow caster from another country he sees often his having trouble with a few names. He decides to share his previously made list and adds on a few other names his friend has trouble with.
- Harry is at a side gig narrating for a documentary. He notices he could use the app to help him with a few difficult words he notices in the script. He creates a different group for the documentary and adds those words there.

## Problem Statement

Mispronouncing names can be seen as disrespectful by those people. In some cases, it could be painful and make them decide on [choosing a more americanized name](http://neatoday.org/2016/09/01/pronouncing-students-names/) simply to avoid mispronounciations. In worst case scenarious it could be seen [as a migroagresions](https://medium.com/the-vocal/say-my-name-why-mispronouncing-and-joking-about-poc-names-is-racial-microaggression-76c2ce58f316). While it is understandable to to mispronounces certain names while learning how to pronouncing them, not putting in that effort [can also have a lasting impact on younger students](https://www.pbs.org/newshour/education/a-teacher-mispronouncing-a-students-name-can-have-a-lasting-impact).

## Pain Points

1. Mispronouncing names can be seen as disrespectful. In a good portion of cases students see their name as a reminder of where they came from. It 'creates this wall' between students and teachers.
2. Fumbling over words during a presentation or a live broadcast. This can interrupt flow and cause those people to get toung tied.
3. Coworkers mispronouncing names multiples times without putting in effort to learn how to pronounce it can be seen as a microagression

## Solution Statement

Allows the user to create a collection, consisting of one or more names or terms. Unlike competition, this project will allow users to save their collections. Each name/term will include a sound bite and IPA text to help with pronunciation. If users wish, they can also share the collections they've made to others

## Competition

_What competing products exist to solve this or a similar problem? Identify and summarize competing products and how their approach to solving your identified problem differ from your own._

- [Google Translate](https://translate.google.com/) - Indirect competitor. Allows users to type in a word, in any language, and allow for it to be spoken out for the user to hear. Also gives definition of words translated. People who are curious how to pronounce a name can simply type it into google translate and use the sound bite to help them.

- [Pronounce Names](https://www.pronouncenames.com/) - Shows users how to pronounce people names. It is only restricted to names and doesn't show IPA text along with the pronunciation. Also doesn't give a sound bite for users to hear. Since they allow user submissions, users can create their own sound bites and share that with who they want.

- [toIPA](https://tophonetics.com/) - Allows users to type in words they want to know the IPA for. It's restricted to only a few languages, but names and words work for the languages available. Gives a sound bite. Not able to share results. Also shows a few diffirent pronunciations, if they are available.

## Key Features

- creating and naming a collection
- adding names to that collection
- being able to share that collection to others who may need it - Can also share specific words
- managing names in the collection as needed

## Integrations

[IBM TTS](https://cloud.ibm.com/apidocs/text-to-speech) or [Google TTS](https://cloud.google.com/text-to-speech/docs/)

IBM:

- allows you to choose different voices
- 10k characters per month
- Can create custom words

Google:

- More language choices for text to speech
- only 4k characters per month

[Merriam Webster API](https://dictionaryapi.com/products/json)

- allows for you to search up specific words
- Can grab the IPA spelling of each word and use that with each term
- Can use this with most English names as well
