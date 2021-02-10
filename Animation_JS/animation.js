
const rectViolet = gsap.timeline();
const joycon_tl = gsap.timeline().pause();
const games_tl = gsap.timeline().pause();
const switch_logo = gsap.timeline().pause();

//Animation der Farbigenbalken und das Display der Switch
rectViolet.to('.rect--violet', {
    y: 70, 
    opacity:1, 
    duration: 1,
})
.to('.rect--orange', {
    y: 100, 
    opacity:1, 
    duration:1,
})
.to('.rect--red', {
    y: 60, 
    opacity:1, 
    duration:1,
})
.to('.n-switch', {
    y: -190, 
    duration:1, 
    opacity:1, 
    onComplete: function(){
    joycon_tl.resume()
}});

//Die Animation für den linken / rechten Joycon und der ganzen Switch
joycon_tl.to('.joycon--right',{
    y: 533, 
    duration:1, 
    opacity:1,  
})
.to('.joycon--left',{
    y: 533, 
    duration:1, 
    opacity:1,
})   
.to('.n-switch',{
   duration:1,
   rotation:-360,
},'+=0.25')
.to('.n-switch',{
    y: 200, 
    duration:1, 
    opacity:0,
    onComplete: function(){
    games_tl.resume()
}}, '+=0.25');

//Animation der 3 Spiele
games_tl.to('.card', {
   x: -1250,
    duration: 2, 
    opacity: 1,
})
.to('.card2', {
    x: -920,
    duration: 2,
    opacity: 1,
})
.to('.card3',{
    x: -590,
    duration: 2,
    opacity: 1,
    onComplete: function(){
    switch_logo.resume()
}});

//Animation des Logos der Switch
switch_logo.to('.nintendo', {
    x:260,
    duration: 2,
    opacity: 1,
})
.to('.right', {
    y: -50,
    duration:1,
})
.to('.right',{
    y:0,
    duration:0.25,
});
