import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  nombre: String = null;
  apellido: String = null;
  email: String = null;
  direccion: String = null;

  personas = [];
  
  guardarDatos() {
    this.personas.push({
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      direccion: this.direccion
    });
  }

  get personasEnLista() {
    return this.personas.length;
  }
}
