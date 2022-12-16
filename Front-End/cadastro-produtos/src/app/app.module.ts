import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoService } from './features/produto/produto.service';
import { ProdutoTabelaComponent } from './features/produto/produto-tabela/produto-tabela.component';
import { ProdutoFormComponent } from './features/produto/produto-form/produto-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoTabelaComponent,
    ProdutoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
