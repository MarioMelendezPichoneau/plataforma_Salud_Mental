import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../home/UserService/user-service.service';
import { user} from "../home/user";
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formModel = {
    email: '',
    clave: ''
  }

  


  constructor(private http: HttpClient, private router: Router) { 
    
  }


  ngOnInit(): void {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/homeInside');
  }

  // onSubmit(form: NgForm) {
  //   this.http.post("https://localhost:7133/api/Usuarios/login",form.value).subscribe(
  //     (res: any) => {
  //       localStorage.setItem('token', res.token);
  //       this.router.navigateByUrl('/home');
  //     },
  //     err => {
  //       if (err.status == 400)
  //         console.error('Incorrect username or password.', 'Authentication failed.');
  //       else
  //         console.log(err);
  //     }
  //   );
  
  // }



  login() {
    const user = {email: this.formModel.email, clave: this.formModel.clave};
    this.http.post("https://localhost:7133/api/Usuarios/login", user).subscribe( (res: any) => {
      localStorage.setItem('token', res.token);
      this.router.navigateByUrl("/Inicio_Inside");
    },
    err => {
      if (err.status == 400)
        console.error('Incorrect username or password.', 'Authentication failed.');
      else
        console.log(err);
    });
  }






  
}
