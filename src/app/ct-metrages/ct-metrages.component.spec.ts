import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtMetragesComponent } from './ct-metrages.component';

describe('CtMetragesComponent', () => {
  let component: CtMetragesComponent;
  let fixture: ComponentFixture<CtMetragesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtMetragesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtMetragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
