document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let form = event.target;
    let firstName = form.firstName.value;
    let lastName = form.lastName.value;
    let email = form.email.value;
    let address = form.address.value;
    let pincode = form.pincode.value;
    let gender = form.gender.value;
    let state = form.state.value;
    let country = form.country.value;

    let foodOptions = form.querySelectorAll('input[name="food"]:checked');
    let foodChoices = Array.from(foodOptions).map(option => option.value);

    if (foodChoices.length < 2) {
        alert('Please choose at least 2 food options.');
        return;
    }

    let table = document.getElementById('dataTable').querySelector('tbody');
    let newRow = table.insertRow();

    newRow.insertCell(0).innerText = firstName;
    newRow.insertCell(1).innerText = lastName;
    newRow.insertCell(2).innerText = email;
    newRow.insertCell(3).innerText = address;
    newRow.insertCell(4).innerText = pincode;
    newRow.insertCell(5).innerText = gender;
    newRow.insertCell(6).innerText = foodChoices.join(', ');
    newRow.insertCell(7).innerText = state;
    newRow.insertCell(8).innerText = country;

    form.reset();
});