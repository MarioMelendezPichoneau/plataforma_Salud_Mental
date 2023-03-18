import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionRolComponent } from './opcion-rol.component';

describe('OpcionRolComponent', () => {
  let component: OpcionRolComponent;
  let fixture: ComponentFixture<OpcionRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcionRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
