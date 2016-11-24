var quotes = [
"\"I quit therapy because my analyst was trying to help me behind my back.\" — Richard Lewis",
"\"We’ve heard that a million monkeys t a million keyboards could produce the complete works of Shakespeare; now, thanks to the Internet, we know that is not true.\" — Robert Wilensky",
"\"If there are no stupid questions, then what kind of questions do stupid people ask? Do they get smart just in time to ask questions?\" — Scott Adams",
"\"If the lessons of history teach us anything it is that nobody learns the lessons that history teaches us.\" — Anon",
"\"When I was a boy I was told that anybody could become President. Now I’m beginning to believe it.\" — Clarence Darrow",
"\"Laughing at our mistakes can lengthen our own life. Laughing at someone else’s can shorten it.\" — Cullen Hightower",
"\"There are many who dare not kill themselves for fear of what the neighbors will say.\" — Cyril Connolly",
"\"There’s so much comedy on television. Does that cause comedy in the streets?\" — Dick Cavett",
"\"All men are frauds. The only difference between them is that some admit it. I myself deny it.\" — H. L. Mencken",
"\"I don’t mind what Congress does, as long as they don’t do it in the streets and frighten the horses.\" — Victor Hugo",
"\"I took a speed reading course and read ‘War and Peace’ in twenty minutes. It involves Russia.\" — Woody Allen",
"\"The person who reads too much and uses his brain too little will fall into lazy habits of thinking.\" — Albert Einstein",
"\"Believe those who are seeking the truth. Doubt those who find it.\" — André Gide",
"\"It is the mark of an educated mind to be able to entertain a thought without accepting it.\" — Aristotle",
"\"I’d rather live with a good question than a bad answer.\" — Aryeh Frimer",
"\"We learn something every day, and lots of times it’s that what we learned the day before was wrong.\" — Bill Vaughan",
"\"I have made this letter longer than usual because I lack the time to make it shorter.\" — Blaise Pascal",
"\"Don’t ever wrestle with a pig. You’ll both get dirty, but the pig will enjoy it.\" — Cale Yarborough",
"\"An inventor is simply a fellow who doesn’t take his education too seriously.\" — Charles F. Kettering",
"\"Asking a working writer what he thinks about critics is like asking a lamppost how it feels about dogs.\" — Christopher Hampton",
"\"Better to write for yourself and have no public, than to write for the public and have no self.\" — Cyril Connolly",
"\"I am patient with stupidity but not with those who are proud of it.\" — Edith Sitwell",
"\"Never be afraid to laugh at yourself, after all, you could be missing out on the joke of the century.\" — Dame Edna Everage",
"\"Normal is getting dressed in clothes that you buy for work and driving through traffic in a car that you are still paying for – in order to get to the job you need to pay for the clothes and the car, and the house you leave vacant all day so you can afford to live in it.\" — Ellen Goodman",
"\"The cure for boredom is curiosity. There is no cure for curiosity.\" — Ellen Parr",
"\"Advice is what we ask for when we already know the answer but wish we didn’t.\" — Erica Jong",
"\"Some people like my advice so much that they frame it upon the wall instead of using it.\" — Gordon R. Dickson",
"\"The trouble with the rat race is that even if you win, you’re still a rat.\" — Lily Tomlin",
"\"Never ascribe to malice, that which can be explained by incompetence.\" — Napoleon",
"\"Imagination was given to man to compensate him for what he is not, and a sense of humor was provided to console him for what he is.\" — Oscar Wilde",
"\"When a person can no longer laugh at himself, it is time for others to laugh at him.\" — Thomas Szasz"
];

$(document).ready(function(){
  $("button").on("click", function(){
    var rand = Math.floor(Math.random() * quotes.length);
    $("#quote").text(quotes[rand]);
  });
});