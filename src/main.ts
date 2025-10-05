// import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { importProvidersFrom } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { provideHttpClient } from "@angular/common/http";

import { App } from "./app/app";
import { routes } from "./app/app.routes";
import { bootstrapApplication } from "@angular/platform-browser";

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(FormsModule),
  ],
}).catch((err) => console.error(err));
