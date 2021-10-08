## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Make a selection of which pledge to make
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked

### Screenshot

![Desktop screenshot](./Finished Product Screenshot- Desktop.png)
![Mobile screenshot](./Finished Product Screenshot- Mobile.png)

### Links

- Live Site URL: https://shakadeliks.github.io/Crowdfunding-Product-Page/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript
- CSS Media Queries
- CSS variables

### What I learned

This project really stretched my ability at the time, which forced me to get out of my comfort zone.

I applied the use of for loops to create functions that would be triggered by and used on multiple elements that served the same purpose.

I had not fully understood for loops before this project, now I have been exposed to the potential of them for future projects and apps.

```js
for (let i = 0; i < submitBtns.length; i++) {
  submitBtns[i].addEventListener("click", (e) => {
    let currentAmount = parseInt(
      document
        .querySelector("#second-main-section-backers")
        .innerHTML.replace(/\$|,/g, "")
    );

    const target = 100000;

    const pledgedAmountInput = parseInt(
      e.target.previousElementSibling.firstElementChild.value
    );

    const minimumPledgeRequired =
      e.target.previousElementSibling.firstElementChild.min;

    if (
      pledgedAmountInput == "" ||
      pledgedAmountInput == null ||
      pledgedAmountInput == isNaN
    ) {
      alert("A pledge is required");
    } else if (pledgedAmountInput < minimumPledgeRequired) {
      alert("A minimum pledge of $" + minimumPledgeRequired + " is required.");
    } else {
      let newAmount = pledgedAmountInput + currentAmount;

      document.querySelector("#second-main-section-backers").innerHTML =
        "$" + formatter.format(newAmount);

      localStorage.setItem("amountRaised", newAmount);

      let newProgressBarWidth = Math.round((newAmount / target) * 100);

      progressBar.style.width = newProgressBarWidth + "%";

      localStorage.setItem("progressBarWidth", newProgressBarWidth);

      let currentBackers = parseInt(
        document.querySelector("#total-backers").innerHTML.replace(/,/g, "")
      );

      currentBackers++;

      document.querySelector("#total-backers").innerHTML =
        formatter.format(currentBackers);

      localStorage.setItem("TotalBackers", currentBackers);

      let stockLeft = e.target.parentElement;

      stockLeftAmount = parseInt(
        stockLeft.parentElement.previousElementSibling.firstElementChild
          .innerHTML
      );

      stockLeftElement =
        stockLeft.parentElement.previousElementSibling.firstElementChild;

      stockLeftAmount--;

      stockLeftElement.innerHTML = stockLeftAmount;

      pledgeSuccessModal.style.display = "flex";

      modal.style.display = "none";

      let pledgeRadioBtn = e.target.parentElement;

      pledgeRadioBtn =
        pledgeRadioBtn.parentElement.parentNode.firstElementChild
          .firstElementChild.firstElementChild;

      pledgeRadioBtn.checked = false;
    }
  });
}
```

I learned about using pseudo-classes and pseudo-elements for styling.

```css
#second-main-section-first::after,
#second-main-section-second::after {
  position: absolute;
  width: 0.7px;
  height: 60%;
  right: 0;
  bottom: 2.5rem;
}
```

Something I was unfamiliar was SVG's and how they can be used to create virtually any shape and can be styled freely.

I had my first experience styling custom radio buttons, which I was super proud of.

```html
<span class="radio__input">
  <input type="radio" name="pledge" id="pledge-option-no-rewards" />
  <span class="radio__control"></span>
</span>
```

```css
.radio__input {
  grid-area: radio;
  display: flex;
  align-items: center;
}

.radio__input > input {
  opacity: 0;
  width: 0;
  height: 0;
}

.radio__input > input:checked + .radio__control {
  background: radial-gradient(var(--cyan) 50%, rgba(255, 0, 0, 0) 51%);
}

.radio__control {
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: solid 1.5px rgba(0, 0, 0, 0.3);
  transition: var(--trans);
  cursor: pointer;
}

.radio__control:hover {
  border: solid 1.5px var(--cyan);
}
```

### Continued development

I want to continue to develop my abilities to write better markup that will give me room to have less dense css.

I need to write more efficient Javascript functions so that the code is less obtuse, more readable and efficient.

I would like to develop more consistenecy with my CSS styling to correctly apply padding and margins to slim down the CSS written.

### Useful resources

- [Code Grepper](https://www.codegrepper.com/code-examples/javascript/remove+multiple+characters+from+string+javascript) - This helped me with removing undesired characters from html strings so that they could be parsed for my JS function.

- [Modern CSS](https://moderncss.dev/pure-css-custom-styled-radio-buttons/) - A great article by Steph Eckles that provides a clear and useful practice for creating customer radio buttons that are still accessible.

- [Github](https://github.com/brasspetals/fm-crowdfunding-product-page/blob/main/js/script.js) - This resource gave me a way to create the progress bar as I had no idea how to begin doing that before reading this.
