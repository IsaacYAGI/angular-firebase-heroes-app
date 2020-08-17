import { TestBed } from '@angular/core/testing';

import { FirebaseEndpointManagerService } from './firebase-endpoint-manager.service';

describe('FirebaseEndpointManagerService', () => {
  let service: FirebaseEndpointManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseEndpointManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
