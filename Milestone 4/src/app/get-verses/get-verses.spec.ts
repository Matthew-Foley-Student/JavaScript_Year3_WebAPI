import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVerses } from './get-verses';

describe('GetVerses', () => {
  let component: GetVerses;
  let fixture: ComponentFixture<GetVerses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetVerses],
    }).compileComponents();

    fixture = TestBed.createComponent(GetVerses);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
