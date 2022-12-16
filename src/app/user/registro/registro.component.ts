import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formModel = {
    email: '',
    clave: '',
    usuario1: '',
    telefono: '',
    rol: '1',
    status: 'A'
  }


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  registro() {
    const user = {
      email: this.formModel.email, 
      clave: this.formModel.clave, 
      usuario: this.formModel.usuario1, 
      telefono: this.formModel.telefono,
      rol: this.formModel.rol,
      status: this.formModel.status
    };
    this.http.post("https://localhost:7133/api/Usuarios/Registro", user).subscribe( (res: any) => {
      localStorage.setItem('token', res.token);
      alert("Usuario Registrado");
      this.router.navigateByUrl("/Inicio_Inside");
    },
    err => {
      if (err.status == 400)
        console.error(err);
      else
        console.log(err);
    });
  }


}
