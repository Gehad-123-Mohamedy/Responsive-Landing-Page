var f1=document.querySelector(".f1")
var f2=document.querySelector(".f2")
var f3=document.querySelector(".f3")

var b1=document.querySelector(".b1")
var b2=document.querySelector(".b2")
var b3=document.querySelector(".b3")
var b4=document.querySelector(".b4")

var s1=document.querySelector(".s1")
var s2=document.querySelector(".s2")
var s3=document.querySelector(".s3")

window.onscroll=function(){
    if(scrollY>300){
      f1.style.animation = "FadeUp 1.2s forwards"
      f2.style.animation = "FadeUp 1.2s 0.2s forwards"
      f3.style.animation = "FadeUp 1.2s 0.4s forwards"

    }
    if(scrollY>2500){
      b1.style.animation = "FadeUp 1.2s forwards"
      b2.style.animation = "FadeUp 1.2s 0.2s forwards"
      b3.style.animation = "FadeUp 1.2s 0.4s forwards"
      b4.style.animation = "FadeUp 1.2s 0.6s forwards"

    }
    if(scrollY>3700){
        s1.style.animation = "FadeUp 1.2s forwards"
        s2.style.animation = "FadeUp 1.2s 0.2s forwards"
        s3.style.animation = "FadeUp 1.2s 0.4s forwards"
        
    }
}