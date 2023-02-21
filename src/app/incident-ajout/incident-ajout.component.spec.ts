import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentAjoutComponent } from './incident-ajout.component';

describe('IncidentAjoutComponent', () => {
  let component: IncidentAjoutComponent;
  let fixture: ComponentFixture<IncidentAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
