import { TestBed } from '@angular/core/testing';

import { MigrantService } from './migrant.service';

describe('MigrantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MigrantService = TestBed.get(MigrantService);
    expect(service).toBeTruthy();
  });
});
