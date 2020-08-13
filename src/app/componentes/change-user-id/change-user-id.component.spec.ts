import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeUserIDComponent } from './change-user-id.component';

describe('ChangeUserIDComponent', () => {
  let component: ChangeUserIDComponent;
  let fixture: ComponentFixture<ChangeUserIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeUserIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeUserIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
