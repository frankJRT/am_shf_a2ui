import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCarteraComponent } from './detail-cartera.component';

describe('DetailCarteraComponent', () => {
  let component: DetailCarteraComponent;
  let fixture: ComponentFixture<DetailCarteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCarteraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCarteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
