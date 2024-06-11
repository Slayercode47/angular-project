import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTextComponent } from './tech-text.component';

describe('TechTextComponent', () => {
  let component: TechTextComponent;
  let fixture: ComponentFixture<TechTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
