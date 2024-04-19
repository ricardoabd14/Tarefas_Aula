import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/Cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})

export class ClienteComponent {
    clientes:Cliente[] = [];
    clientForm: FormGroup = new FormGroup({})


   constructor(private clienteService:ClienteService, private formBuilder: FormBuilder) {
      this.clientForm = this.formBuilder.group({
        nome: ['', Validators.required],
        telefone: ['', Validators.required],
        styleUrls: ['./tasks.component.css']
      })
  }

  generateRandomString(length: number): string  {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ''
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  inserir(){
     if(this.clientForm.valid) {
        const clientNovo: Cliente = {
          nome: this.clientForm.value.nome,
          telefone: this.clientForm.value.telefone,
          id : this.generateRandomString(6)
        }
        this.clientForm.reset()
        this.clienteService.adicionar(clientNovo)
        alert('Cadastrado com sucesso!')
     }
  }

  listar():void{
      this.clientes = this.clienteService.listar();
  }
  remover(id :String):void{
    this.clienteService.remover;
    alert('Removido com sucesso')
    this.listar;

  }
  removeTask(index: number) {
    this.taskService.removeTask(index);
    this.tasks = this.taskService.getTasks();

  }
  ngOnInit():void{
    this.listar();
  }

};






