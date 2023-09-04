// Definindo a função "solution" que converte letras de músicas do formato LRC para o formato SubRip
function solution(lrcLyrics, songLength) {
    // Definindo a função interna "timeConvert" para converter o tempo do formato LRC para o formato SubRip
    function timeConvert(time) {
        // Dividindo o tempo em minutos, segundos e centésimos
        const [mm, ss, xx] = time.split(/:|\./).map(Number);
        // Convertendo minutos para horas e formatando os valores para dois dígitos
        const hh = Math.floor(mm / 60);
        const formattedHh = String(hh).padStart(2, '0');
        const formattedMm = String(mm % 60).padStart(2, '0');
        const formattedSs = String(ss).padStart(2, '0');
        const formattedXx = String(xx * 10).padStart(3, '0');
        // Combinando os valores formatados para criar o tempo no formato SubRip
        return ${formattedHh}:${formattedMm}:${formattedSs},${formattedXx};
    }

    // Inicializando um array vazio para armazenar as legendas no formato SubRip
    const ans = [];
    // Iterando sobre cada linha das letras de música no formato LRC
    for (let k = 0; k < lrcLyrics.length; k++) {
        // Obtendo a linha atual
        const line = lrcLyrics[k];
        // Convertendo o tempo da linha para o formato SubRip
        const t = timeConvert(line.substring(1, 9));
        // Verificando se já existem legendas anteriores
        if (ans.length > 0) {
            // Atualizando o tempo da última legenda anterior para indicar o momento de término
            ans[ans.length - 3] +=  --> ${t};
        }
        // Adicionando o número da legenda, o tempo e o texto da linha às legendas no formato SubRip
        ans.push((k + 1).toString(), t, line.substring(11), '');
    }

    // Verificando se existem legendas e atualizando o tempo da última legenda para indicar o término da música
    if (ans.length > 0) {
        ans[ans.length - 3] +=  --> ${songLength},000;
    }

    // Retornando as legendas no formato SubRip, excluindo a última linha vazia
    return ans.slice(0, ans.length - 1);
}

// Caso de teste
const lrcLyrics = [
    "[00:12.00] Happy birthday dear coder,",
    "[00:17.20] Happy birthday to you!"
];
const songLength = "00:00:20";
const subRipLyrics = solution(lrcLyrics, songLength);
console.log(subRipLyrics);
