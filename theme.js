
//project1
const Btn = document.getElementById("theme");
const caption= document.querySelector("#caption")
 
    Btn.addEventListener("click",()=>{
    if(Btn.innerHTML==="LIGHT MODE"){
    
        document.body.style.backgroundColor="black"
        Btn.innerHTML="DARK MODE "
        Btn.style.backgroundColor="white"
        Btn.style.color="black"
        caption.style.color="white"
        
        
    }
    else{
        document.body.style.backgroundColor="white"
        Btn.innerHTML="LIGHT MODE"
        Btn.style.backgroundColor="black"
        Btn.style.color="white"
        caption.style.color="black"
        
    }
})