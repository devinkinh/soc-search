import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityDialogComponent } from './university-dialog.component';

describe('ResultDialogComponent', () => {
  let component: UniversityDialogComponent;
  let fixture: ComponentFixture<UniversityDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
