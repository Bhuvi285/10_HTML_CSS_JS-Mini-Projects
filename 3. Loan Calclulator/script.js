let btn = document.querySelector("#calculateBtn");

btn.addEventListener('click', function () {

    const loanAmount = parseFloat(document.querySelector("#loanAmountInput").value);
    const interestRate = parseFloat(document.querySelector("#interestRateInput").value);
    const loanTerm = parseFloat(document.querySelector("#loanTermInput").value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
        alert("Please Enter valid Numbers for all the Fields");
    }

    const monthlyInterest = interestRate / 100 / 12;
    const totalPayments = loanTerm;
    const monthlyPayment = (loanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -totalPayments));
    const totalInterest = (monthlyPayment * totalPayments) - loanAmount;

    displayResult(monthlyPayment, totalInterest);
});

function displayResult(monthlyPayment, totalInterest) {
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = `
        <p><strong>Monthly Payment: ${monthlyPayment.toFixed(2)}</p></strong>
        <p><strong>Total Interest: ${totalInterest.toFixed(2)}</p></strong>
     `;
}