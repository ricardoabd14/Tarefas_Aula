import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private tarefas: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() { }

  adicionarTarefa(tarefa: string): void {
    const tarefasAtuais = this.tarefas.value;
    tarefasAtuais.push(tarefa);
    this.tarefas.next(tarefasAtuais);
  }

  listarTarefas(): BehaviorSubject<string[]> {
    return this.tarefas;
  }

  removerTarefa(index: number): void {
    const tarefasAtuais = this.tarefas.value;
    tarefasAtuais.splice(index, 1);
    this.tarefas.next(tarefasAtuais);
  }
}
