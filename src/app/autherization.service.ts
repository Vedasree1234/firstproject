import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, } from '@angular/router';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutherizationService{
  url = "http://localhost:3000"
  constructor(private http: HttpClient,private route:Router) {
  }
  registerUser(userdetails: User) {
    return this.http.post(`${this.url}/Users`,userdetails);
  }
  getUserByEmail(email:string)
  {
    return this.http.get(`${this.url}/Users?emailid=${email}`)
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
   if(sessionStorage.getItem('emailid'))
   {
    return true;
   }
   else{
    this.route.navigate(['/login'])
   }
  }

}
