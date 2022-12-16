import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { IProduto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-tabela',
  templateUrl: './produto-tabela.component.html',
  styleUrls: ['./produto-tabela.component.css']
})
export class ProdutoTabelaComponent implements OnInit {

  public produtos: IProduto[] = [];

  constructor(private produtoService: ProdutoService){

  }

  public ngOnInit(): void {
   this.produtoService.obterProdutos()
   .pipe(take(1))
   .subscribe((dados: IProduto[]) => {this.produtos = dados});
  }

}
