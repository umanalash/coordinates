import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GchildComponent } from './gchild.component';

describe('GchildComponent', () => {
  let component: GchildComponent;
  let fixture: ComponentFixture<GchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GchildComponent]
    });
    fixture = TestBed.createComponent(GchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
