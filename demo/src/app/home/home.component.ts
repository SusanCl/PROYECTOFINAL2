import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa el enrutador

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: string = ''; // Debes establecer el nombre de usuario
  needsLogin: boolean = false;
  isUserLoggedIn: boolean = false;

  constructor(private router: Router) {} // Inyecta el enrutador en el constructor

  ngOnInit() {
    // La lógica para verificar el estado de inicio de sesión va aquí
    // Puedes usar this.isUserLoggedIn para reflejar el estado actual
  }

  login(susan: string, susand12: string): void {
    // Lógica de autenticación
    if (susan  === 'susan' && susand12 === 'susand12') {
      this.isUserLoggedIn = true;
      this.userName = 'correcto';

      // Redirige al usuario a la página de "Vuelos"
      this.router.navigate(['/flights']); // Asegúrate de que la ruta '/flights' coincida con la ruta real de tu página de "Vuelos" en las rutas de enrutamiento.
    }
  }

}
