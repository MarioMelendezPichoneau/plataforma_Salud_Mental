import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProfComponent } from './registro-prof.component';

describe('RegistroProfComponent', () => {
  let component: RegistroProfComponent;
  let fixture: ComponentFixture<RegistroProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroProfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
