import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
    let router = inject(Router);
    let loggedIn = true;
    if (loggedIn) {
        return true;
    } else {
        router.navigate(['/auth/login']);
        return false;
    }
};
