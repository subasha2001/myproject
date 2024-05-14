import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Con1Component } from './con-1.component';

describe('Con1Component', () => {
  let component: Con1Component;
  let fixture: ComponentFixture<Con1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Con1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Con1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
