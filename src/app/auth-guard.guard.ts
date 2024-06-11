import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const _router=inject(Router)

  let isLoggedIn=sessionStorage.getItem("isLoggedIn");

  if(isLoggedIn=='false'){
    _router.navigate(['login']);
    alert("Please login, for accesing the information !!");
  return false;
  }
return true;
};
