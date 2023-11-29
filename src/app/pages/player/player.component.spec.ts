import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerComponent } from './player.component';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerComponent]
    });
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should render player title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-toolbar span')?.textContent).toContain('Pizza Player');
  });

  it('should render song information', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const file = [
      { name: 'Song 1', artist: 'Artist 1' },
    ];
    component.files = file;
    fixture.detectChanges();

    expect(compiled.querySelector('mat-list')?.textContent).toContain('Songs');
    expect(compiled.querySelector('mat-list-item')?.textContent).toContain('Song 1');
    expect(compiled.querySelector('mat-list-item')?.textContent).toContain(`by Artist 1`);
    expect(compiled.querySelector('mat-divider')).toBeTruthy();
  });
});
