import { Injectable, signal } from '@angular/core';
import { Event } from '../components/Evento/event';

@Injectable({
  providedIn: 'root',
})
export class EventService {

  private url = "http://localhost:3000/eventos";

  private eventosState = signal<Event[]>([]);
  public eventos = this.eventosState.asReadonly;

}
