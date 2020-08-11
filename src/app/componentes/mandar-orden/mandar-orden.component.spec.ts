import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandarOrdenComponent } from './mandar-orden.component';

describe('MandarOrdenComponent', () => {
  let component: MandarOrdenComponent;
  let fixture: ComponentFixture<MandarOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandarOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandarOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
