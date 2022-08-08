import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardS3mComponent } from './card-s3m.component';

describe('CardS3mComponent', () => {
  let component: CardS3mComponent;
  let fixture: ComponentFixture<CardS3mComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardS3mComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardS3mComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
