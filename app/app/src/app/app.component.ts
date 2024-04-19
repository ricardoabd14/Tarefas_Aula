import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { TarefasComponent } from './componets/tarefa/tarefa.componet';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClienteComponent,TarefasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-app';
}

