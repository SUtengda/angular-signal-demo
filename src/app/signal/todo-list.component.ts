import { Component, signal, computed, effect } from '@angular/core';

interface Task {
  id: number;
  description: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-todo-list',
  host: {
    class: "wrapper"
  },
  styles: [
    `.list {
      position: relative;
    }`,
    `.list h2 {
      font-weight: 700;
      letter-spacing: 1px;
      margin-bottom: 10px;
    }`,
    `.list ul li {
      position: relative;
      left: 0;
      list-style: none;
      margin: 4px 0;
      padding-left: 4px;
      border-left: 2px solid #f50057;
    }`,
  ],
  template: `
    <ng-container *ngIf="signalDemoCD()"></ng-container>
    <div class="list">      
      <h2>Ma liste de tâches</h2>
      <ul>
        <li *ngFor="let task of tasks(); index as i;" >
          {{ task.description }} => {{task.isCompleted ? "Tâche terminée": "Non Terminée"}}
          <button (click)="toggleTaskStatus(i)">toggle done</button>
        </li>
      </ul>
    </div>

    <p>Nombre de tâches terminées : {{ completedTasksCount() }}</p>
  `,
})
export class TodoListComponent {

  tasks = signal([
    { id: 1, description: 'Faire les courses', isCompleted: false },
    { id: 2, description: 'Nettoyer la maison', isCompleted: true },
    { id: 3, description: 'Répondre aux e-mails', isCompleted: false },
  ]);

  completedTasksCount = computed(() => {
    return this.tasks().filter(task => task.isCompleted).length;
  });

  constructor() {
    effect(() => {
      console.log('Nombre de tâches terminées :', this.completedTasksCount());
    });
  }

  toggleTaskStatus(index: number) {
    this.tasks.mutate(value => {
      value[index].isCompleted = !value[index].isCompleted;
    });
  }

  signalDemoCD() {
    console.info("app-todo list change detection")
  }
}