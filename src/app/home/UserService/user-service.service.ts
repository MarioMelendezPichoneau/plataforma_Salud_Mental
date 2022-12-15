import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { user} from "../user";

const cors = require('cors')

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  headers = new HttpHeaders();

  constructor(private http: HttpClient, private fb: FormBuilder) {

    this.headers.append("Content-type", "aplicaction/json");
    this.headers.getAll("Access-control-Allow-Origen: *");
    this.headers.getAll("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");  
    this.headers.getAll("Access-Control-Allow-Headers: Content-type, X-Auth-Token, Origin, Authorization");  

  }

  private BaseURI = 'https://localhost:7133/api/Usuarios/login';

  formModel = this.fb.group({
    Email: ['', Validators.email],
    Clave: ['', [Validators.required]],
      ConfirmarClave: ['', Validators.required],
    // Clave: this.fb.group({
      
    // }), /*{ validator: this.comparePasswords }),*/
    Usuario1: [''],
    Telefono: ['', Validators.required],
    Rol: [''],
    Status: [''],
  });

  



  login(formData: any): Observable<any> {
    return this.http.post<any>(this.BaseURI, formData);
  }

  login2(user: any) {
    return this.http.post(this.BaseURI, user);
  }


  // comparePasswords(fb: FormGroup) {
  //   let confirmPswrdCtrl = fb.get('ConfirmarClave');
  //   //passwordMismatch
  //   //confirmPswrdCtrl.errors={passwordMismatch:true}
  //   if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
  //     if (fb.get('Password').value != confirmPswrdCtrl.value)
  //       confirmPswrdCtrl.setErrors({ passwordMismatch: true });
  //     else
  //       confirmPswrdCtrl.setErrors(null);
  //   }
  // }
}

export interface Data{

  email: String;
  clave: String;
  confirmarClave: String;
  Usuario1: String;
  Telefono: String;
  Rol: String;
  Status: String;
}