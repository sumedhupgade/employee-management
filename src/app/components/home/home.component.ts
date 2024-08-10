import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { SearchPanelComponent } from '../search-panel/search-panel.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent,HeaderComponent,SearchPanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

  showSearchPanel = true;
  menuItemClicked(event:any){
    if (event == 'search') {
      this.showSearchPanel = !this.showSearchPanel
    }
  }
}
