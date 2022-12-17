var mobileMenuBtn = document.querySelector(".harmb"),
    mobileMenuBtnImg = document.getElementById("harmb"),
    mobileMenuCloseBtn = document.querySelector(".close"),
    mobileMenuLinks = document.querySelector(".hide"),
    bookmarkBtn = document.querySelector(".bookmark"),
    bookmarkTexts = document.getElementById("bookmark"),
    standOption = document.querySelectorAll(".radio"),
    projectStand = document.querySelectorAll(".project-stand"),
    main = document.querySelector("main"),
    selectRewardBtn = document.querySelectorAll(".std-link"),
    project = document.querySelector(".project"),
    backProjectBtn = document.getElementById("back"),
    continueBtn = document.querySelectorAll(".cont"),
    completedPage = document.querySelector(".completed"),
    numInput = document.querySelectorAll(".numb");


mobileMenuBtn.addEventListener("click", function(){
    mobileMenuLinks.classList.toggle("hide");
    mobileMenuBtnImg.classList.toggle("close");
    mobileMenuCloseBtn.classList.toggle("close");
});

bookmarkBtn.addEventListener("click", function(){
    bookmarkBtn.classList.toggle("bkm");
    bookmarkTexts.innerText === "Bookmark" ? bookmarkTexts.innerText = "Bookmarked" : bookmarkTexts.innerText = "Bookmark";
});

selectRewardBtn.forEach(s => {
    s.addEventListener("click", function(){
        main.classList.toggle("opac");
        project.classList.toggle("disp");
    });
});

backProjectBtn.addEventListener("click", function(){
    main.classList.toggle("opac");
    project.classList.toggle("disp");
});

continueBtn.forEach(c => {
    c.addEventListener("click", function(){
        numInput.forEach(input => {
            if(input.value > "0"){
                project.classList.toggle("hide-comp");
                completedPage.classList.toggle("hide-comp");
            }
        })        
    })
});

// projectStand.forEach((c, i) => {
//     c.addEventListener("click", function(){
//         c.style.borderColor = "hsl(176, 50%, 47%)";
//     });
// });

// standOption.forEach(s => {
//     s.addEventListener("click", function(){
//         projectStand.forEach(p => {
//             if(s.checked){
//                 if(p.classList.contains("border")){
//                     p.classList.remove("border")
//                 }
//                 else{
//                     p.classList.add("border")
//                 }
//             }
//             else{
//                 p.classList.remove("border")
//             }
//         })
//     })
// })

// for(var i = 0; i < standOption.length; i++){
//     standOption[i].addEventListener("click", function(){
//         standOption[i].classList.toggle("border")
//     })
// }