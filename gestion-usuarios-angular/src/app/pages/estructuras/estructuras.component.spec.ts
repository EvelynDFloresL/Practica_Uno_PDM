
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructurasComponent } from './estructuras.component';

describe('EstructurasComponent', () => {
  let component: EstructurasComponent;
  let fixture: ComponentFixture<EstructurasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstructurasComponent]
    });
    fixture = TestBed.createComponent(EstructurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
