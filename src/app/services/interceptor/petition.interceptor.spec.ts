import { TestBed } from '@angular/core/testing';

import { PetitionInterceptor } from './petition.interceptor';

describe('PetitionInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PetitionInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: PetitionInterceptor = TestBed.inject(PetitionInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
