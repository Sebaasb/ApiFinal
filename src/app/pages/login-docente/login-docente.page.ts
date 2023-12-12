import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular'; //mensajes de alerta que dura unos segundos determinados
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AutorizadoGuard } from 'src/app/guards/autorizado.guard';

@Component({
  selector: 'app-login-docente',
  templateUrl: './login-docente.page.html',
  styleUrls: ['./login-docente.page.scss'],
})
export class LoginDocentePage implements OnInit {

  
  loginForm: FormGroup;

  userdata: any;

  usuario={
    id:0,
    email: "",
    nombre:"",
    password:"",
    role:"",
    isactive: true
  }

  constructor(private menuController: MenuController,
              private alertController: AlertController,
              private authservice: AuthService,
              private router: Router,
              private toastController: ToastController,
              private fbuilder: FormBuilder) {
                this.loginForm = this.fbuilder.group({
                  'email' : new FormControl("", [Validators.required, Validators.minLength(4)]),
                  'password' : new FormControl("", [Validators.required, Validators.minLength(8)])
               })


  }

  ngOnInit() {
  }

  // aqui se llama al metodo
  MostrarMenu(){
    this.menuController.open('first');

  }

  login() {
    if (this.loginForm.valid) {
      this.authservice.GetUserById(this.loginForm.value.email).subscribe(resp => {
        this.userdata = resp;
        console.log(this.userdata)
        if (this.userdata.length >0) 
        {
          this.usuario = {
            id: this.userdata[0].id,
            email: this.userdata[0].email,
            nombre: this.userdata[0].nombre,
            password: this.userdata[0].password,
            role: this.userdata[0].role,
            isactive: this.userdata[0].isactive
          }
          console.log(resp);
          console.log(this.usuario.password);
          if (this.usuario.password === this.loginForm.value.password) {
              sessionStorage.setItem('id', this.usuario.id.toString());
              sessionStorage.setItem('email', this.usuario.email);
              sessionStorage.setItem('nombre', this.usuario.nombre);
              sessionStorage.setItem('userrole', 'docente');
              sessionStorage.setItem('ingresado', 'true');
              this.showToast('Sesión Iniciada');
              this.router.navigateByUrl("/inicio-docente");

          }
          else {
            this.Error();
            console.log("error en credenciales");
            this.loginForm.reset();
          }
        }
        else{
         this.loginForm.reset();
          this.NoExiste();
          
        }
        })
        
    }
    /*else {
      if (this.loginForm.invalid) {
        this.ValidaForm();
      }
    }*/

  }

  cerrarSesion() {
    // Eliminar datos de usuario almacenados
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('userrole');
    sessionStorage.removeItem('ingresado');
  
    // Redirigir al usuario a la página de inicio de sesión
    this.router.navigateByUrl("/inicio");
  }

  async showToast(msg: any) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  async UserInactivo() {
    const alerta = await this.alertController.create({
      header: 'Usuario Inactivo',
      message: 'Debe contactarse con admin@admin.cl',
      buttons: ['Ok']
    })
    await alerta.present();
    return;
  }

  async Error() {
    const alerta = await this.alertController.create({
      header: 'Error..',
      message: 'Revise sus credenciales',
      buttons: ['Ok']
    })
    await alerta.present();
    return;
  }

  async NoExiste(){
    const alerta = await this.alertController.create({
      header: 'Error..',
      message: 'Usuario no existe, debe registrarse',
      buttons: ['Ok']
    })
    await alerta.present();
    return;
  }


}








