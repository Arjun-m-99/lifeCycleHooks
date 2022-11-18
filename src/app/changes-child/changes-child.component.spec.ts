import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesChildComponent } from './changes-child.component';

describe('ChangesChildComponent', () => {
  let component: ChangesChildComponent;
  let fixture: ComponentFixture<ChangesChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangesChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
