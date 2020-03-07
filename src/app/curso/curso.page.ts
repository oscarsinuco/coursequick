import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { CursoService } from '../curso.service';
import { Subscription } from 'rxjs-compat/Subscription';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage implements OnInit {
  private videos = [];
  clientesSubscription: Subscription;
  private oculto:any = true;
  private loading: any;
  private reproduciendo:any = false;
  private seleccionado:any;
  @ViewChild('content', {static: true}) private content: any;
  constructor(private cursoSeleccionado: CursoService, private zone: NgZone, public loadingController: LoadingController) {
  }

  ngOnInit() {

  }
  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Cargando curso...',
    });
    await this.loading.present();
  }
  async eliminarLoading() {
    await this.loading.dismiss();
  }
  async listarVideos() {
    this.presentLoading().then(() => {
      this.clientesSubscription = this.cursoSeleccionado.getVideos().subscribe((data) => {
        this.zone.run(() => {
          this.videos = data.items;
          console.log(this.videos);
          this.seleccionado = this.videos[0];
          this.seleccionado["url"] = `https://www.youtube.com/embed/${this.seleccionado.snippet.resourceId.videoId}`;
          this.eliminarLoading();
        });
      });
    });
  }
  seleccionar(video:any){
    this.reproduciendo = false;
    this.seleccionado = video;
    this.seleccionado["url"] = `https://www.youtube.com/embed/${this.seleccionado.snippet.resourceId.videoId}`;
    setTimeout(() => {
      this.content.scrollToTop(500);
    }, 0); 
  }
  ionViewDidLeave() {
    this.oculto = true;
    this.videos = [];
    this.clientesSubscription.unsubscribe();
  }
  ionViewWillEnter() {
    this.listarVideos();
  }

}
