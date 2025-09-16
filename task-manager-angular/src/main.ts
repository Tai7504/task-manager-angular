import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    // Các providers toàn cục ở đây
  ]
})
.catch(err => console.error(err));
