import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxObtuseWardenComponent } from './ngx-obtuse-warden.component';

describe('NgxObtuseWardenComponent', () => {
  let component: NgxObtuseWardenComponent;
  let fixture: ComponentFixture<NgxObtuseWardenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxObtuseWardenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxObtuseWardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
