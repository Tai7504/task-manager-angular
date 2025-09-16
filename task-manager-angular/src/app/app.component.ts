import { Component } from '@angular/core';
// Nếu dùng standalone
import { TasksComponent } from './tasks/tasks.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  // Nếu dùng standalone
  standalone: true,
  imports: [CommonModule, TasksComponent],
  template: `
    <div class="container">
      <h1>Task Manager</h1>
      <app-tasks></app-tasks>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      color: #3f51b5;
      text-align: center;
    }
  `]
})
export class AppComponent {
  title = 'task-manager-angular';
}
