fetch('dados.json')
  .then(response => response.json() )
  .then(data => {

    // tudo o que vc vai fazer com os dados fica aqui
    console.log(data[0]);
    console.table(data);

    const container = document.querySelector('.container');

    // iterando para cada elemento da array do JSON, o que significa, na prática, para cada linha de dado
    data.forEach(dado => {

        // cria um div, que inicialmente fica meio que nadando num vácuo digital, até o pendurarmos a um elemento já existente mais adiante
        const card = document.createElement('div');

        // adiciona uma classe a esse novo div
        card.classList.add('card-container');

        // pendura esse novo div a um elemento já existente, referenciado pela variável 'container' (definida mais acima, fora do loop)
        container.appendChild(card);

        // circula pelas colunas de interesse

        for (coluna of ['ano', 'valor', 'metodologia' , 'name_region']) {

            // cria um elemento "p" para cada coluna
            const campo = document.createElement('p');

            // define o conteúdo do elemento "p" como sendo coluna: valor.
            // veja que cada elemento da array de dados é um objeto do tipo:
            /*

            {
                "ano": 1975,
                "valor": 40.5,
                "metodologia": "estatura x idade (NCHS/OMS 1987)",
                "região": "brasil",
                "name_region": "Brasil",
                "region": "Brasil"
            }

            */
            // cada elemento vai ser representado pela variável "dado". então, para acessar um determinado valor para uma determinada propriedade do objeto, usamos a sintaxe objeto[propriedade]:

            campo.innerHTML = coluna + ': ' + dado[coluna];

            // pendura esse novo elemeno "p", que agora possui um conteúdo, no elemento referenciado pela variável "card" (que é o div que foi criado para cada elemento da array de dados)
            card.appendChild(campo);

        }





    })
  
    document.querySelector('span').innerHTML = data[0].ano;
    
  })