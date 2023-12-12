import { TestBed } from '@angular/core/testing';

import { NouserGuard } from './nouser.guard';

describe('NouserGuard', () => {
  let guard: NouserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NouserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
