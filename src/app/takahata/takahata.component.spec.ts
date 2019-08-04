import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakahataComponent } from './takahata.component';

describe('TakahataComponent', () => {
  let component: TakahataComponent;
  let fixture: ComponentFixture<TakahataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakahataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakahataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
