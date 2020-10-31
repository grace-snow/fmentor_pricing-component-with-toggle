const result = document.querySelector('.pricing-container');
// make toggle inputs into array so can run forEach method
const togglePriceInputs = Array.from(document.querySelectorAll('[name="pay-type"]'));


function toggleMonthly() {
  result.classList.toggle('js-show-monthly');
}

togglePriceInputs.forEach(input => input.addEventListener('input', () => toggleMonthly()));


/**
 * TODO: 
 * It'd be nice to put the prices into json, loop over them dynamically as the toggle is clicked and populate the html. Not for today!
 */