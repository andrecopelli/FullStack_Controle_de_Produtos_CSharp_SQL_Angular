namespace CadastrodeProdutosSolution
{
    public class Produto
    {
        public string? Nome { get; set; }
        public string? Descricao { get; set; }
        public double? Preco { get; set;}

        public Produto()
        {

        }

        public Produto(string nome, string descricao, double preco)
        {
            Nome = nome;
            Descricao = descricao;
            Preco = preco;
        }
    }
}