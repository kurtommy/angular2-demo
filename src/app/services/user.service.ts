import { Injectable } from '@angular/core';
import { User } from '../shared';
import { Headers, Http } from '@angular/http';

@Injectable()
export class UserService {
  user: User;
  isLogged: boolean = false;

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
    this.initUser();
  }

  initUser() {
    this.user = new User();
  }

  login(credentials: {username: string, password: string}) {
    this.user.username = credentials.username;
    this.isLogged = true;
    // const url = `www.lol.it`;
    // return this.http
    //   .post(url, JSON.stringify(this.quoteForms), {headers: this.headers})
    //   .toPromise()
    //   .then()
    //   .catch(() => {
    //     console.error('Api error management');
    //   });
  }

  logout() {
    this.isLogged = false;
    this.initUser();
  }
}
