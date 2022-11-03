import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../home/UserService/user-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formModel = {
    Email: '',
    Clave: ''
  }


  constructor(public service: UserServiceService, private router: Router) { 
    
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/homeInside');
  }

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
      },
      err => {
        if (err.status == 400)
          console.error('Incorrect username or password.', 'Authentication failed.');
        else
          console.log(err);
      }
    );
  
  }

}
