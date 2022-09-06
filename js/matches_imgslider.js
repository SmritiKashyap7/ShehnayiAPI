const previmg = document.querySelector(".previmg-btn");
const nextimg = document.querySelector(".nextimg-btn");
let imgslider = document.getElementsByClassName("image-slider");// 4


// for(let i=0; i<imgslider.length; i++){
//     nextimg.addEventListener("click", function(){
        
//         if(document.querySelector(".img-1").style.display = "block"){
//             console.log("first");
//             document.querySelector(".img-1").style.display = "none";
//             document.querySelector(".img-2").style.display = "block";
//         }

//         else if(document.querySelector(".img-2").style.display = "block"){
//             console.log("two");
//             document.querySelector(".img-2").style.display = "none";
//             document.querySelector(".img-3").style.display = "block";
//         }

//         else if(document.querySelector(".img-3").style.display = "block"){
//             console.log("third");
//             document.querySelector(".img-3").style.display = "none";
//             document.querySelector(".img-4").style.display = "block";
//         }

//         else{
//             console.log("fourth");
//             document.querySelector(".img-4").style.display = "none";
//             document.querySelector(".img-1").style.display = "block";
//         }
//     });
// }


// for(let i=0; i<imgslider.length; i++){
//     previmg.addEventListener("click", function(){
        
//         if(document.querySelector(".img-1").style.display = "block"){
//             document.querySelector(".img-1").style.display = "none";
//             document.querySelector(".img-4").style.display = "block";
//         }

//         else if(document.querySelector(".img-2").style.display = "block"){
//             document.querySelector(".img-2").style.display = "none";
//             document.querySelector(".img-1").style.display = "block";
//         }

//         else if(document.querySelector(".img-3").style.display = "block"){
//             document.querySelector(".img-3").style.display = "none";
//             document.querySelector(".img-2").style.display = "block";
//         }

//         else{
//             document.querySelector(".img-4").style.display = "none";
//             document.querySelector(".img-3").style.display = "block";
//         }
//     });
// }

 
let currindex = 1;

nextimg.addEventListener('click',()=>{

    console.log(currindex);

    if(currindex>=imgslider.length){
        imgslider[currindex-1].style.display = 'none';
        imgslider[0].style.display ='block';  
        currindex = 1;
    }
    
    else{
        imgslider[currindex-1].style.display = 'none';
        imgslider[currindex].style.display = 'block';
        currindex+=1;
    }
})



previmg.addEventListener('click',()=>{

    console.log(currindex);

    if(currindex<1){
        imgslider[0].style.display = 'none';
        imgslider[imgslider.length-1].style.display ='block';  
        currindex = imgslider.length-1;
    }
  
    else{
        imgslider[currindex].style.display = 'none';
        imgslider[currindex-1].style.display = 'block';
        currindex-=1;
    }
})


