import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Actividad1Page } from './actividad1.page';

describe('Actividad1Page', () => {
  let component: Actividad1Page;
  let fixture: ComponentFixture<Actividad1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Actividad1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
