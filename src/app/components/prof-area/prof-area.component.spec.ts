import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfAreaComponent } from './prof-area.component';

describe('ProfAreaComponent', () => {
  let component: ProfAreaComponent;
  let fixture: ComponentFixture<ProfAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
