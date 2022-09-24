/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { Data_baseService } from './data_base.service';

describe('Service: Data_base', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Data_baseService]
    });
  });

  it('should ...', inject([Data_baseService], (service: Data_baseService) => {
    expect(service).toBeTruthy();
  }));
});
