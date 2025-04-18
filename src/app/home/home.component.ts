import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HomeComponent {
  socialLinks = [
    { icon: 'github', url: '#' },
    { icon: 'codepen', url: '#' },
    { icon: 'twitter', url: '#' },
    { icon: 'linkedin', url: '#' }
  ];
}
