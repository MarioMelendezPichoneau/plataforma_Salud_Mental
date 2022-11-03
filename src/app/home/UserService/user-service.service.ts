import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  constructor(private http: HttpClient, private fb: FormBuilder) {}

  private BaseURI = 'https://localhost:7133/api';
  private Base1 = '/Usuarios/login';
  private Base2 = 'http://localhost:54277/api';

  formModel = this.fb.group({
    Email: ['', Validators.email],
    Clave: this.fb.group({
      Clave: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmarClave: ['', Validators.required]
    }), /*{ validator: this.comparePasswords }),*/
    Usuario1: [''],
    Telefono: ['', Validators.required],
    Rol: [''],
    Status: [''],
  });

  login(formData: any) {
    return this.http.post(this.BaseURI + '/Usuarios/login', formData);
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

  Email: String;
  Clave: String;
  ConfirmarClave: String;
  Usuario1: String;
  Telefono: String;
  Rol: String;
  Status: String;
}