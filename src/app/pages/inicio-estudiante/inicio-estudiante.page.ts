import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-inicio-estudiante',
  templateUrl: './inicio-estudiante.page.html',
  styleUrls: ['./inicio-estudiante.page.scss'],
})

export class InicioEstudiantePage implements OnInit {

  email: string;

  usuario={
    email: sessionStorage.getItem('email'),
  }

  constructor(private menuController: MenuController,
              private router: Router,
              private authService: AuthService)
              { 
              const loggedInEmail = this.authService.GetLoggedInEmail();
              if (loggedInEmail !== null) {
                this.email = loggedInEmail;
              } 
              else {
              // Manejo del caso en que GetLoggedInUsername() devuelve null
              this.email = "Email no válido"; // Asignar un valor predeterminado
              console.error("Error: No se encontró el email ."); // Mostrar mensaje de error en la consola
              // También puedes mostrar un mensaje de error al usuario, por ejemplo, mediante un alert o un ToastController.
              }
              }

  ngOnInit() {
  }

  MostrarMenu(){
    this.menuController.open('first');

  }

  logout() {
    // Elimina la información de la sesión actual
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('userrole');
    sessionStorage.removeItem('ingresado');

    // Redirige al usuario a la página de inicio de sesión o a la página principal
    this.router.navigate(['/inicio']);  // Cambia '/login' a la ruta correcta si es diferente
  }

}
