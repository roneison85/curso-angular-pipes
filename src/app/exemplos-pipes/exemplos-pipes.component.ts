import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  produto : any = {
    descricao: 'PRODUTO DE TESTE',
    validade: new Date(2019, 12, 31),
    custo: 14.99,
    venda: 25.5
  };

  livros: string[] = [ 'Java', 'Angular' ];
  filtro: string;

  addCurso(valor){
    this.livros.push(valor);
  }

  constructor() { }

  ngOnInit() {
  }

  

}
