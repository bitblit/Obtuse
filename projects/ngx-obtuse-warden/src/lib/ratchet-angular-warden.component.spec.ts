import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatchetAngularWardenComponent } from './ratchet-angular-warden.component';

describe('RatchetAngularWardenComponent', () => {
  let component: RatchetAngularWardenComponent;
  let fixture: ComponentFixture<RatchetAngularWardenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatchetAngularWardenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatchetAngularWardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
