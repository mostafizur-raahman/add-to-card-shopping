function getTextElementvalueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementvalueById(elementId, value) {
    const subtotalElement = document.getElementById(elementId);
    subtotalElement.innerText = value;
}
// calculate subtotal 
function calculateSubTotal() {

    // calculate total
    const currentPhoneTotal = getTextElementvalueById('phone-total');
    const currentCaseTotal = getTextElementvalueById('case-total');


    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementvalueById('sub-total', currentSubTotal);

    // calculated tax 
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementvalueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementvalueById('final-total', finalAmount);
}