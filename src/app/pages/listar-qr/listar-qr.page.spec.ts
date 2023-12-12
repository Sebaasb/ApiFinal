import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarQrPage } from './listar-qr.page';

describe('ListarQrPage', () => {
  let component: ListarQrPage;
  let fixture: ComponentFixture<ListarQrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
