import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseIfComponent } from './if-else-if.component';

describe('IfElseIfComponent', () => {
  let component: IfElseIfComponent;
  let fixture: ComponentFixture<IfElseIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfElseIfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IfElseIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
