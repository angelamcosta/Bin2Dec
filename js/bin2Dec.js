var isShowingResults = false;

function validateInput() {
    if (isShowingResults) {
        clearFields();
        isShowingResults = false;
        $('#submitButton').prop('value', 'Submit');
        $('#bin').prop('disabled', false);
    } else {
        let binary = $("#bin").val();
        if (binary.length > 8) {
            alert('You can enter up to 8 binary digits');
            return false;
        } else if (binary.length == 0) {
            alert('You have to submit a number');
            return false;
        } else if(!binary.match("^[01]+$")) {
            alert('You have to submit a binary number');
            return false;
        }
        clearFields();
        binToDec(binary)
    }
}

function binToDec(binary) {
    var decimal = 0, base = 1, remainder, saveBinary = binary;
    while (binary != 0) {
        remainder = binary % 10;
        binary = Math.floor(binary / 10);
        decimal += remainder * base;
        base *= 2;
    }

    console.log(decimal);
    $('#result').append('<h4>The result of the conversion of the binary number ' + saveBinary + ' is:</h4>')
    $('#result').append('<h2>' + decimal + '</h2>');
    isShowingResults = true;
    $('#submitButton').prop('value', 'Try another number!');
    $('#bin').prop('disabled', true);
}

function clearFields() {
    $('#bin').val('');
    $('#result').empty();
}