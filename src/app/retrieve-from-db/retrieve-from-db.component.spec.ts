import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveFromDbComponent } from './retrieve-from-db.component';

describe('RetrieveFromDbComponent', () => {
  let component: RetrieveFromDbComponent;
  let fixture: ComponentFixture<RetrieveFromDbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetrieveFromDbComponent]
    });
    fixture = TestBed.createComponent(RetrieveFromDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
