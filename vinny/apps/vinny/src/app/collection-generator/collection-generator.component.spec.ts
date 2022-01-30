import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionGeneratorComponent } from './collection-generator.component';

describe('CollectionGeneratorComponent', () => {
  let component: CollectionGeneratorComponent;
  let fixture: ComponentFixture<CollectionGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
