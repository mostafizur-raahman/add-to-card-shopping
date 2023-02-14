function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-filed');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;

    if (isIncrease) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }

    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}
function updatedPhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}

// get phone total

document.getElementById('btn-phone-plus').addEventListener('click', function () {

    const newPhoneNumber = updatePhoneNumber(true);
    updatedPhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();

})
document.getElementById('btn-phone-minas').addEventListener('click', function () {

    const newPhoneNumber = updatePhoneNumber(false);
    updatedPhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
})