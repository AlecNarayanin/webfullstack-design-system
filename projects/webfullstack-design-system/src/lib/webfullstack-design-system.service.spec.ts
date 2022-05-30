import { TestBed } from '@angular/core/testing';

import { WebfullstackDesignSystemService } from './webfullstack-design-system.service';

describe('WebfullstackDesignSystemService', () => {
  let service: WebfullstackDesignSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebfullstackDesignSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
