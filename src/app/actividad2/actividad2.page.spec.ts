import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Actividad2Page } from './actividad2.page';

describe('Actividad2Page', () => {
  let component: Actividad2Page;
  let fixture: ComponentFixture<Actividad2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Actividad2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
