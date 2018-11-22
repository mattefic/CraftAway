export class Conversazione{
  id: string;
  utente1: Utente;
  utente2: Utente;
  messaggi: Messaggio[];

  constructor(id: string, utente1: Utente, utente2: Utente, messaggi: Messaggio[]){
    this.id = id;
    this.utente1 = utente1;
    this.utente2 = utente2;
    this.messaggi = messaggi;
  }
}
