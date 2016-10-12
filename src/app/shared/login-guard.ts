import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from '../services';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private userService: UserService) {}

  canActivate() {
    console.log('called', this.userService.isLogged);
    const isLogged = this.userService.isLogged;
    if (!isLogged) {
      // alert('Accesso non autorizzato');
      console.log('Accesso non autorizzato');
    }
    return isLogged;
  }
}
