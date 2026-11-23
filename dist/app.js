"use strict";
function esFechaValida(fecha) {
    return !isNaN(fecha.getTime());
}
function calcularEdad(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    if (!esFechaValida(nacimiento)) {
        throw new Error("Fecha inválida. Usa el formato YYYY-MM-DD.");
    }
    const hoy = new Date();
    const yaCumplio = hoy.getMonth() > nacimiento.getMonth() ||
        (hoy.getMonth() === nacimiento.getMonth() &&
            hoy.getDate() >= nacimiento.getDate());
    return hoy.getFullYear() - nacimiento.getFullYear() - (yaCumplio ? 0 : 1);
}
console.log("Edad (1990-05-15):", calcularEdad("1990-05-15"));
console.log("Edad (2000-12-31):", calcularEdad("2000-12-31"));
console.log("Edad (2015-01-01):", calcularEdad("2015-01-01"));
