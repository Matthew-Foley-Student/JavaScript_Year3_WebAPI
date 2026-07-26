import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetChapters } from './get-chapters';

describe('GetChapters', () => {
  let component: GetChapters;
  let fixture: ComponentFixture<GetChapters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetChapters],
    }).compileComponents();

    fixture = TestBed.createComponent(GetChapters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
