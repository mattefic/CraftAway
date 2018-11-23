import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MessaggiPage } from "../pages/messaggi/messaggi";

import { ChatService } from '../services/chat.service'
import { UtenteService } from '../services/utente.service'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MessaggiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MessaggiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ChatService,
    UtenteService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
