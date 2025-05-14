// Seleciona os elementos do DOM
const sortButton = document.getElementById('sort-button');
const resetButton = document.getElementById('reset-button');
const floorsInput = document.getElementById('floors-input');
const resultDiv = document.getElementById('result');

// Função para ordenar os andares
function sortFloors(floorsArray) {
    // Usa o método sort para ordenar os números em ordem crescente
    return floorsArray.sort((a, b) => a - b);
}

// Função para validar e processar a entrada
function processInput() {
    // Pega o valor do input e remove espaços em branco
    const inputValue = floorsInput.value.trim();

    // Verifica se o input está vazio
    if (!inputValue) {
        alert('Por favor, insira os andares visitados!');
        return;
    }

    try {
        // Divide a string pelo separador vírgula e converte para números
        const floorsArray = inputValue.split(',')
            .map(item => {
                const num = parseInt(item.trim(), 10);
                if (isNaN(num)) {
                    throw new Error('Entrada inválida: todos os valores devem ser números');
                }
                return num;
            });

        // Ordena os andares
        const sortedFloors = sortFloors(floorsArray);

        // Exibe o resultado formatado
        resultDiv.textContent = `[${sortedFloors.join(', ')}]`;
    } catch (error) {
        // Exibe mensagem de erro se a entrada for inválida
        alert(error.message);
        resultDiv.textContent = '';
    }
}

// Função para resetar o formulário
function resetForm() {
    floorsInput.value = '';
    resultDiv.textContent = '';
}

// Adiciona event listeners aos botões
sortButton.addEventListener('click', processInput);
resetButton.addEventListener('click', resetForm);

// Permite ordenar pressionando Enter no input
floorsInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        processInput();
    }
});