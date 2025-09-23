import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  const loggedIn = localStorage.getItem("loggedIn") === "true";
  if (!loggedIn) {
    router.navigate(["/login"]);
    return false;
  }
  return true;
};
