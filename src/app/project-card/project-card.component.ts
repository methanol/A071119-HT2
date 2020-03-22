import { Component, Input } from '@angular/core';
import { IProject } from '../config';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {

  @Input()
  public project: IProject;
}
