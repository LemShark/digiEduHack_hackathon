import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';

bootstrapApplication(AppComponent, {
	providers: [
		provideAnimations(),
		provideRouter(APP_ROUTES),
		provideHttpClient()
	]
}).catch((err: unknown) => console.error(err));

