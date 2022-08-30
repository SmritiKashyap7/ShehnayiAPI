$('.slick-js').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            } 
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
        // You can unslick at	any time.
        // {
        //     breakpoint: 320,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //     }
        // }
    ]
});


// Mobileview navbar
document.querySelector ("#menu").addEventListener ("click", function (event) {
    document.querySelector ("#mobileview").style.left = "0";
    event.preventDefault();
})

document.querySelector ("#mobileview i").addEventListener ("click", function () {
    document.querySelector ("#mobileview").style.left = "-100%";
})


// msg-popup
// document.querySelector ("#right-js .chat-div").addEventListener ("click", function() {
//     document.querySelector ("#msg-popup").style.right = "0";
// })

// document.querySelector ("#msg-heading #rgt #close").addEventListener ("click", function() {
//     document.querySelector ("#msg-popup").style.right = "-130%";
// })

// document.querySelector ("#back").style.display = "none";

// document.querySelector ("#back").addEventListener ("click", function(){
//     document.querySelector ("#sec-2 #sec-2-rgt").style.display = "none";
//     document.querySelector ("#sec-2-rgt #rgt-top").style.display = "none";
//     document.querySelector ("#sec-2 #sec-2-lft").style.display = "flex";
//     document.querySelector ("#sec-2 #sec-2-lft").style.flexDirection = "column";
// })

// if (document.documentElement.clientWidth < 450) {
//     const userss= document.querySelectorAll(".lft-users");
//     userss.forEach (function (elem) {
//         elem.addEventListener ("click", function () {
//             document.querySelector ("#sec-2 #sec-2-rgt").style.display = "initial";
//             document.querySelector ("#sec-2-rgt #rgt-top").style.display = "flex";
//             document.querySelector ("#sec-2 #sec-2-lft").style.display = "none";
//             document.querySelector ("#back").style.display = "initial";
//         })
//     })
// }
