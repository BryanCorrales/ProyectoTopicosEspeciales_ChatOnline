import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../servicios/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string;
  password:string;
  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  verificacionLogin(){
    console.log("Entro a la funcion");
    this.authService.login(this.email, this.password).then(res =>{
      this.router.navigate(['/chat']);
    }).catch(err => alert('Los datos son incorrectos o el usuario no existe'));
  }
}
