import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNotes } from './get-notes';

describe('GetNotes', () => {
  let component: GetNotes;
  let fixture: ComponentFixture<GetNotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetNotes],
    }).compileComponents();

    fixture = TestBed.createComponent(GetNotes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
