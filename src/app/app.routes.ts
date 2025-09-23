import { Routes } from "@angular/router";
import { Login } from "./_pages/login/login";
import { Todo } from "./_pages/todo/todo";
import { authGuard } from "./auth.guard";

export const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: Login },
  { path: "todo", component: Todo, canActivate: [authGuard] },
];
