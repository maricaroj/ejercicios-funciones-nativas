                                            // EJERCICIO 1
// const tienenMismaLongitud = (a, b) => a.length === b.length;

// console.log(tienenMismaLongitud('javascript', 'java')); // false
// console.log(tienenMismaLongitud('manzana', 'cerveza')); // true

                                            // EJERCICIO 2
// const ultimoCaracter = (palabra, caracter) => palabra.endsWith(caracter);

// console.log(ultimoCaracter('lovelace', 'e'));
// console.log(ultimoCaracter('lovelace', 'f'));

                                            // EJERCICIO 3
// const esValida = (password) => password.length >= 8;

// console.log(esValida('contraseniaMuySegura'));
// console.log(esValida('abc123'));

                                            // EJERCICIO 4
// const sonIguales = (a,b) => a.toUpperCase() === b.toUpperCase();

// console.log(sonIguales('javascript', 'JavaScript'));
// console.log(sonIguales('AdA LoVeLaCe', 'Ada Lovelace'));
// console.log(sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO'));

                                            // EJERCICIO 5
// const contarPalabras = (string) => string.match(/\S+/g).length;

// console.log(contarPalabras('javascript')); // 1
// console.log(contarPalabras('ada lovelace')); // 2
// console.log(contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos')); // 14

                                            // EJERCICIO 6
// const burlarse = (string) => string.replace(/[aeiou]/g, 'i');

// console.log(burlarse('programar es dificil'));
// console.log(burlarse('no me gusta el aguacate'));

                                            // EJERCICIO 7 
// const esFraccionMayorAUno = (fraccion) => {
//     const separar = fraccion.split('/');
//     const dividir = separar[0] / separar[1];
//     return dividir > 1;
// };

// console.log(esFraccionMayorAUno('1/2')); // false
// console.log(esFraccionMayorAUno('2/2')); // false
// console.log(esFraccionMayorAUno('4/2')); // true

                                            // EJERCICIO 8
// const capitalizar = (string) => {
//     const first = string.charAt(0);
//     return first.toUpperCase() + string.slice(1);
// };
// console.log(capitalizar('lovelace'));
// console.log(capitalizar('había una vez'));

                                            // EJERCICIO 9
// const aHackerSpeak = (string) => {
//     const change = {'i':'1', 'I':'1', 'e':'3', 'E':'3', 'a':'4', 'A':'4', 's':'5', 'S':'5', 'o':'0', 'O':'0',};
//     const newString = string.replace(/[iIeEaAsSoO]/g, m => change[m]);
//     return newString
// };

// console.log(aHackerSpeak('soy una hacker')); // '50y un4 h4ck3r'
// console.log(aHackerSpeak('ADA LOVELACE')); // '4D4 L0V3L4C3'
// console.log(aHackerSpeak('MARIANA CAROLINA')); // 'M4R14N4 C4R0L1N4'


                                            // EJERCICIO 10
// const obtenerPrimeraOracion = (string) => {
//   const divide = string.split('.');
//   return divide[0];
// };
// console.log(obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración'));
// console.log(obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.'));


                                            // EJERCICIO 11
// const ocultarPassword = (password) => password.toString().replace(/[0-9]/g, '*');

// console.log(ocultarPassword(123456));
// console.log(ocultarPassword(111222333));

                                            // EJERCICIO 12
// const espaciarCaracteres = (string) => string.match(/\w/g).join(' ');
// console.log(espaciarCaracteres('javascript')); // 'j a v a s c r i p t'
// console.log(espaciarCaracteres('ada lovelace')); // 'a d a l o v e l a c e'

                                            // EJERCICIO 13
// const removerVocales = (string) => string.replace(/[aeiou]/gi, '');
// console.log(removerVocales('javasript'));
// console.log(removerVocales('ada lovelace'));

                                            // EJERCICIO 14
// const obtenerExtension = (archivo) => {
//   const divide = archivo.split('.');
//   return divide[1];
// };
// console.log(obtenerExtension('imagen.png')); // 'png'
// console.log(obtenerExtension('index.html')); // 'html'
// console.log(obtenerExtension('notas.txt')); // 'txt'

                                            // EJERCICIO 15
// const esPuenteSeguro = (puente) => {
//   if(puente.includes(' ')){
//     return false;
//   }
//   else {
//     return true;
//   }
// };
// console.log(esPuenteSeguro('### ##')); //false
// console.log(esPuenteSeguro('##### ####')); //false
// console.log(esPuenteSeguro('########')); //true

                                            // EJERCICIO 16
// const obtenerSubreddit = (url) => {
//     const urlSlice = url.slice(0, url.length-1);
//     return urlSlice.slice(urlSlice.lastIndexOf('/')+1);
// };


// console.log(obtenerSubreddit('https://www.reddit.com/r/javascript/')); // 'javascript' 
// console.log(obtenerSubreddit('https://www.reddit.com/r/aww/')); // 'aww' 

                                            // EJERCICIO 17
// const convertirEnAcronimo = (string) =>  string.split('').join('.').toUpperCase()+'.';

// console.log(convertirEnAcronimo('afip')); // 'A.F.I.P.'
// console.log(convertirEnAcronimo('nasa')); // 'N.A.S.A.'

                                            // EJERCICIO 18
// const isNewYear = (fecha) => fecha.match(/\d+\W\d+/) == '01/01';

// console.log(isNewYear('03/05/2015')); // false
// console.log(isNewYear('22/01/1987')); // false
// console.log(isNewYear('01/01/2020')); // true

                                            // EJERCICIO 19
// const aprueba = (nota) => Math.round(nota) >= 6; 
// console.log(aprueba(1)); // false
// console.log(aprueba(5.4)); // false
// console.log(aprueba(5.5)); // true
// console.log(aprueba(5.6)); // true
// console.log(aprueba(8)); // true

                                            // EJERCICIO 20
// const obtenerDuracionEnSegundos = (duracion) => {
//     const min = duracion.split(':');
//     const seconds = (+min[0] * 60) + (+min[1]);
//     return seconds;
// };
// console.log(obtenerDuracionEnSegundos('00:33')); // 33
// console.log(obtenerDuracionEnSegundos('01:05')); // 65
// console.log(obtenerDuracionEnSegundos('10:42')); // 642