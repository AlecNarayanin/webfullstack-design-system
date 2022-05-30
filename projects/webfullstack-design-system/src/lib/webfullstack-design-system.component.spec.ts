import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebfullstackDesignSystemComponent } from './webfullstack-design-system.component';

describe('WebfullstackDesignSystemComponent', () => {
  let component: WebfullstackDesignSystemComponent;
  let fixture: ComponentFixture<WebfullstackDesignSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebfullstackDesignSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebfullstackDesignSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
