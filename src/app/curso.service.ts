import { Injectable, NgZone} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private videos:any = [];
  private idReproduccion:String = "PL6h_1xNN7yYLu_fPTXYPErBA_DWOC6ire";
  constructor(private http: HttpClient, private zone: NgZone) { }

  getVideos(): Observable<any>{
    return this.http.get(`${environment.urlGoogle}&playlistId=${this.idReproduccion}&key=${environment.apiKeyGoogle}`);
  }
  async setIdReproduccion(id:String){
    this.idReproduccion = id;
  }
}
