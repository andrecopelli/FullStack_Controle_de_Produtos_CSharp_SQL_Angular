import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { IProduto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  public form!: FormGroup;

  constructor(private produtoService: ProdutoService){

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl(null, Validators.required),
      descricao: new FormControl(null, Validators.required),
      preco: new FormControl(null, Validators.required),
    });
  }

  public salvar(): void {
    if (this.form.valid) {
      const novoProduto: IProduto = {
        nome: this.form.value.nome,
        descricao: this.form.value.descricao,
        preco: this.form.value.preco
      };

      this.produtoService.salvarProduto(novoProduto)
      .pipe(take(1))
      .subscribe(() => {alert(`Produto ${novoProduto.nome} - ${novoProduto.descricao} cadastrado com sucesso! Confira na tabela de produtos.`)});
      this.form.reset();
    }
  }

}
