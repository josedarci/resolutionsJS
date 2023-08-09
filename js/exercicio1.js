function solution(time) {
    // Divida a string de tempo fornecida em horas e minutos
    const [horas, minutos] = time.split(":");
    
    // Converta horas e minutos para números
    const horasNum = parseInt(horas);
    const minutosNum = parseInt(minutos);
    
    // Verifique se horas e minutos estão dentro da faixa válida
    if (horasNum >= 0 && horasNum < 24 && minutosNum >= 0 && minutosNum < 60) {
        return true; // A representação de tempo está correta
    } else {
        return false; // A representação de tempo está incorreta
    }
}

// Casos de teste
console.log(solution("13:58")); // Deve imprimir true
console.log(solution("25:51")); // Deve imprimir false
console.log(solution("02:76")); // Deve imprimir false
