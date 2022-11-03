import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInsideComponent } from './home-inside.component';

describe('HomeInsideComponent', () => {
  let component: HomeInsideComponent;
  let fixture: ComponentFixture<HomeInsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
