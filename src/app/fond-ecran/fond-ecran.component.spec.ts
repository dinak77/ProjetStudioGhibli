import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondEcranComponent } from './fond-ecran.component';

describe('FondEcranComponent', () => {
  let component: FondEcranComponent;
  let fixture: ComponentFixture<FondEcranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondEcranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondEcranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
