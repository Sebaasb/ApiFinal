import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeriadosAlumnosPage } from './feriados-alumnos.page';

describe('FeriadosAlumnosPage', () => {
  let component: FeriadosAlumnosPage;
  let fixture: ComponentFixture<FeriadosAlumnosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FeriadosAlumnosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
