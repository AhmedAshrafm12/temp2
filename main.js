


    x= document.getElementById('twin');
    y= document.getElementById('cl');
    z= document.getElementById('Aw');
    d= document.getElementById('comp');


  i=0;
icr=setInterval(function(){
if(i<6){
    y.innerHTML=i;
    x.innerHTML=i;
    d.innerHTML=i;
    z.innerHTML=i;
}

else if(i<76){
    y.innerHTML=i;
    d.innerHTML=i;
    x.innerHTML=i;
}

else if(i<95){
    y.innerHTML=i;
    d.innerHTML=i;
}

else if(i<128){
    y.innerHTML=i;

}


    if(i>129){
        clearInterval(icr);
    }
    i++;
},140)



$('aside a').mouseenter(function(){
    $('aside hr:last-of-type').css('-webkit-transform','rotate('+-70+'deg)'); 
})

$('aside a').mouseenter(function(){
    $('aside hr:first-of-type').css('-webkit-transform','rotate('+70+'deg)'); 
})

$('aside a').mouseleave(function(){
    $('aside hr:last-of-type').css('-webkit-transform','rotate('+-0+'deg)'); 
})

$('aside a').mouseleave(function(){
    $('aside hr:first-of-type').css('-webkit-transform','rotate('+0+'deg)'); 
})


$('.works .work').mouseenter(function(){
    $('.'+$(this).data('over')).fadeIn();  
})

$('.works .work').mouseleave(function(){
    $('.'+$(this).data('over')).fadeOut(); 
})

window.onscroll=function(){
  if(window.scrollY>364){
      $('.navbar').fadeIn();
  }else{
    $('.navbar').fadeOut();
  }
}



t1="We love <strong>coding</strong>";
t2="We are <strong>designers</strong>";

var he =document.getElementById('he');
setInterval(function(){
    if(he.innerHTML=='')
    he.innerHTML=t2

    else if(he.innerHTML == t2)
    he.innerHTML=t1;

    
    else if(he.innerHTML == t1)
    he.innerHTML=t2;

},1000)