import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProduto } from "./produto.model";

@Injectable()

export class ProdutoService{

    private _api: string = 'http://localhost:5198';

    constructor(private httpClient: HttpClient){}
    
    public salvarProduto(novoProduto: IProduto): Observable<boolean> {
        return this.httpClient.post<boolean>(`${this._api}/produto`, novoProduto);
    }

    public obterProdutos(): Observable<IProduto[]> {
        return this.httpClient.get<IProduto[]>(`${this._api}/produto`);
    }
}  