import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-skills',
  imports: [CommonModule, RouterModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: '.Net', icon: 'assets/net.png', highlighted: false },
    { name: 'C#', icon: 'assets/c2.png', highlighted: false },
    { name: 'SQL', icon: 'assets/sql.png', highlighted: false },
    { name: 'Angular', icon: 'assets/angular.png', highlighted: false },
    { name: 'JavaScript', icon: 'assets/javascript.png', highlighted: false },
    { name: 'HTML5', icon: 'assets/html.png', highlighted: false },
    { name: 'CSS', icon: 'assets/css.png', highlighted: false },
    { name: 'jQuery', icon: 'assets/jquery.png', highlighted: false },
    { name: 'TypeScript', icon: 'assets/typescript.png', highlighted: false },
    { name: 'Flutter', icon: 'assets/flutter.png', highlighted: false },
    { name: 'React-Native', icon: 'assets/react.png', highlighted: false },
    { name: 'Dart', icon: 'assets/dart.png', highlighted: true },
  ];
}
