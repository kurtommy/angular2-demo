import { Injectable } from '@angular/core';
import { User } from '../shared';
import { Headers, Http, Response } from '@angular/http';

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

  login({username, password}: {username: string, password: string}) {
    // const {username, password} = credentials;
    this.isLogged = true;
    const url = `/assets/mock/user.json?username=${username}&password=${password}`;
    return this.http
      .get(url, {headers: this.headers})
      .catch((err, obs) => {
        console.error('Api error management');
        return [];
      })
      .subscribe((user: Response) => {
        this.user = user.json();
        console.log(this.user);
      });
  }

  logout() {
    this.isLogged = false;
    this.initUser();
  }
}
