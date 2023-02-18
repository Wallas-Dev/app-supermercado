var itens = [];

document.querySelector('input[type=submit]')
    .addEventListener('click', function () {
        var nomeProduto = document.querySelector('input[name=nome_produto]');
        var precoProduto = document.querySelector('input[name=price]');

        itens.push({
            nome: nomeProduto.value,
            valor: precoProduto.value
        });

        let listaProdutos = document.querySelector(".lista-produtos")
        let total = 0;
        listaProdutos.innerHTML = "";
        itens.map(function (val) {
            total += parseFloat(val.valor);
            listaProdutos.innerHTML += `
        <div class="lista-produto-single"> 
            <h3>`+ val.nome + `</h3>
            <h3 class="price-produto"><span>R$`+ val.valor + `</span></h3>  
        </div>
        `;

        });
        total = total.toFixed(2);
        console.log(total);
        nomeProduto.value = "";
        precoProduto.value = "";
        let element = document.querySelector(".soma-produto h1 > span");
        element.innerHTML = 'Total: R$' + total
    });

document.querySelector('button[name=limpar]')
    .addEventListener('click', function(){
        itens = [];
        document.querySelector(".lista-produtos").innerHTML = "";
        document.querySelector(".soma-produto h1 > span").innerHTML = "Total: R$00,00"
    })