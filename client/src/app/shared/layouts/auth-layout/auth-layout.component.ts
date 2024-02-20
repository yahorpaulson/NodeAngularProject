import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports:[RouterOutlet, RouterModule],
  templateUrl: './auth-layout.component.html'
})
export class AuthLayoutComponent {

}
