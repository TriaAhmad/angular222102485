<<<<<<< HEAD
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const otentikasiGuard: CanActivateFn = (route, state) => {
  console.log("Otentikasi dimulai");

  var userId = inject(CookieService).get("userId");
  console.log("userId: " + userId);

  if (userId == null) {
    // anggap belum login
  } else if (userId == "undefined") {
    // anggap belum login
  } else if (userId == ""){
    // anggap belum login
  } else{
    return true; // sudah login
  }

  inject(Router).navigate(["/login"]);
  return false;
=======
import { CanActivateFn } from '@angular/router';

export const otentikasiGuard: CanActivateFn = (route, state) => {
  return true;
>>>>>>> 09f935ca135a4775cd8d92a01b400b69fe3dca07
};
