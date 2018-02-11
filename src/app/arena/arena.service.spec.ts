import { TestBed, inject } from '@angular/core/testing';

import { ArenaService } from './arena.service';

describe('StoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArenaService]
    });
  });

  it('should ...', inject([ArenaService], (service: ArenaService) => {
    expect(service).toBeTruthy();
  }));
});
