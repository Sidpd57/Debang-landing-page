function productOne(){
    document.getElementById('product-heading').innerHTML="What is this Product?";
    document.getElementById('product-paragraph').innerHTML="This is product one paragraph. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.";
}
function productTwo(){
    document.getElementById('product-heading').innerHTML="Why to buy this Product?";
    document.getElementById('product-paragraph').innerHTML="This is product two paragraph. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.";
}


// Page was refreshed, focus on the search input
if(performance.navigation.type === 1) {
  document.getElementById("search").focus();
}


let isOpen = false;
let allOptions = document.querySelectorAll(".options")
let navOptions = document.querySelectorAll(".nav-option")
let sidebarImg = document.querySelector(".sidebar-img")

function toggleSidebar(){
    if(!isOpen){
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        allOptions.forEach(option => {
            option.classList.add('option-text');
        });
        sidebarImg.classList.add('sidebar-img-visible')
        isOpen= true

    }else {
        document.getElementById("mySidenav").style.width = "100px";
        document.getElementById("main").style.marginLeft= "100px";
        allOptions.forEach(option => {
            option.classList.remove('option-text');
        });
        sidebarImg.classList.remove('sidebar-img-visible')
       
        isOpen=false
    }
}