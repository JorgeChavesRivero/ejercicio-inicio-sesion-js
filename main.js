function validarAcceso() {
    const USUARIOCORRECTO = `admin`;
    const CONTRASENACORRECTA = `admin123`;
    const INTENTOSMAXIMO = 3;
    let intentos = 0;

    while (intentos < INTENTOSMAXIMO) {
        let usuarioPedido = prompt(`Ingrese su usuario`).toLowerCase();
        let contrasenaPedida = prompt(`Ingrese su contraseña`);
        
        if (usuarioPedido === USUARIOCORRECTO && contrasenaPedida === CONTRASENACORRECTA) {
            console.log(`¡Bienvenido al sistema!`);
            intentos = INTENTOSMAXIMO;
        } else {
            intentos++;
            console.log(`Datos incorrectos. Intento ${intentos} de ${INTENTOSMAXIMO}.`);
            if (intentos===INTENTOSMAXIMO) {
                console.log(`Usuario bloqueado. Ha superado el número de intentos.`);
            }
        }
    }
}
validarAcceso();
