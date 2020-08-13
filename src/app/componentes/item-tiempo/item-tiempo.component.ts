import { Component, OnInit, Input } from '@angular/core';
import { Tiempo } from 'src/app/tiempo.model';

@Component({
  selector: 'app-item-tiempo',
  templateUrl: './item-tiempo.component.html',
  styleUrls: ['./item-tiempo.component.css']
})
export class ItemTiempoComponent implements OnInit {

  @Input()
  item:Tiempo = null;

  constructor() { }

  ngOnInit(): void {
  }

}
