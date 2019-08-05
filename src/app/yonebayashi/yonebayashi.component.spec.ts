import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YonebayashiComponent } from './yonebayashi.component';

describe('YonebayashiComponent', () => {
  let component: YonebayashiComponent;
  let fixture: ComponentFixture<YonebayashiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YonebayashiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YonebayashiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
