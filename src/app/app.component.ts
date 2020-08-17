import { Component } from '@angular/core';
import { FirebaseEndpointManagerService } from './services/firebase-endpoint-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'heroesApp';

  constructor(
    private firebaseUrlManager: FirebaseEndpointManagerService
  ){}

  cargarEndpoint(){
    this.firebaseUrlManager.guardarEndpoint();
  }
}
