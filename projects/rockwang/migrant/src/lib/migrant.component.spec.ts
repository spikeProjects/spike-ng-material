import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrantComponent } from './migrant.component';

describe('MigrantComponent', () => {
  let component: MigrantComponent;
  let fixture: ComponentFixture<MigrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
