import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Character} from '../character.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public character: Character;

  constructor(public navControl: NavController, public _http: HttpClient) {
    this.loadData();
  }

  loadData() {
    let data: Observable<any>;
     data = this._http.get('assets/data/character-detail-response.json');

     data.subscribe(result => {
        this.character = result;
     });
  }
}
