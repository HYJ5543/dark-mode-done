let links = {
    setColor:function(color){
    let alist = document.querySelectorAll('a'); 
    let i = 0;
while(i < alist.length){
    alist[i].style.color = color;
    i = i+1;
    };
}
}
let body = {
    textSetColor:function(color){
        document.querySelector('body').style.color = color;
},

    backgroundSetColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
}
}   
function nightdayhandler(self){
let target = document.querySelector('body');
if(self.value === 'night'){
body.backgroundSetColor('black');
body.textSetColor('white');
self.value = 'day';

links.setColor('powderblue');

} else {
body.backgroundSetColor('white');    
body.textSetColor('black');
self.value = 'night'

links.setColor('blue');
}
}
