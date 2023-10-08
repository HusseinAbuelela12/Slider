// Get Slider Items | Array.from[ES6 Feature]
let sliderImages = Array.from(document.querySelectorAll(".slider-container img"));

// fer number of slides 
let slidesCount = sliderImages.length;

// set current slide 
let currentSlide = 1 ;

//slide number string element 
let slideNumberElement = document.getElementById("slide-number");

// previous and next buttons
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

//handle click on previous and next buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// create the maim ul element
let paginationElement = document.createElement("ul");

// set id on created ul element
paginationElement.setAttribute("id", "pagination-ul");

// create list items based on slides count

for (let i = 1; i <= slidesCount ; i++) {
    //create the li
    let paginationItem = document.createElement("li");
    
    // set custom attribute
    paginationItem.setAttribute("data-index", i);

    // set item content 
    paginationItem.appendChild(document.createTextNode(i));

    //set li in ul 
    paginationElement.appendChild(paginationItem);
}

// add the created ul element to the page
let indicators = document.getElementById("indicators");

indicators.appendChild(paginationElement);

//get the new created ul
let paginationCreatedUl = document.getElementById("pagination-ul");

// Get paginations Items | Array.from[ES6 Feature]
let paginationsBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

// loop through all bullets items
for (let i = 0; i < paginationsBullets.length; i++) {
    paginationsBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute("data-index"));
        theChecker();
    };
}


// Trigger The Checker Function
theChecker();


// next slide function

function nextSlide() {
    if (nextButton.classList.contains("disabled")) {
        return false;
    }else{
        currentSlide++;
        theChecker();
    }
};

// previous slide function

function prevSlide() {
    if (prevButton.classList.contains("disabled")) {
        return false;
    }else{
        currentSlide--;
        theChecker();
    }
};

// create the checker function
function theChecker () {
    //set the slide number
    slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' Of ' + (slidesCount);
    
    // Remove All Active Classes
    removeAllActive();
    
    // set active class on current slide
    sliderImages[currentSlide - 1].classList.add("active");

    // set active class on current pagination item
    paginationCreatedUl.children[currentSlide - 1].classList.add("active")
    
    //check if current slide is the first 
    if (currentSlide == 1 ) {
        prevButton.classList.add("disabled");
    }else{
        prevButton.classList.remove("disabled");
    }

    //check if current slide is the last 
    if (currentSlide == slidesCount ) {
        nextButton.classList.add("disabled");
    }else{
        nextButton.classList.remove("disabled");
    }

};

// Remove All Active Classes From Images And Pagination Bullets
function removeAllActive () {
    // loop through images
    sliderImages.forEach(function (img) {
        img.classList.remove("active");
    });
    
    //loop through pagination bullets
    paginationsBullets.forEach(function (bu) {
        bu.classList.remove("active");
    });
};