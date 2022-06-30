import { TestBed } from '@angular/core/testing';

import { OrdineRepositoryService } from './ordine-repository.service';

describe('OrdineRepositoryService', () => {
  let service: OrdineRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdineRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
