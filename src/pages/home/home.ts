import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LivrePage } from '../livre/livre';
import { ModalController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  Ajouterlivre(){
  	console.log("Fonction Ajouter Livre")
  	let modal = this.modalCtrl.create(LivrePage);
	modal.present();
  }

}
