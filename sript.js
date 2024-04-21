document.addEventListener('DOMContentLoaded', function() {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const errorMessage = document.getElementById('error-message');

    function compareNumbers() {
        const value1 = parseInt(input1.value, 10);
        const value2 = parseInt(input2.value, 10);

        if (value1 !== value2) {
            errorMessage.style.display = 'block';
            if (value1 > value2) {
                errorMessage.textContent = 'First number is larger';
            } else {
                errorMessage.textContent = 'Second number is larger';
            }
        } else {
            errorMessage.style.display = 'none';
        }
    }

    // Attach event listeners to both inputs
    input1.addEventListener('input', compareNumbers);
    input2.addEventListener('input', compareNumbers);
});
