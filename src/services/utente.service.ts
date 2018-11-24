import { Injectable } from '@angular/core';

import { Utente } from "../model/utente";

@Injectable()
export class UtenteService {
    utenteLoggato: Utente;

    constructor() {
      this.utenteLoggato = new Utente("UtenteLoggato", "utenteloggato@email.com", "nonImporta", new Date(2018-9-20), 1, 1, {})
    }

    login(email, password){

    }

    signup(utente){

    }

    logout(){

    }

    deleteAccount(){

    }

    changeLanguage(lingua){

    }

    modifyProfile(utente){

    }

    getUtenteLoggato(){
      return this.utenteLoggato;
    }


}
