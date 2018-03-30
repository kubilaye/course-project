import {Component} from '@angular/core';
import {HttpEvent, HttpEventType} from '@angular/common/http';

import {DataStorageService} from '../../shared/data-storage.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  authService: AuthService;

  constructor(private dataStorageService: DataStorageService, private _authService: AuthService) {
    this.authService = _authService;
  }

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (response: HttpEvent<Object>) => {
        console.log(response);
      },
      (error: Response) => {
        console.log(error);
      }
    );
  }

  onGetData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this._authService.logout();
  }

}
