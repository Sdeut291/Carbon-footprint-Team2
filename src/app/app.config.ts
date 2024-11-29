import { DsImprintModule } from '@bmw-ds/components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      DsImprintModule.forRoot({
        phone: '0784105841',
        electronicContact: 'Siyabonga.Ngobeni@bmwithub.co.za',
      }),
      BrowserAnimationsModule
    ),
    provideRouter(routes),
    provideHttpClient()
  ],
};
