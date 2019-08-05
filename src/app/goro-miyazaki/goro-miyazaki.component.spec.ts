import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoroMiyazakiComponent } from './goro-miyazaki.component';

describe('GoroMiyazakiComponent', () => {
  let component: GoroMiyazakiComponent;
  let fixture: ComponentFixture<GoroMiyazakiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoroMiyazakiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoroMiyazakiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
