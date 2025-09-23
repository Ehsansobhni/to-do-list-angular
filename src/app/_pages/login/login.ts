import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./login.html",
  styleUrls: ["./login.css"],
})
export class Login {
  username: string = "";
  password: string = "";

  constructor(private router: Router) {}

  login() {
    if (this.username === "admin" && this.password === "1234") {
      localStorage.setItem("loggedIn", "true");
      this.router.navigate(["/todo"]);
    } else {
      alert("Invalid credentials!");
    }
  }
}
