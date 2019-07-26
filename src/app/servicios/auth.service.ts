import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import{AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private usuid:string;

  constructor(private AFauth: AngularFireAuth, private router : Router, private db :AngularFirestore) { }

  login(usuario:string, password:string){
    return new Promise((resolve, rejected)=>{
      this.AFauth.auth.signInWithEmailAndPassword(usuario, password).then( user=>{
        resolve(user)
      }).catch(err=> rejected(err));
    })
    
  }
  obtenernombreUsuario(uid: string){
    return this.db.collection('users').doc(uid).snapshotChanges();
  }


  logout(){
    this.AFauth.auth.signOut().then(auth=>{
      this.router.navigate(['/home']);
    })
  }
  registrarChat(nombre:string, detalle: string, img:string){
    
    this.db.collection('chats').add({
        nombre: nombre,
        descripcion: detalle,
        img:img
    })
  }

  registrarUsu(nombre:string, email: string, pass: string){
    return new Promise((resolve, reject)=>{
      this.AFauth.auth.createUserWithEmailAndPassword(email,pass).then(res=>{
        //console.log(res.user.uid);
        const uid= res.user.uid;
        this.db.collection('users').doc(res.user.uid).set({
          nombre: nombre,
          uid: uid,
        })
        resolve(res);
      }).catch(err=>reject(err));
    })
    
  }

}
