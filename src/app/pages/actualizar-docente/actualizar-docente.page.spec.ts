import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualizarDocentePage } from './actualizar-docente.page';

describe('ActualizarDocentePage', () => {
  let component: ActualizarDocentePage;
  let fixture: ComponentFixture<ActualizarDocentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ActualizarDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
