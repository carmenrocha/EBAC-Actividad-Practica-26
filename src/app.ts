function esFechaValida(fecha: Date): boolean {
  return !isNaN(fecha.getTime());
}

function calcularEdad(fechaNacimiento: string): number {
  const nacimiento: Date = new Date(fechaNacimiento);

  if (!esFechaValida(nacimiento)) {
    throw new Error("Fecha inválida. Usa el formato YYYY-MM-DD.");
  }

  const hoy: Date = new Date();
  const yaCumplio: boolean =
    hoy.getMonth() > nacimiento.getMonth() ||
    (hoy.getMonth() === nacimiento.getMonth() &&
      hoy.getDate() >= nacimiento.getDate());

  return hoy.getFullYear() - nacimiento.getFullYear() - (yaCumplio ? 0 : 1);
}

console.log("Edad (1990-05-15):", calcularEdad("1990-05-15"));
console.log("Edad (2000-12-31):", calcularEdad("2000-12-31"));
console.log("Edad (2015-01-01):", calcularEdad("2015-01-01"));