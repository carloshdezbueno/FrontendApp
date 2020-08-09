import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-tiempo',
  templateUrl: './item-tiempo.component.html',
  styleUrls: ['./item-tiempo.component.css']
})
export class ItemTiempoComponent implements OnInit {

  @Input()
  item:any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
