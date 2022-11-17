import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioInsideComponent } from './inicio-inside.component';

describe('InicioInsideComponent', () => {
  let component: InicioInsideComponent;
  let fixture: ComponentFixture<InicioInsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioInsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
