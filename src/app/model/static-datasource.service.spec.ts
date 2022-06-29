import { TestBed } from '@angular/core/testing';

import { StaticDatasourceService } from './static-datasource.service';

describe('StaticDatasourceService', () => {
  let service: StaticDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
