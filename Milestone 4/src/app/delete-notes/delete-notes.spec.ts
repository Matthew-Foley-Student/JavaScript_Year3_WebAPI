import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNotes } from './delete-notes';

describe('DeleteNotes', () => {
  let component: DeleteNotes;
  let fixture: ComponentFixture<DeleteNotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteNotes],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteNotes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
