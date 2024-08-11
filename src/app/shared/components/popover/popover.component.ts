import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss',
})
export class PopoverComponent {
  @Input() visiblity = false;
  @Output() visiblityChange = new EventEmitter();
  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent) {
    if (
      !this.elementRef.nativeElement.contains(event.target) &&
      this.visiblity
    ) {
      this.visiblity = false;
      this.visiblityChange.emit();
    }
  }

  share(shareTo: string){
    this.visiblity = false;
    this.visiblityChange.emit();
  }
}
