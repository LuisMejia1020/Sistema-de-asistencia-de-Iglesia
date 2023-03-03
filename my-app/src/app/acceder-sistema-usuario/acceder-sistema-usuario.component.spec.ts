import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccederSistemaUsuarioComponent } from './acceder-sistema-usuario.component';

describe('AccederSistemaUsuarioComponent', () => {
  let component: AccederSistemaUsuarioComponent;
  let fixture: ComponentFixture<AccederSistemaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccederSistemaUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccederSistemaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
