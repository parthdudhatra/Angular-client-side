import { TestBed } from '@angular/core/testing';

import { EmoployeeServiceService } from './emoployee-service.service';

describe('EmoployeeServiceService', () => {
  let service: EmoployeeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmoployeeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
