import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

interface DropdownValue {
  value: string;
  label: string;
}
@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  @Input()
  options: DropdownValue[] = [{ value: '', label: '' }];

  @Input() value: string = '';
  @Input() class: string = '';
  @Output() valueChange = new EventEmitter();
  dropdwDownOpen = false;

  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.dropdwDownOpen = false;
    }
  }
  constructor(private elementRef: ElementRef) {}

  select(value: string) {
    this.dropdwDownOpen = false;
    this.value = value;
    this.valueChange.emit(value);
  }

  toggleDropdown() {
    this.dropdwDownOpen = !this.dropdwDownOpen;
  }
}
