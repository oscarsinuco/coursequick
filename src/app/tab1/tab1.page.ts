import { Component } from '@angular/core';
import { ActionSheetController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public actionSheetController: ActionSheetController, public toastController: ToastController) {}
  async presentToast(msg:any) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  async presentActionSheet(nombreCurso: any) {
    const actionSheet = await this.actionSheetController.create({
      mode: "ios",
      cssClass: 'action-sheets-groups-page',
      header: nombreCurso,
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => this.presentToast('Curso eliminado de tus favoritos')
      }, {
        text: 'Compartir',
        icon: 'share',
        cssClass: 'EditionIcon',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Agregar a favoritos',
        icon: 'heart',
        cssClass: 'EditionIcon',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
