import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAcercadeComponent } from './new-acercade.component';

describe('NewAcercadeComponent', () => {
  let component: NewAcercadeComponent;
  let fixture: ComponentFixture<NewAcercadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAcercadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAcercadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
