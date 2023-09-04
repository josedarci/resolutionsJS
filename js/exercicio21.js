function solution(currMonth) {
    // Divide o currMonth em mês e ano, e converte ambos para números
    const [month, year] = currMonth.split('-').map(Number);
    
    // Cria uma nova data com o primeiro dia do mês fornecido
    let date = new Date(year, month - 1, 1);
    
    // Avança para o próximo mês regular (segunda-feira)
    do {
        date.setMonth(date.getMonth() + 1);
    } while (date.getDay() !== 1); // Domingo é 0, então segunda-feira é 1
    
    // Obtém o próximo mês e ano formatados
    const nextMonth = (date.getMonth() + 1).toString().padStart(2, '0');
    const nextYear = date.getFullYear();
    
    // Retorna o próximo mês e ano no formato "MM-AAAA"
    return ${nextMonth}-${nextYear};
}

const currMonth = "02-2016";
console.log(solution(currMonth)); // Deve imprimir "08-2016"
