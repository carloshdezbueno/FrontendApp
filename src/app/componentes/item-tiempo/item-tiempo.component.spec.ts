import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTiempoComponent } from './item-tiempo.component';

describe('ItemTiempoComponent', () => {
  let component: ItemTiempoComponent;
  let fixture: ComponentFixture<ItemTiempoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTiempoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
