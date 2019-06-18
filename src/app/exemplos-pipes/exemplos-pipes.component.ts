import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';


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

  livros: string[] = [ 'Java', 'Angular'  ];
  filtro: string;

  addCurso(valor){
    this.livros.push(valor);
  }

  obterCursos() {
    if(this.livros.length === 0 || this.filtro === undefined 
      || this.filtro.trim() === '') {
        return this.livros;
    }

    return this.livros.filter((v) => {
      if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
        return true;
      }
      return false;
    });
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  valorAsync2 = interval(2000).pipe(map(valor => 'Valor assincrono 2'));

  constructor() { }

  ngOnInit() {
  }

  

}
