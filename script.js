// Loan Calculator
function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const loanTerm = parseFloat(document.getElementById('loanTerm').value) * 12;

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
        alert("Please enter valid numbers for all loan fields.");
        return;
    }

    const monthlyPayment = loanAmount * interestRate / (1 - Math.pow((1 + interestRate), -loanTerm));
    const totalPayment = monthlyPayment * loanTerm;

    document.getElementById('loanResult').innerText = `Monthly Payment: $${monthlyPayment.toFixed(2)}, Total Payment: $${totalPayment.toFixed(2)}`;
}

// Interest Calculator
function calculateInterest() {
    const principal = parseFloat(document.getElementById('principalAmount').value);
    const rate = parseFloat(document.getElementById('interestRateCalc').value) / 100;
    const freq = parseInt(document.getElementById('compoundingFreq').value);
    const time = parseFloat(document.getElementById('timePeriod').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(freq) || isNaN(time)) {
        alert("Please enter valid numbers for all interest fields.");
        return;
    }

    const amount = principal * Math.pow((1 + rate / freq), freq * time);
    const interest = amount - principal;

    document.getElementById('interestResult').innerText = `Future Value: $${amount.toFixed(2)}, Total Interest: $${interest.toFixed(2)}`;
}

// Savings Goal Calculator
function calculateSavingsGoal() {
    const goalAmount = parseFloat(document.getElementById('goalAmount').value);
    const monthlyContribution = parseFloat(document.getElementById('monthlyContribution').value);
    const rate = parseFloat(document.getElementById('goalRate').value) / 100 / 12;
    const time = parseFloat(document.getElementById('goalTime').value) * 12;

    if (isNaN(goalAmount) || isNaN(monthlyContribution) || isNaN(rate) || isNaN(time)) {
        alert("Please enter valid numbers for all savings goal fields.");
        return;
    }

    const futureValue = monthlyContribution * ((Math.pow(1 + rate, time) - 1) / rate);
    const result = futureValue >= goalAmount ? `Goal Reached: $${futureValue.toFixed(2)}` : "Goal Not Reached";

    document.getElementById('savingsResult').innerText = result;
}

// Consultation Form Submission
document.getElementById('consultationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for your submission!");
    document.getElementById('consultationForm').reset();
});
