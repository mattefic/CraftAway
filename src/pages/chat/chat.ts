import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Messaggio } from "../../model/messaggio";
import { ChatService } from "../../services/chat.service";
import { UtenteService } from "../../services/utente.service";
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  chat: Messaggio[];
  nomeAltroUtente: string;
  inputMessaggio: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public chatService: ChatService, public utenteService: UtenteService) {
    this.chat = chatService.getChat(navParams.get('idConversazione'), 0, 1);
    this.chat[0].mittente.nome == utenteService.getUtenteLoggato().nome ? this.nomeAltroUtente = this.chat[0].destinatario.nome : this.nomeAltroUtente = this.chat[0].mittente.nome;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  sendMessage(testoMessaggio){

  }

  loadMoreMessages(){

  }

}
