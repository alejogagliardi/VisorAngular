import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModuleShared } from './app.shared.module';
import { AppComponent } from './components/app/app.component';
import { HttpModule, XHRBackend } from '@angular/http';
import { AuthenticateXHRBackend } from './providers/authenticate-xhr-backend';
import { ConfigService } from './utils/config.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './auth.guard';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        BrowserModule,
        AppModuleShared
    ],
    providers: [
        ConfigService,
        UserService,
        AuthGuard,
        { provide: XHRBackend, useClass: AuthenticateXHRBackend },
        { provide: 'BASE_URL', useFactory: getBaseUrl }
    ]
})
export class AppModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
