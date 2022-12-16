import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoFormComponent } from './features/produto/produto-form/produto-form.component';
import { ProdutoTabelaComponent } from './features/produto/produto-tabela/produto-tabela.component';

const routes: Routes = [
  {
    path: 'produtos',
    children: [
      {
        path: 'formulario',
        component: ProdutoFormComponent
      },
      {
        path: 'tabela',
        component: ProdutoTabelaComponent
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
