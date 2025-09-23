import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { importProvidersFrom } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { App } from "./app/app";
import { routes } from "./app/app.routes";

bootstrapApplication(App, {
  providers: [provideRouter(routes), importProvidersFrom(FormsModule)],
}).catch((err) => console.error(err));
