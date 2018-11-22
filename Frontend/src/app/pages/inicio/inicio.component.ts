import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'inicio',
    templateUrl: './inicio.component.html'
}) export class InicioComponent {

    public currentUserName: String;

    constructor(private authService: AuthService,
            private router: Router) {
        this.currentUserName = this.authService.getCurrentUser().nombre;
    }


}