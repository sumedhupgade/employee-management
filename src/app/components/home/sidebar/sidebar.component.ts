import { Component, EventEmitter,Input, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent{
  @Input() searchPanelVisible = false;
  @Output() takeAction = new EventEmitter();
  searchActive = false;
  
  constructor(private router: Router) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
      });
  }

  liClicked(option:string){
    this.takeAction.emit(option)
  }
}
