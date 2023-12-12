import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrGenerarPage } from './qr-generar.page';

describe('QrGenerarPage', () => {
  let component: QrGenerarPage;
  let fixture: ComponentFixture<QrGenerarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QrGenerarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
