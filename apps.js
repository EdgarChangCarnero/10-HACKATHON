/* PREGUNTA 1 */
const preguntaUno = () => {
    let nombre = String(prompt('Ingrese su nombre, por ejemplo Edgar:'));
    let apellido = String(prompt('Ingrese su apellido, por ejemplo Chang:'));
    let edad = String(prompt('Ingrese su edad, por ejemplo 30:'));
    const contenedor = document.getElementById('uno');
    let RespuestaUno;
    (isNaN(nombre) || isNaN(apellido) || isNaN(edad))?
    RespuestaUno = `<h4>Es obligatorio ingresar nombre, apellido y su edad.</h4>`:
    RespuestaUno = `Hola mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;    
    contenedor.innerHTML = `<h4>${RespuestaUno}</h4>`;
}
preguntaUno();

/* PREGUNTA 2 */
const preguntaDos = () => {
    let numeros = Number(prompt('Ingrese la cantidad de números a Tomar, por ejemplo 3:'));
    const contenedorDos = document.getElementById('dos');
    let cantidaNumeros;
    let cubo = 0;
    if (isNaN(numeros)) {
        contenedorDos.innerHTML = `<h4>El número ingresado es incorrecto. Verifique que sea numérico.</h4>`;
    } else {
        for (let i = 0; i < numeros; i++) {
            cantidaNumeros = Number(prompt(`${i+1}. Ingrese un número, por ejemplo 10:`));
            cubo += Math.pow(cantidaNumeros, 3);
        }
        contenedorDos.innerHTML = `<h4>La suma de los números al cubo es ${cubo}</h4>`;
    };
};
preguntaDos();

/* PREGUNTA 3 */

const preguntaTres = (a,b) => {
    const contenedorTres = document.getElementById('tres');
    let suma = 0;
    suma = a + b;
    contenedorTres.innerHTML = `<h4>La funcion agregada es de dos valores a y b: preguntaTres (10,20); </h4>`;
}
preguntaTres (10,20);

/* PREGUNTA 4 */
const preguntaCuatro = () => {
    let numeros_ = Number(prompt('Ingrese una la cantidad de números, por ejemplo 3:'));
    const contenedorCuatro = document.getElementById('cuatro');
    let cantidaNumeros_;
    let suma = 0;
    if (isNaN(numeros_)) {
        contenedorCuatro.innerHTML = `<h4>El número ingresado es incorrecto. Verifique que sea numérico.</h4>`;
    } else {
        for (let j = 0; j < numeros_; j++) {
            cantidaNumeros_ = Number(prompt(`${j+1}. Ingrese un número, por ejemplo 10:`));
            suma += cantidaNumeros_;
        }
        contenedorCuatro.innerHTML = `<h4>La suma de los números es ${suma}</h4>`;
    };
};
preguntaCuatro();

/* PREGUNTA 5 */
const preguntaCinco = () =>{
    const contenedorCinco = document.getElementById('cinco');
    let stringNumber = ['Edgar', 'Diego', 'Camila', 'David', 'Esther', 10];
    let filter = stringNumber.filter(dato =>{
        if (typeof dato !='string'){  
            console.log(dato);  
            contenedorCinco.innerHTML = `<h4>${dato}</h4>`;         
        }    
    } );
    
}
preguntaCinco();

/* PREGUNTA 6 */
const preguntaSeis = () =>{
    const contenedorSeis = document.getElementById('seis');
    let minMax = [1,2,3,4,5]; 
    let min = Math.min(...minMax);
    let max = Math.max(...minMax);  
    contenedorSeis.innerHTML = `<h4>${min} - ${max}</h4>`;   
}
preguntaSeis();

/* PREGUNTA 7 */
let PreguntaSiete = () => {       
    
    let phone = [0,1,2,3,4,5,6,7,8,9];
    let limpia = ('' + phone).replace(/\D/g, '');
    let match = limpia.match(/^(\d{3})(\d{3})(\d{4})$/);    
    if (match) {
      return '{' + match[1] + '} ' + match[2] + '-' + match[3];      
    };       
    return null;    
  };
  const contenedorSiete = document.getElementById('siete'); 
  contenedorSiete.innerHTML = `<h4>${PreguntaSiete()}</h4>`;  
  PreguntaSiete();