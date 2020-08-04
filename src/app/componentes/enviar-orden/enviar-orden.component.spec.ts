import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarOrdenComponent } from './enviar-orden.component';

describe('EnviarOrdenComponent', () => {
  let component: EnviarOrdenComponent;
  let fixture: ComponentFixture<EnviarOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
