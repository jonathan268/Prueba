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
    
  ];

  get personasEnLista(){
    return this.personas.length;
  }
}
