import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarefaService } from '../../services/TarefaService.service';


@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {
  tarefas: string[] = [];
  tarefaForm: FormGroup;

  constructor(private tarefaService: TarefaService, private formBuilder: FormBuilder) {
    this.tarefaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: [''],
      dataVencimento: ['']
    });
  }

  ngOnInit(): void {
    this.tarefas =  this.tarefaService.listarTarefas();

  }

  adicionarTarefa(): void {
    if (this.tarefaForm.valid) {
      const novaTarefa = this.tarefaForm.value.titulo;
      this.tarefaService.adicionarTarefa(novaTarefa);
      this.tarefaForm.reset();
      alert('Tarefa adicionada com sucesso!');
    }
  }

  removerTarefa(index: number): void {
    this.tarefaService.removerTarefa(index);
    alert('Tarefa removida com sucesso!');
  }
}
