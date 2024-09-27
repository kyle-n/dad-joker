import { TestBed } from '@angular/core/testing';

import { DadJokeService } from './dad-joke.service';

describe('DadJokeService', () => {
  let service: DadJokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadJokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
