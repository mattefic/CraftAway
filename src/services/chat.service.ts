import { Conversazione } from "../model/conversazione";
import { Messaggio } from "../model/messaggio";
import { Utente } from "../model/utente";
import {Observable} from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { UtenteService } from "./utente.service";
@Injectable()
export class ChatService {
    conversazioni: Conversazione[];

    constructor(public utenteService: UtenteService) {
      let utenteLoggato = utenteService.getUtenteLoggato();
      let altroUtente1 = new Utente("AltroUtente1", "altroutente1@email.com", "nonImporta", new Date(2018-9-20), 1, 1, {});
      let altroUtente2 = new Utente("AltroUtente2", "altroutente2@email.com", "nonImporta", new Date(2018-9-20), 1, 1, {});

      let messaggio1 = new Messaggio("1", utenteLoggato, altroUtente1, new Date(2018, 9, 20, 10, 33), "Lorem ipsum dolores");
      let messaggio2 = new Messaggio("1", altroUtente1, utenteLoggato, new Date(2018, 9, 20, 10, 33), "Lorem ipsum dolores");

      let conversazione1 = new Conversazione("1", utenteLoggato, altroUtente1, [messaggio1, messaggio2]);

      messaggio1 = new Messaggio("2", utenteLoggato, altroUtente2, new Date(2018, 9, 20, 10, 33), "Lorem ipsum dolores");
      messaggio2 = new Messaggio("2", altroUtente2, utenteLoggato, new Date(2018, 9, 20, 10, 33), "Lorem ipsum dolores");

      let conversazione2 = new Conversazione("2", utenteLoggato, altroUtente2, [messaggio1, messaggio2]);

      this.conversazioni = [conversazione1, conversazione2];
    }

    getConversations(){
      return this.conversazioni;
    }

    getChat(idConversazione, base, offset){
      for(var i = 0; i < this.conversazioni.length; i++){
        if(this.conversazioni[i].id == idConversazione){
          return this.conversazioni[i].messaggi.slice(base, offset+1);
        }
      }
    }

    sendMessage(messaggio){
      return;
    }


}
