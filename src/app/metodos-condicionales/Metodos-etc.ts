
export class MetodosCondicionales {

  public edad = 18;
  public num1 = 11;
  public num2 = 10;
  public temperatura=30;
  public dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo","No es un día de la semana"];


  constructor() {
  }

  public esMayorDeEdad(): string {
   if (this.edad >= 18) {
     return "Es mayor de edad";
   } else {
      return "Es menor de edad";
    }
  }


  public calcularNumeros(): string {
    if (this.num1 > this.num2) {
      return "El número 1 es mayor";
    } else if (this.num1 < this.num2) {
      return "El número 2 es mayor";
    } else {
      return "Los números son iguales";
    }
  }

  public calcularTemperatura(): string {
    if (this.temperatura < 10) {
      return "Hace frío";
    } else if (this.temperatura >= 10 && this.temperatura < 25) {
      return "Hace calor";
    } else {
      return "El clima es neutro";
    }
  }

  public calcularDias(): string {
    let dia = this.dias[0];
    switch (dia) {
      case "Lunes":
        return "Hoy es lunes";
      case "Martes":
        return "Hoy es martes";
      case "Miércoles":
        return "Hoy es miércoles";
      case "Jueves":
        return "Hoy es jueves";
      case "Viernes":
        return "Hoy es viernes";
      case "Sábado":
        return "Hoy es sábado";
      case "Domingo":
        return "Hoy es domingo";
      default:
        return "No es un día de la semana";
    }
  }




}
