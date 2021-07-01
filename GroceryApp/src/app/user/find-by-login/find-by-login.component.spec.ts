import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByLoginComponent } from './find-by-login.component';

describe('FindByLoginComponent', () => {
  let component: FindByLoginComponent;
  let fixture: ComponentFixture<FindByLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindByLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
