// Local storage to store all of the upate values of the customer's pledge(s)

localStorage.setItem('amountRaised', '');
localStorage.setItem('TotalBackers', '');
localStorage.setItem('bookmarked', '');
localStorage.setItem('progressBarWidth', '');

window.addEventListener('load', () => {
    localStorage.setItem('amountRaised', '89914');

    amountRaised = localStorage.getItem('amountRaised');

    document.querySelector("#second-main-section-backers").innerHTML = "$" + formatter.format(amountRaised);

    localStorage.setItem('TotalBackers', '5007');

    backers = localStorage.getItem('TotalBackers');

    document.querySelector("#total-backers").innerHTML = formatter.format(backers);

    localStorage.setItem('progressBarWidth', '75');

    progressBarWidth = localStorage.getItem('progressBarWidth');

    progressBar.style.width = progressBarWidth + "%";


})


const hamburger = document.querySelector(".nav-menu-hamburger");
const navMenu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".overlay");
const navMenuCloseBtn = document.querySelector(".nav-menu-close");
const navLinks = document.querySelectorAll(".nav-item");

hamburger.addEventListener('click', toggleMenu);
navMenuCloseBtn.addEventListener('click', toggleMenu);

function toggleMenu() {

    if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        navMenuCloseBtn.style.display = "none"
        hamburger.style.display = "block";
    } else {
        navMenu.classList.add("active");
        navMenuCloseBtn.style.display = "block";
        hamburger.style.display = "none";
    }

}

navLinks.forEach (

    function(navLink) {
        navLink.addEventListener('click', toggleMenu);
    }

)

// toggling of the styling of the bookmark btn 

function bookmarkOnOff(bookmarked) {

     bookmarked = false;

     bookmarked = !bookmarked;

    const bookmarkOuter = document.querySelector(".bookmark-circle");

    const bookmarkInner = document.querySelector(".bookmark-shape");

    const bookmarkText = document.querySelector('.bookmark-desktop');

    bookmarkOuter.classList.toggle('marked');

    bookmarkInner.classList.toggle('inner-marked');

    bookmarkText.classList.toggle('selected');

    console.log(bookmarkOuter.classList);

    if (bookmarkOuter.classList.value === 'bookmark-circle marked') {

        bookmarkText.textContent = 'Bookmarked';

    } else if (bookmarkOuter.classList.value === 'bookmark-circle') {

        bookmarkText.textContent = 'Bookmark'
    }

}

const entireBookmarkBtn = document.getElementsByClassName('bookmark bookmark-btn-desktop');

 document.querySelector("#icon-bookmark").addEventListener('click', () => {

     bookmarkOnOff();


 })

document.querySelector(".bookmark-desktop").addEventListener('click', () => {
    bookmarkOnOff();

}) 

// MODAL



const modal = document.querySelector(".modal");

const modalBackground = document.querySelector("#modal-background-overlay");

document.querySelector("#backProjectBtn").addEventListener('click', e => {

    modal.style.display = "block";

    modalBackground.style.display = "block";

    document.querySelectorAll(".radio__input > input").checked = false;
    
})

const modalRadioBtns = document.getElementsByClassName("modal-pledge-option-radio");

const modalPledgeCards = document.getElementsByClassName("modal-pledge-option");

const modalPledgeInputAreas = document.getElementsByClassName("pledge-selection");

document.querySelector("#modal-close-btn").addEventListener("click", e => {

    modal.style.display = "none";

    modalBackground.style.display = "none";

    modalRadioBtns.checked = false;

})

// function for changing style of the focused modal based on the selected radio btn

const pledgeRadioBtnNoReward = document.querySelector("#pledge-option-no-rewards");

const pledgeRadioBtnBamboo = document.querySelector("#pledge-option-bamboo");

const pledgeRadioBtnBlack = document.querySelector("#pledge-option-black")

const modalCardNoReward = document.querySelector("#modal-pledge-option-no-reward");

const modalCardBamboo = document.querySelector("#modal-pledge-option-bamboo");

const modalCardBlack = document.querySelector("#modal-pledge-option-black");

const pledgeInputNoReward =  document.querySelector("#pledge-selection-no-reward");

const pledgeInputBamboo = document.querySelector("#pledge-selection-bamboo");

const pledgeInputBlack = document.querySelector("#pledge-selection-black");

const x = window.matchMedia("(min-width: 600px)");

pledgeRadioBtnNoReward.addEventListener('change', () => {

    if (pledgeRadioBtnNoReward.checked) {

        modalCardNoReward.style.border = 'solid 1.5px var(--cyan)';

        modalCardBamboo.style.border = 'solid 1.5px rgba(0, 0, 0, 0.1)';

        modalCardBlack.style.border = 'solid 1.5px rgba(0, 0, 0, 0.1)';

        if(x.matches) {

            pledgeInputNoReward.style.display = 'inline-flex';

            pledgeInputBlack.style.display = 'none';

            pledgeInputBamboo.style.display = 'none';
        } else {

            pledgeInputNoReward.style.display = 'inline-block';

            pledgeInputBlack.style.display = 'none';

            pledgeInputBamboo.style.display = 'none';
        }

    }
})

pledgeRadioBtnBamboo.addEventListener('change', () => {

    if (pledgeRadioBtnBamboo.checked) {

        modalCardBamboo.style.border = 'solid 1.5px var(--cyan)';

        modalCardNoReward.style.border = 'solid 1.5px rgba(0, 0, 0, 0.1)';

        modalCardBlack.style.border = 'solid 1.5px rgba(0, 0, 0, 0.1)';

        if(x.matches) {

            pledgeInputBamboo.style.display = 'inline-flex'

            pledgeInputBlack.style.display = 'none';

            pledgeInputNoReward.style.display = 'none';
            
        } else {

            pledgeInputBamboo.style.display = 'inline-block';

            pledgeInputBlack.style.display = 'none';

            pledgeInputNoReward.style.display = 'none';
        }

    }
})

pledgeRadioBtnBlack.addEventListener('change', () => {

    if (pledgeRadioBtnBlack.checked) {

        modalCardBlack.style.border = 'solid 1.5px var(--cyan)';

        modalCardNoReward.style.border = 'solid 1.5px rgba(0, 0, 0, 0.1)';

        modalCardBamboo.style.border = 'solid 1.5px rgba(0, 0, 0, 0.1)';

        if(x.matches) {

            pledgeInputBlack.style.display = 'inline-flex';

            pledgeInputBamboo.style.display = 'none';

            pledgeInputNoReward.style.display = 'none';
            
        } else {

            pledgeInputBlack.style.display = 'inline-block';

            pledgeInputBamboo.style.display = 'none';

            pledgeInputNoReward.style.display = 'none';
        }

        

    }
})

const formatter = new Intl.NumberFormat("en");

const pledgeSuccessModal = document.querySelector(".modal-pledge-complete");

const progressBar = document.querySelector(".progress");

const submitBtns = document.querySelectorAll("#pledge-submit-btn-black, #pledge-submit-btn-bamboo");

const modalPledgeHeadings = document.getElementsByClassName("product__name");

const modalPledgeRadios = document.getElementsByClassName("radio__control");

// function that changes color for both product heading and radio btn border on hover of either element

for (let i = 0; i < modalPledgeHeadings.length; i++) {

    modalPledgeHeadings[i].addEventListener('mouseover', e => {

        const pledgeRadio = e.target.parentElement.previousElementSibling.lastElementChild;

        modalPledgeHeadings[i].style.color = "var(--cyan)"

        pledgeRadio.style.border = 'solid 1.5px var(--cyan)';
    })

    modalPledgeHeadings[i].addEventListener('mouseout', e => {

        const pledgeRadio = e.target.parentElement.previousElementSibling.lastElementChild;

        pledgeRadio.style.border = 'solid 1.5px rgba(0, 0, 0, 0.3)';

        modalPledgeHeadings[i].style.color = "black";
    })
}

for (let i = 0; i < modalPledgeRadios.length; i++) {

    modalPledgeRadios[i].addEventListener('mouseover', e => {

        const pledgeProductName = e.target.parentElement.nextElementSibling.firstElementChild;

        pledgeProductName.style.color = 'var(--cyan)';
    })

    modalPledgeRadios[i].addEventListener('mouseout', e => {

        const pledgeProductName = e.target.parentElement.nextElementSibling.firstElementChild;

        pledgeProductName.style.color = 'black';
    })
}

// function for submission of user pledge 

for (let i = 0; i < submitBtns.length; i++) {

    submitBtns[i].addEventListener("click", (e) => {

        let currentAmount = parseInt(document.querySelector("#second-main-section-backers").innerHTML.replace(/\$|,/g, ''));

        const target = 100000;

        const pledgedAmountInput = parseInt(e.target.previousElementSibling.firstElementChild.value);

        const minimumPledgeRequired = e.target.previousElementSibling.firstElementChild.min;

        if (pledgedAmountInput == '' || pledgedAmountInput == null || pledgedAmountInput == isNaN) {

            alert("A pledge is required");



        } else if (pledgedAmountInput < minimumPledgeRequired){

            alert("A minimum pledge of $" + minimumPledgeRequired + " is required.");



        } else {

            let newAmount = pledgedAmountInput + currentAmount;

            document.querySelector("#second-main-section-backers").innerHTML = "$" + formatter.format(newAmount);

            localStorage.setItem("amountRaised", newAmount)

            let newProgressBarWidth = Math.round((newAmount / target) * 100);

            progressBar.style.width = newProgressBarWidth + "%";

            localStorage.setItem('progressBarWidth', newProgressBarWidth);

            let currentBackers = parseInt(document.querySelector("#total-backers").innerHTML.replace(/,/g, ''));

            currentBackers++;

            document.querySelector("#total-backers").innerHTML = formatter.format(currentBackers);

            localStorage.setItem('TotalBackers', currentBackers);

            let stockLeft = e.target.parentElement;

            stockLeftAmount = parseInt(stockLeft.parentElement.previousElementSibling.firstElementChild.innerHTML);

            stockLeftElement = stockLeft.parentElement.previousElementSibling.firstElementChild

            stockLeftAmount--;

            stockLeftElement.innerHTML = stockLeftAmount;

            pledgeSuccessModal.style.display = 'flex';

            modal.style.display = "none";

            let pledgeRadioBtn = e.target.parentElement;

            pledgeRadioBtn = pledgeRadioBtn.parentElement.parentNode.firstElementChild.firstElementChild.firstElementChild;

            pledgeRadioBtn.checked = false;

           
        }

    })
}

const noRewardPledgeSubmit = document.getElementById("pledge-submit-btn-no-reward");

noRewardPledgeSubmit.addEventListener('click', () => {

    let currentBackers = parseInt(document.querySelector("#total-backers").innerHTML.replace(/,/g, ''));
    
    currentBackers++;

    document.querySelector("#total-backers").innerHTML = formatter.format(currentBackers);

    localStorage.setItem('TotalBackers', currentBackers);

    pledgeSuccessModal.style.display = 'flex';

    modal.style.display = "none";

})
// function for resetting modal styles once pledge is complete

const pledgeComplete = () => {

    pledgeSuccessModal.style.display = 'none';

    modalBackground.style.display = 'none';

    pledgeInputBamboo.style.display = 'none';

    pledgeInputNoReward.style.display = 'none';

    pledgeInputBlack.style.display = 'none';

    modalCardBlack.style.border = 'solid 1.5px rgba(0, 0, 0, 0.1)';

    modalCardNoReward.style.border = 'solid 1.5px rgba(0, 0, 0, 0.1)';

    modalCardBamboo.style.border = 'solid 1.5px rgba(0, 0, 0, 0.1)';

    document.getElementsByClassName("pledge-amount-input").value = null;

    document.querySelector("#main-in-stock-amount-black").textContent = document.querySelector("#modal-in-stock-amount-black").textContent;

    document.querySelector("#main-in-stock-amount-bamboo").textContent = document.querySelector("#modal-in-stock-amount-bamboo").textContent;



}

document.querySelector("#pledge-complete-btn").addEventListener('click', pledgeComplete);

const selectRewardBamboo = document.querySelector("#product-pledge-btn-bamboo");

const selectRewardBlack = document.querySelector("#product-pledge-btn-black");

const BlackRadioPledgeBtn = document.querySelector("#pledge-option-black");

const BambooRadioPledgeRadioBtn = document.querySelector("#pledge-option-bamboo");

// function to display modal and select relevant pledge  based on the pledge clicked on home page

selectRewardBamboo.addEventListener('click', () => {

    modal.style.display = "block";

    modalBackground.style.display = "block";

    BambooRadioPledgeRadioBtn.click();

    pledgeInputBamboo.style.display = 'inline-block';

    modalCardBamboo.style.border = 'solid 1.5px var(--cyan)';

})

selectRewardBlack.addEventListener('click', () => {

    modal.style.display = "block";

    modalBackground.style.display = "block";

    BlackRadioPledgeBtn.click();

    pledgeInputBlack.style.display = 'inline-block';

    modalCardBlack.style.border = 'solid 1.5px var(--cyan)';

    

})
