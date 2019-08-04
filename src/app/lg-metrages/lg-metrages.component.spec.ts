import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgMetragesComponent } from './lg-metrages.component';

describe('LgMetragesComponent', () => {
  let component: LgMetragesComponent;
  let fixture: ComponentFixture<LgMetragesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgMetragesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgMetragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
