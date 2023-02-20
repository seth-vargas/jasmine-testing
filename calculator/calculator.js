window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: parseInt(document.getElementById("loan-amount").value),
    years: parseInt(document.getElementById("loan-years").value),
    loanRate: parseFloat(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM. Put some default values in the inputs. Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanAmount = document.querySelector("#loan-amount")
  const loanYears = document.querySelector("#loan-years")
  const loanRate = document.querySelector("#loan-rate")
  
  loanAmount.value = 400000
  loanYears.value = 30
  loanRate.value = .10
  
  const inputsFromUI = {
    amount: loanAmount.value,
    years: loanYears.value,
    loanRate: loanRate.value
  }
  
  updateMonthly(calculateMonthlyPayment(inputsFromUI))
}

// Get the current values from the UI, Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues()
  updateMonthly(calculateMonthlyPayment(currentUIValues))
}

// Given an object of values (a value has amount, years and rate ), calculate the monthly payment.  The output should be a string that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  var principle = values.amount
  var years = values.years
  var rate = values.loanRate
  var periodicInterestRate = rate / 12

  console.log(values.amount)
  console.log(values.years)
  console.log(values.loanRate)
  const monthlyPayment = (principle * periodicInterestRate) / (1 - Math.pow((1 + periodicInterestRate), (-1 * years * 12)))

  return(monthlyPayment.toFixed(2))
}

// Given a string representing the monthly payment value, update the UI to show the value.
function updateMonthly(monthly) {
  console.log(monthly)
  const monthlyPaymentSpan = document.querySelector("#monthly-payment")
  if(monthlyPaymentSpan){
    monthlyPaymentSpan.innerText = `\$${monthly}`
  }
  return `\$${monthly}`
}
