import { TestBed } from '@angular/core/testing';

import { BanderaGuard } from './bandera.guard';

describe('BanderaGuard', () => {
  let guard: BanderaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BanderaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
