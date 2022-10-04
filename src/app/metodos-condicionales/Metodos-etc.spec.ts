import { MetodosCondicionales } from "./Metodos-etc";

describe("Pruebas de metodos condicionales", () => {
  let metodos: MetodosCondicionales;
  beforeEach(() => {
    metodos = new MetodosCondicionales();
  });
  it("Debería retornar 'Es mayor de edad'", () => {
    expect(metodos.esMayorDeEdad()).toBe("Es mayor de edad");
  });

  it("Debería retornar 'Menor de edad'", () => {
    metodos.edad = 17;
    expect(metodos.esMayorDeEdad()).toBe("Es menor de edad");
  });


  it("Debería retornar 'El número 1 es mayor'", () => {
    expect(metodos.calcularNumeros()).toBe("El número 1 es mayor");
  });

  it("Debería retornar 'El número 2 es mayor'", () => {
    metodos.num2 = 19;
    expect(metodos.calcularNumeros()).toBe("El número 2 es mayor");
  });

    it("Debería retornar 'Los números son iguales'", () => {
    metodos.num1 = 10;
    metodos.num2 = 10;
    expect(metodos.calcularNumeros()).toBe("Los números son iguales");
  });

    it("Debería retornar 'Hace frío'", () => {
    metodos.temperatura = 5;
    expect(metodos.calcularTemperatura()).toBe("Hace frío");
  });

    it("Debería retornar 'Hace calor'", () => {
    metodos.temperatura = 15;
    expect(metodos.calcularTemperatura()).toBe("Hace calor");
  });

    it("Debería retornar 'El clima es neutro'", () => {
    metodos.temperatura = 30;
    expect(metodos.calcularTemperatura()).toBe("El clima es neutro");
  });

    it("Debería retornar 'Hoy es lunes'", () => {
    expect(metodos.calcularDias()).toBe("Hoy es lunes");
  });

    it("Debería retornar 'Hoy es martes'", () => {
    metodos.dias[0] = "Martes";
    expect(metodos.calcularDias()).toBe("Hoy es martes");
  });

    it("Debería retornar 'Hoy es miércoles'", () => {
    metodos.dias[0] = "Miércoles";
    expect(metodos.calcularDias()).toBe("Hoy es miércoles");
  });

    it("Debería retornar 'Hoy es jueves'", () => {
    metodos.dias[0] = "Jueves";
    expect(metodos.calcularDias()).toBe("Hoy es jueves");
  });

    it("Debería retornar 'Hoy es viernes'", () => {
    metodos.dias[0] = "Viernes";
    expect(metodos.calcularDias()).toBe("Hoy es viernes");
  });

    it("Debería retornar 'Hoy es sábado'", () => {
    metodos.dias[0] = "Sábado";
    expect(metodos.calcularDias()).toBe("Hoy es sábado");
  });

    it("Debería retornar 'Hoy es domingo'", () => {
    metodos.dias[0] = "Domingo";
    expect(metodos.calcularDias()).toBe("Hoy es domingo");
  });

  it("No es un día de la semana", () => {
    metodos.dias[0] = "No es un día de la semana";
    expect(metodos.calcularDias()).toBe("No es un día de la semana");
  });

  
});