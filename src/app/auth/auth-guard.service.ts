import {ActivatedRouteSnapshot, CanActivate, CanLoad, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Route} from '@angular/router/src/config';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.authService.isAuthenticated();
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated();
  }

}
