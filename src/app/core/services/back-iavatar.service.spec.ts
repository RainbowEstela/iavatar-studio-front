import { TestBed } from '@angular/core/testing';

import { BackIavatarService } from './back-iavatar.service';

describe('BackIavatarService', () => {
  let service: BackIavatarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackIavatarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
