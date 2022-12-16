using CadastrodeProdutosSolution;

namespace CadastroDeProdutoSolution.Infra.Data
{
    public class ProdutoRepository
    {
        private List<Produto> _produtos;

        public ProdutoRepository()
        {
            _produtos = new List<Produto>()
            {
                new Produto("Arroz", "Branco", 6.98),
                new Produto("Feijão", "Fradinho", 5.33),
                new Produto("Macarrão", "Conchiglioni", 17.55),
                new Produto("Peito de Frango", "Sassami", 16.30),
                new Produto("Refrigerante", "Coca-Cola", 7.12)
            };
        }

        public List<Produto> ObterProdutos()
        {
            return _produtos;
        }

        public void AddProduto(Produto novoProduto)
        {
            _produtos.Add(novoProduto);
        }
    }
}