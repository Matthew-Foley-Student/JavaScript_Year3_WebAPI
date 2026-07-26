import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBooks } from './get-books';

describe('GetBooks', () => {
  let component: GetBooks;
  let fixture: ComponentFixture<GetBooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetBooks],
    }).compileComponents();

    fixture = TestBed.createComponent(GetBooks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
