import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const URL_SERVER= new InjectionToken<String>('servidor');
export const URL = new InjectionToken<string>("url")

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideHttpClient(
      withFetch()
    ), 
    {provide:URL, useValue:"http://localhost:8080"}]
};

