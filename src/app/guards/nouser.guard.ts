import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class NouserGuard {

  constructor(
    private authservice: AuthService,
    private toast: ToastController,
    private router: Router
  ) {}

  canActivate(): 
    | Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> 
    | boolean 
    | UrlTree 
  {
    if (this.authservice.GetUserrole() === 'docente') {
      this.showToast('Ya has iniciado sesión como docente.');
      this.router.navigate(['/inicio-docente']); 
      return false;
    } else if (this.authservice.GetUserrole() === 'alumno') { 
      this.showToast('Ya has iniciado sesión como alumno.');
      this.router.navigate(['/inicio-estudiante']); 
      return false;
    } else {
      return true; 
    }
  }

  async showToast(msg: any) {
    const toast = await this.toast.create({
      message: msg,
      duration: 3000,
    });
    toast.present();
  }
}