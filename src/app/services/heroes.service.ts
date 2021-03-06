import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from 'src/models/heroe.model';
import { map } from 'rxjs/operators';
import { FirebaseEndpointManagerService } from './firebase-endpoint-manager.service';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  

  constructor(
    private http: HttpClient,
    private firebaseEndpoint: FirebaseEndpointManagerService
  ) { }

  crearHeroe(heroe: HeroeModel){
    return this.http.post(`${this.firebaseEndpoint.urlEndpoint}/heroes.json`, heroe).pipe(
      map((resp: any) =>{
        heroe.id = resp.name;
        return heroe;
      })
    );
  }

  actualizarHeroe(heroe: HeroeModel){
    const heroeTemp = {
      ...heroe
    }
    delete heroeTemp.id;

    return this.http.put(`${this.firebaseEndpoint.urlEndpoint}/heroes/${heroe.id}.json`, heroeTemp);
  }

  getHeroes(){
    return this.http.get(`${this.firebaseEndpoint.urlEndpoint}/heroes.json`).pipe(
      map(resp => this.crearArregloHeroes(resp))
      // map(this.crearArregloHeroes)
    );
  }

  private crearArregloHeroes(heroesObj: Object){
    const heroes: HeroeModel[] = [];

    if (heroesObj === null) return [];
    
    Object.keys( heroesObj).forEach(key => {
      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;

      heroes.push(heroe);
    })
    
    return heroes;
  }

  getHeroe(id: string){
    return this.http.get(`${this.firebaseEndpoint.urlEndpoint}/heroes/${id}.json`)
  }

  borrarHeroe(id: string){
    return this.http.delete(`${this.firebaseEndpoint.urlEndpoint}/heroes/${id}.json`);
  }
}
