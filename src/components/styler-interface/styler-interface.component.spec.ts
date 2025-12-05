import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylerInterfaceComponent } from './styler-interface.component';

describe('StylerInterfaceComponent', () => {
  let component: StylerInterfaceComponent;
  let fixture: ComponentFixture<StylerInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StylerInterfaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StylerInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
