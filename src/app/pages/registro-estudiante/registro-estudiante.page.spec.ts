import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroEstudiantePage } from './registro-estudiante.page';

describe('RegistroEstudiantePage', () => {
  let component: RegistroEstudiantePage;
  let fixture: ComponentFixture<RegistroEstudiantePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroEstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
