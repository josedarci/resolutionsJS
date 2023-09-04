function solution(input) {
    // A função recebe uma string como entrada.

    return input.replace(/\d/g, '#');
    // O método replace é usado para substituir parte da string.
    // A expressão regular /\d/g corresponde a todos os dígitos (0-9) na string.
    // O modificador 'g' significa que a substituição é global, ou seja, para todas as ocorrências.
    // Cada dígito correspondente é substituído pelo caractere '#'.
    // O resultado da substituição é retornado como saída da função.
}
