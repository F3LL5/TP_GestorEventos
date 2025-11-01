import { Component } from '@angular/core';
export class Event {

  constructor(

    public idEvento: number,
    public nombre: string,
    public fecha: Date,
    public descripcion: string

  ){}

}
