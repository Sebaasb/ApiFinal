import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualizarAlumnoPage } from './actualizar-alumno.page';

describe('ActualizarAlumnoPage', () => {
  let component: ActualizarAlumnoPage;
  let fixture: ComponentFixture<ActualizarAlumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ActualizarAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
