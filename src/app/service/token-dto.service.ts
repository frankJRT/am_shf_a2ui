import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SocialUser } from '@abacritt/angularx-social-login';

const TOKEN_KEY = 'AuthToken';
const email = 'email';
const name = 'name';
const photoUrl = 'photoUrl';

@Injectable({
  providedIn: 'root'
})
export class TokenDtoService {
  socialUser!: SocialUser;


  constructor(private router:Router) {     
  }

  public getToken(): string|null {
    return localStorage.getItem(TOKEN_KEY);
    //return sessionStorage.getItem(TOKEN_KEY);
  }

  public getEmail(): string|null {
    return localStorage.getItem(email);
    //return sessionStorage.getItem(TOKEN_KEY);
  }
  public getName(): string|null {
    return localStorage.getItem(name);
    //return sessionStorage.getItem(TOKEN_KEY);
  }
  public getPotho(): string|null {
    return localStorage.getItem(photoUrl);
    //return sessionStorage.getItem(TOKEN_KEY);
  }
  

  public setToken(token: string, mail: string, nam: string, poth:string): void {
    localStorage.clear();
    localStorage.setItem(TOKEN_KEY,token);
    localStorage.setItem(email,mail);
    localStorage.setItem(name,nam);
    localStorage.setItem(photoUrl,poth);
    
    //sessionStorage.removeItem(TOKEN_KEY);
    //sessionStorage.setItem(TOKEN_KEY,token);
  }

  public isLogged():boolean{
    if(this.getToken()){
      return true;
    }
    return false;
  }

  logOut(): void{
    localStorage.clear()
    this.router.navigate(['']);
    //sessionStorage.clear();
  }
}
