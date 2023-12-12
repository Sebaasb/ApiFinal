import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  componentes: Componente[] = [];

  ngOnInit() {
    // Observa cambios en la ruta para actualizar los componentes
    this.router.events.subscribe(() => {
      this.actualizarComponentes();
    });

    // Inicializa los componentes al cargar la página
    this.actualizarComponentes();
  }

  private actualizarComponentes() {
    const url = this.router.url;
  
    // Lógica para determinar qué componentes mostrar según la ruta
    if (url.includes('/perfil-docente') || url.includes('/inicio-docente')|| url.includes('/qr-generar') || url.includes('/listar-qr')) {
      this.componentes = this.componentesDocente;
    } else if (url.includes('/perfil-estudiante') || url.includes('/inicio-estudiante')|| url.includes('/escanear-qr')) {
      // Verificar primero las rutas exclusivas de estudiante
      this.componentes = this.componentesAlumno;
    } else if (url.includes('/feriados-alumnos')) {
      // Manejar la ruta específica de feriados de estudiantes
      this.componentes = this.componentesAlumno;
    } else if (url.includes('/feriados')) {
      // Manejar la ruta específica de feriados de docentes
      this.componentes = this.componentesDocente;
    } else {
      // En el caso general
      this.componentes = this.componentesGenerales;
    }
  }
    componentesGenerales: Componente[] = [
    {
      name: 'Inicio',
      redirecTo: '/inicio',
      icon: 'home'
    },
    {
      name: 'Login docente',
      redirecTo: '/login-docente',
      icon: 'log-in'
    },
    {
      name: 'Login alumno',
      redirecTo: '/login-alumno',
      icon: 'log-in'
    },
    {
      name: 'Registro',
      redirecTo: '/registro-general',
      icon: 'person-add'
    },
    {
      name: 'Informacion',
      redirecTo: '/informacion',
      icon: 'reader'
    },

  ]

//COMPONENTES ALUMNO
  componentesAlumno : Componente[] = [
    {
      name: 'Inicio ',
      redirecTo: '/inicio-estudiante',
      icon: 'home'
    },
    {
      name: 'Perfil ',
      get redirecTo() {
        return AppComponent.prototype.generarRutaPerfil2();
      },
      icon: 'person'
    },
     {
       name: 'Feriados',
       redirecTo: '/feriados-alumnos',
       icon: 'calendar-number'
     },
     {
      name: 'Escanear Qr',
      redirecTo: '/escanear-qr',
      icon: 'qr-code'
    },
    {
      name: 'Cerrar Sesión',
      redirecTo: '/inicio-estudiante',
      icon: 'log-out'
    },
  ]
//COMPONENTES DOCENTE

  componentesDocente : Componente[] = [
    {
      name: 'Inicio ',
      redirecTo: '/inicio-docente',
      icon: 'home'
    },
    {
      name: 'Perfil ',
      get redirecTo() {
        return AppComponent.prototype.generarRutaPerfil();
      },
      icon: 'person'
    },
     {
       name: 'Feriados',
       redirecTo: '/feriados',
       icon: 'calendar-number'
     },
     {
      name: 'Generar Qr',
      redirecTo: '/qr-generar', 
      icon: 'qr-code'
    },
    {
      name: 'Cerrar Sesión',
      redirecTo: '/inicio-docente',
      icon: 'log-out'
    },


  ]

  private generarRutaPerfil(): string {
    const userId = sessionStorage.getItem('id');
    return userId ? `/perfil-docente/${userId}` : '/perfil-docente';
  }

  private generarRutaPerfil2(): string {
    const userId = sessionStorage.getItem('id');
    return userId ? `/perfil-estudiante/${userId}` : '/perfil-estudiante';
  }
 
}
