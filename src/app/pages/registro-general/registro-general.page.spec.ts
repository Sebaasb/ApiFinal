import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroGeneralPage } from './registro-general.page';

describe('RegistroGeneralPage', () => {
  let component: RegistroGeneralPage;
  let fixture: ComponentFixture<RegistroGeneralPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
