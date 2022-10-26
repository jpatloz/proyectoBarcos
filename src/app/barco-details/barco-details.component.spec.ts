import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcoDetailsComponent } from './barco-details.component';

describe('BarcoDetailsComponent', () => {
  let component: BarcoDetailsComponent;
  let fixture: ComponentFixture<BarcoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarcoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
