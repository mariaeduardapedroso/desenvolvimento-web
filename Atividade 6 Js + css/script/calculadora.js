document.addEventListener("DOMContentLoaded", function() {
    const resultField = document.getElementById("result");
    const num1Field = document.getElementById("num1");
    const num2Field = document.getElementById("num2");

    function calculate(operation) {
        const num1 = parseFloat(num1Field.value);
        const num2 = parseFloat(num2Field.value);

        if (isNaN(num1) || isNaN(num2)) {
            alert("Por favor, insira números válidos nos campos de entrada.");
            return;
        }

        let result;
        switch (operation) {
            case "add":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "multiply":
                result = num1 * num2;
                break;
            case "divide":
                if (num2 === 0) {
                    alert("Divisão por zero não é permitida.");
                    return;
                }
                result = num1 / num2;
                break;
        }

        resultField.value = result;
    }

    document.getElementById("add").addEventListener("click", () => calculate("add"));
    document.getElementById("subtract").addEventListener("click", () => calculate("subtract"));
    document.getElementById("multiply").addEventListener("click", () => calculate("multiply"));
    document.getElementById("divide").addEventListener("click", () => calculate("divide"));
});