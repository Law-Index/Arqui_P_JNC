import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsloganComponent } from './eslogan.component';

describe('EsloganComponent', () => {
  let component: EsloganComponent;
  let fixture: ComponentFixture<EsloganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsloganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsloganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
