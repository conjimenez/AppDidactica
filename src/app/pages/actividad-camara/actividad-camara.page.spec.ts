import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActividadCamaraPage } from './actividad-camara.page';

describe('ActividadCamaraPage', () => {
  let component: ActividadCamaraPage;
  let fixture: ComponentFixture<ActividadCamaraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadCamaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
