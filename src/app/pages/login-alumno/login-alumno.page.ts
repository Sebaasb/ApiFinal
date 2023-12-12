import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.page.html',
  styleUrls: ['./login-alumno.page.scss'],
})
export class LoginAlumnoPage implements OnInit {

  loginForm: FormGroup;
  alumnoData: any;

  alumno = {
    id: 0,
    email: "",
    password: "",
    role: "alumno",
    isactive: true
  };

  constructor(private menuController: MenuController,
              private alertController: AlertController,
              private authservice: AuthService,
              private router: Router,
              private toastController: ToastController,
              private fbuilder: FormBuilder) {

    this.loginForm = this.fbuilder.group({
      'email': new FormControl("", [Validators.required, Validators.minLength(4)]),
      'password': new FormControl("", [Validators.required, Validators.minLength(8)])
    });
  }

  ngOnInit() {
  }

  MostrarMenu() {
    this.menuController.open('first');
  }

  login() {
    if (this.loginForm.valid) {
      this.authservice.GetAlumnoByEmail(this.loginForm.value.email).subscribe(resp => {
        this.alumnoData = resp;
        console.log(this.alumnoData);

        if (this.alumnoData.length > 0) {
          this.alumno = {
            id: this.alumnoData[0].id,
            email: this.alumnoData[0].email,
            password: this.alumnoData[0].password,
            role: this.alumnoData[0].role,
            isactive: this.alumnoData[0].isactive
          };

          console.log(resp);
          console.log(this.alumno.password);

          if (this.alumno.password === this.loginForm.value.password) {
            sessionStorage.setItem('id', this.alumno.id.toString());
            sessionStorage.setItem('email', this.alumno.email);
            sessionStorage.setItem('userrole', 'alumno');
            sessionStorage.setItem('ingresado', 'true');
            this.showToast('Sesión Iniciada');
            this.router.navigateByUrl("/inicio-estudiante");
          } else {
            this.Error();
            console.log("error en credenciales");
            this.loginForm.reset();
          }
        } else {
          this.loginForm.reset();
          this.NoExiste();
        }
      });
    }
  }

  cerrarSesion() {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('userrole');
    sessionStorage.removeItem('ingresado');
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
    });
    await alerta.present();
    return;
  }

  async Error() {
    const alerta = await this.alertController.create({
      header: 'Error..',
      message: 'Revise sus credenciales',
      buttons: ['Ok']
    });
    await alerta.present();
    return;
  }

  async NoExiste() {
    const alerta = await this.alertController.create({
      header: 'Error..',
      message: 'Usuario no existe, debe registrarse',
      buttons: ['Ok']
    });
    await alerta.present();
    return;
  }
}
