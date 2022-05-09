import Countdown from "./countdown.js";

const tempoParaNatal = new Countdown("24 December 2022 23:59:59 GMT-0300");
const tempoParaAnoNovo = new Countdown("31 December 2022 23:59:59 GMT-0300");
const tempoParaAniversario = new Countdown("13 July 2022 23:59:59 GMT-0300");


console.log(tempoParaNatal.total);
console.log(tempoParaAnoNovo.total);
console.log(tempoParaAniversario.total);
