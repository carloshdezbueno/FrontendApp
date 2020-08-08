import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIDCheckComponent } from './user-idcheck.component';

describe('UserIDCheckComponent', () => {
  let component: UserIDCheckComponent;
  let fixture: ComponentFixture<UserIDCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIDCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIDCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
