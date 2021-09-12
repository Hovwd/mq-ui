import { TestBed } from '@angular/core/testing';

import { MqApiServiceService } from './mq-api-service.service';

describe('MqApiServiceService', () => {
  let service: MqApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MqApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
