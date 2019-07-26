import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public nombre: string;
  public email: string;
  public pass: string;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  ingresarUsuario(){
    console.log("Entro a ingresar usuario");
    this.auth.registrarUsu(this.nombre,this.email, this.pass).then(auth=>{
      this.router.navigate(['/chat']);
      console.log(auth);
    }).catch(err =>console.log(err))
  }

}
