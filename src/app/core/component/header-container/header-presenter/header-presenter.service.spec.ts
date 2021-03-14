import { TestBed } from '@angular/core/testing';

import { HeaderPresenterService } from './header-presenter.service';

describe('HeaderPresenterService', () => {
  let service: HeaderPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
