import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReunionCrudComponent } from './admin-reunion-crud.component';

describe('AdminReunionCrudComponent', () => {
  let component: AdminReunionCrudComponent;
  let fixture: ComponentFixture<AdminReunionCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminReunionCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminReunionCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
