import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import '../node_modules/materialize-css/dist/js/materialize.js'

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
