//beggining options
let decline =document.querySelector('.decline');
let accept =document.querySelector('.accept');
let aord =document.querySelector('.aord');
let party =document.querySelector('.party');
let text =document.querySelector('p');
// 
let death =document.querySelector('.death');

//decline options
let calling=document.querySelector('.calling');
let found=document.querySelector('.found');
let run=document.querySelector('.run');
let cback=document.querySelector('.cback');
let end=document.querySelector('.end');
let gun=document.querySelector('.gun');

//emoji
let goofy=document.querySelector('h2');
let h2= document.querySelector('hide')

//accept options
let gang= document.querySelector('.gang')
let stay=document.querySelector('.stay')
let mis=document.querySelector('.mis')
let stalk=document.querySelector('.stalk')
let finish=document.querySelector('.finish')
let fp=document.querySelector('.fp')
let tasting=document.querySelector('.tasting')
let human=document.querySelector('.human')
//starting screen
party.style.display='none';
calling.style.display='none';
found.style.display='none';
run.style.display='none';
cback.style.display='none';
gun.style.display="none";
end.style.display='none';
goofy.style.display='none';
gang.style.display='none';
mis.style.display='none';
stay.style.display='none';
stalk.style.display='none';
finish.style.display='none';
fp.style.display='none';
tasting.style.display='none';
human.style.display='none';

//decline path
decline.addEventListener('click',function() {
    aord.style.display="none";
    decline.style.display="none";
    accept.style.display="none";
    party.style.display='block';
    cback.style.display='block';
    text.innerHTML="Your lights start to flicker, And you see a scary figure in the alley. What do you do? Doublick click to run, or click call back button to call back";
});

//call back
cback.addEventListener('click',function() {
    aord.style.display="none";
    decline.style.display="none";
    accept.style.display="none";
    party.style.display='none';
    cback.style.display='none';
    calling.style.display='block';
    goofy.style.display='block';
    text.innerHTML="You begging to regret declining, freakbob, and in a rush you hastily call him back, click the freaky face to see how the story ends ";
});

goofy.addEventListener("mouseenter", function(){
    calling.style.display ="none";
    text.innerHTML = "Freakbob catches you, you are no where to be found and you are now his forever"
    gun.style.display ="block";
});

//runing away
party.addEventListener("dblclick", function(){
    party.style.display ="none";
     text.innerHTML = "You hear fast footsteps approach you, you get scared and things get scary you decide to run, click end button to see how the story ends"
     run.style.display ="block";
     cback.style.display='none';
     end.style.display='block';
 });

 end.addEventListener('click',function() {
    run.style.display='none';
    text.innerHTML = "Freakbob catches you, you are no where to be found and you are now his forever";
    found.style.display ="block";
    end.style.display='none';
});

//accept option
accept.addEventListener('click',function() {

    aord.style.display="none";
    decline.style.display="none";
    accept.style.display="none";
    gang.style.display='block';
    text.innerHTML="It's freak bob he called you to see if you wanted to see him real quick, Do I go see him and risk missing all the excitement at the party, or hang up and dive back into the action, hoping I didn’t miss anything important?";
    mis.style.display='block';
    stay.style.display='block';
});
//stay
stay.addEventListener('click',function() {
    gang.style.display='none';
    stalk.style.display='block';
    text.innerHTML="At the party, you glance out the window and see Freakbob’s pale face pressed against the glass, eyes locked on you. The laughter around you fades as his stare burns through the glass, making your skin crawl., click the 'finish' button to end.";
    mis.style.display='none';
    stay.style.display='none';
    finish.style.display='block';
});
finish.addEventListener('click',function() {
    stalk.style.display='none';
    fp.style.display='block';
    text.innerHTML="You turn around, and suddenly, everyone at the party morphs into SpongeBob, their eyes wild with hunger. Without warning, they lunge at you, their laughter twisted and manic.";
    finish.style.display='none';
});
//go and see him
stay.addEventListener('click',function() {
    gang.style.display='none';
    stalk.style.display='block';
    text.innerHTML="At the party, you glance out the window and see Freakbob’s pale face pressed against the glass, eyes locked on you. The laughter around you fades as his stare burns through the glass, making your skin crawl., click the 'finish' button to end.";
    mis.style.display='none';
    stay.style.display='none';
    finish.style.display='block';
});
//eat the burger
mis.addEventListener('click',function() {
    gang.style.display='none';
    tasting.style.display='block';
    text.innerHTML="He takes you to eat a new krabby patties You sit down at his kitchen table, and SpongeBob proudly presents a dozen bizarre-looking Krabby Patties. I’ve been experimenting with some new recipes... like this one with sea cucumber and barnacle bits. Don't worry, it's not too weird! He says. As he hands you a suspicious-looking patty, you can't shake the feeling that he's a bit too excited for you to try it. Trust me, it's totally edible! Double click to see how the story ends";
    mis.style.display='none';
    stay.style.display='none';
});
tasting.addEventListener("dblclick", function(){
    tasting.style.display ="none";
     text.innerHTML = "You take a bite of the burger, and something feels wrong. Looking closer, you realize it's not meat—it's human."
     human.style.display ="block";
     cback.style.display='none';
 });
