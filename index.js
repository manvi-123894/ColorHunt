var num = [1 , 2, 3,4,5,6,7,8,9,'a','b','c','d','e','f'];
var btn = document.querySelector('.btn');

var color =  ['.color1','.color2','.color3','.color4','.color5'];


btn.addEventListener('click',function(){
    
for(var i =0;i<5;i++){

    var colorBox = document.querySelector(color[i]); 
    var colorName = document.querySelector(color[i] + ' .color-name');
    var hexCode = '#';
    for(var j =0;j<6;j++){
       var ranNum= randomNumber();
       hexCode += num[ranNum]; 
    }
  
    colorBox.style.backgroundColor = hexCode;
    colorName.innerText = hexCode;
    colorName.style.color = hexCode
}
   

});



function randomNumber(){
    return Math.floor(Math.random()*15);
}