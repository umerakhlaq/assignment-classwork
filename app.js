function generatePassword() {
    let userNumber = prompt("entre the number of characters of the password:");
    let parsedNumber = (userNumber);
    if (isNaN(parsedNumber) || (parsedNumber) <= 0) {
        alert('please entre a volid positive number');
        document.getElementById('generateButton').style.backgroundColor = 'red'
        return;
    }

    let passwordType = prompt(
        "what type of password do you want?\n" +
        "1. Number Only\n" +
        "2. Alphabet Only (lowercase)\n" +
        "3. Alphabet Only (uppercase)\n" +
        "4. AplhaNumeric (both number and latter)\n" +
        "5. Alphanumeric with symbols\n" +
        "Please entre 1, 2, 3, 4 or 5"
    );

    let characters = '';
    switch (passwordType) {
        case '1':
            characters = '0123456789101112131415161718119202122232425';
            break;
        case '2':
            characters = 'abcdefghijklmnopqrstuvwxvz';
            break;
        case '3':
            characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            break;
        case '4':
            characters = 'abcdefghijklmnopqrstuvwxvzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789101112131415161718119202122232425';
            break;
        case '5':
            characters = 'abcdefghijklmnopqrstuvwxvzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789101112131415161718119202122232425_-.!#$&@?:'
            break;
        default:
            alert('Invalid option selected . please refresh and try again');
            document.getElementById('generateButton').style.backgroundColor = 'red'
            return;
    }

    let randompPassword = '';
    for (let i = 0; i < parsedNumber; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        randompPassword += characters[randomIndex];

    }
    alert("Your" + parsedNumber + "-characters password is:" + randompPassword)
    document.getElementById("generateButton").style.backgroundColor = "green";
}
