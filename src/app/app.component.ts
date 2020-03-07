import { Component } from '@angular/core';

import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BuscadorPage } from './buscador/buscador.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public modalController: ModalController
  ) {
    this.initializeApp();
  }
  async abrirBuscador(){
    const modal = await this.modalController.create({
      component: BuscadorPage
    });
    return await modal.present();
  }
  initializeApp() {
    this.statusBar.backgroundColorByHexString('#29506D');
  }
}
