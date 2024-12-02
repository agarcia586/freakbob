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

//starting screen
party.style.display='none';
calling.style.display='none';
found.style.display='none';
run.style.display='none';
cback.style.display='none';
end.style.display='none';

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

    text.innerHTML="You begging to regret declining, freakbob, and in a rush you hastily call him back, click end button to see how the story ends ";

});
//runing away
party.addEventListener("dblclick", function(){
    party.style.display ="none";
     text.innerHTML = "You hear fast footsteps approach you, you get scared and things get scary you decide to run, hover to see how the story ends"
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