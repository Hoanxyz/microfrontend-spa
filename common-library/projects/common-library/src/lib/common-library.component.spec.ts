import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonLibraryComponent } from './common-library.component';

describe('CommonLibraryComponent', () => {
  let component: CommonLibraryComponent;
  let fixture: ComponentFixture<CommonLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonLibraryComponent]
    });
    fixture = TestBed.createComponent(CommonLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
