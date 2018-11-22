export class Inserzione {
  immagini: string[];
  titolo: string;
  dataPubblicazione: Date; //la classe built-in per le date di Typescript pare essere "Date"
  paese: Paese;
  id: string ; //(eventualmente codificato con qualcosa tipo base64)
  descrizione: string;
  categoria: Categoria;
  materiali: Materiale[];
  inserzionista: Utente;

  constructor(
    immagini: string[], titolo: string, dataPubblicazione: Date, paese: Paese, id: string,
    descrizione: string, categoria: Categoria, materiali: Materiale[], inserzionista: Utente) {
      this.immagini = immagini;
      this.titolo = titolo;
      this.dataPubblicazione = dataPubblicazione;
      this.paese = paese;
      this.id = id;
      this.descrizione = descrizione;
      this.categoria = categoria;
      this.materiali = materiali;
      this.inserzionista = inserzionista;
  }



}
