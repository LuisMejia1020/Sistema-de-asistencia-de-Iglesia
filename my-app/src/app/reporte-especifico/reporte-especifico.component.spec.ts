import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteEspecificoComponent } from './reporte-especifico.component';

describe('ReporteEspecificoComponent', () => {
  let component: ReporteEspecificoComponent;
  let fixture: ComponentFixture<ReporteEspecificoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteEspecificoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteEspecificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
