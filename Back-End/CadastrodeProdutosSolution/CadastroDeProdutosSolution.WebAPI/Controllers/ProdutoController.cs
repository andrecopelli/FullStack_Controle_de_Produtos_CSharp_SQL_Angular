using Microsoft.AspNetCore.Mvc;
using CadastroDeProdutoSolution.Infra.Data;
using CadastrodeProdutosSolution;

namespace CadastroDeProdutosSolution.WebAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProdutoController : ControllerBase
    {
        private static ProdutoRepository _produtoRepository = new ProdutoRepository();

        
        public ProdutoController() {
            
        }

        [HttpGet]
        public ActionResult Get()
        {
            List<Produto> produtos = _produtoRepository.ObterProdutos();
            return Ok(produtos);
        }


        [HttpPost]
        public ActionResult Post([FromBody] Produto novoProduto)
        {
            _produtoRepository.AddProduto(novoProduto);
            return Ok(true);
        }
    }
}
