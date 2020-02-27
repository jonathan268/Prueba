import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  persona = {
    nombre: String = null,
    apellido: String = null,
    email: String = null,
    direccion: String = null
  };

  personas = [
    {
      nombre: "juan",
      apellido: "zapata",
      email: "juanZapara@gmail.com",
      direccion: "cra 2 39-45"
    },
    {
      nombre: "sarah",
      apellido: "gomez",
      email: "sarah@gmail.com",
      direccion: "cra 8 #3-57"
    }
  ];

  get personasEnLista(){
    return this.personas.length;
  }
}
