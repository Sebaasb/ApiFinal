import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class DocenteGuard {

  constructor(
    private authservice: AuthService,
    private toast: ToastController,
    private router: Router
  ) {}

  canActivate(): 
  | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authservice.GetUserrole() === 'docente') {
      return true;
    } else {
      this.showToast('Acceso no autorizado para docente');
      this.router.navigate(['/inicio']);
      return false;
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