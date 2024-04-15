import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Ensure correct path to AppModule
import { enableProdMode } from '@angular/core';

enableProdMode(); // Call enableProdMode before bootstrap
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// import { AppModule } from './app/app.module';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
