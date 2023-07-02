import { TestBed } from '@angular/core/testing';

import { UserMsgServiceService } from './user-msg.service.service';

describe('UserMsgServiceService', () => {
  let service: UserMsgServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserMsgServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
