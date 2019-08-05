import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoritaComponent } from './morita.component';

describe('MoritaComponent', () => {
  let component: MoritaComponent;
  let fixture: ComponentFixture<MoritaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoritaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
