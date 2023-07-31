import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let logado = false;
  if (logado) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
