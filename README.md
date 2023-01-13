<details>
  <summary>
    <strong>:memo: Sobre o projeto</strong>
  </summary><br>
  
  - Projeto Zoo Functions desenvolvido na Trybe
  
  - Desenvolver funções que buscam informações sobre os animais do zoológico como: espécie e local de origem. Além disso, você também vai buscar dados sobre as pessoas que colaboram com a manutenção e cuidado do zoológico.
</details>

<details>
  <summary>
    <strong>:wrench: Tecnologias utilizadas</strong>
  </summary><br>
  
  - JavaScript
 
</details>

<details>
  <summary>
    <strong>Requisitos</strong>
  </summary><br>
  
  # Requisitos Obrigatórios

⚠️ **PULL REQUESTS COM ISSUES NO LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️

## 1. Implemente a função `getSpeciesByIds`

<details>
  <summary>
  Busque as espécies dos animais por meio de um <code>id</code> e retorne um array contendo todos os animais dessa espécie.
  </summary> <br />

- Faça com que a função `getSpeciesByIds` possa receber vários parâmetros;

- Retorne um array vazio se a função não receber um `id`;

- Retorne as seguintes informações do arquivo `data`:

  - Se a função receber apenas um `id`, retorne a espécie do animal referente a este `id`;

  - Se a função receber vários `ids`, retorne todas as espécies referente a esses `ids`.

**O que será testado:**

- Caso receba nenhum parâmetro, é necessário retornar um array vazio;

- Ao receber como parâmetro um único `id`, retorna um array com a espécie referente a esse `id`;

- Ao receber mais de um `id`, retorna um array com as espécies referentes aos `ids`.

</details>

---

## 2. Implemente a função `getAnimalsOlderThan`

<details>
  <summary>
  Ao receber uma espécie e uma idade como parâmetro, retorne se todos os animais dessa espécie possuem essa idade ou são mais velhos.
  </summary> <br />

- Verifique se todos os animais da espécie passada como parâmetro possuem a idade mínima:
  - Os animais devem ter essa idade ou serem mais velhos.

- Retorne um valor booleano.

**O que será testado:**

- Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada.

</details>

---

## 3. Implemente a função `getEmployeeByName`

<details>
  <summary>
    Busque as pessoas colaboradoras pelo primeiro ou último nome delas
  </summary> <br />

- Retorne um objeto vazio caso a função não receba parâmetros;

- Retorne as informações da pessoa colaboradora caso o parâmetro seja igual ao nome **ou** igual ao último nome no seguinte formato:

```javascript
  {
    id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    firstName: 'Nigel',
    lastName: 'Nelson',
    managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83', 'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
    responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'],
  }
```

**O que será testado:**

- Sem parâmetros, deve retornar um objeto vazio;

- Quando informado o primeiro nome da pessoa colaboradora, deve retornar o objeto da pessoa colaboradora;

- Quando informado o último nome da pessoa colaboradora, deve retornar o objeto da pessoa colaboradora;
	

</details>

---

## 4. Implemente a função `getRelatedEmployees`

<details>
  <summary>
    Verifique se uma pessoa colaboradora é gerente e quais pessoas ela lidera
  </summary> <br />

Considerando a boa prática de dividir o código em partes menores, o arquivo terá duas funções:

1. `isManager` que será responsável por verificar se uma pessoa colaboradora é gerente:
    - Retorne `true` se o `id` passado for de uma pessoa gerente;
    - Retorne `false` se o `id` passado não for de uma pessoa gerente.

2. `getRelatedEmployees` que retorna as pessoas lideradas pela gerência:
      - Utilize a função `isManager` para verificar se a pessoa é gerente ou não e faça as seguintes verificações:

        - Caso a pessoa seja gerente, retorne um array contendo nome e sobrenome das pessoas colaboradoras gerenciadas por essa pessoa.

        Exemplo de output:

        ```javascript

        [ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ];

        ```

        - Caso a pessoa não seja gerente, dispare um erro com a mensagem: **'O id inserido não é de uma pessoa colaboradora gerente!'**.
  
        Para lançar o erro, você vai utilizar a função construtora **Error** da biblioteca padrão do JavaScript.

        Exemplo:

        ```javascript

        throw  new  Error('O id inserido não é de uma pessoa colaboradora gerente!');

        ```

        Você pode ler mais sobre a [função construtora **Error**, neste link.](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)

  **O que será testado:**

  - Retorna `true` se o `id` passado for de uma pessoa gerente;

  - Retorna `false` se o `id` passado não for de uma pessoa gerente;

  - Se o `id` passado for da pessoa gerente, retorna um array contendo nome e sobrenome das pessoas colaboradoras que ela é responsável;

  - Se o `id` passado **não** for da pessoa gerente, dispara um erro com a mensagem: `'O id inserido não é de uma pessoa colaboradora gerente!'`.

</details>

---

## 5. Implemente a função `countAnimals`

<details>
  <summary>
    Contabilize a quantidade de espécies de animais residentes no zoológico
  </summary> <br />

A função `countAnimals` é responsável por contar a quantidade e animais que residem no zoológico.
  
- Retorne a quantidade de animais residentes por espécie, caso a função não receba parâmetro. O retorno deverá ser um objeto cujo o nome de cada espécie é a chave e o total de animais (residentes) dessa espécie é o valor. Por exemplo:

```javascript
  {
    lions: 4,
    // [...]
  }
```

- Retorne a quantidade de animais residentes no zoológico da espécie passada por parâmetro. Por exemplo:

  - ao receber o argumento `{ specie: 'penguins' }`, retorna apenas a quantidade (número) de pinguins que residem no zoológico;

  - ao passar o argumento `{ specie: 'giraffes', sex: 'female' }`, retorna apenas a quantidade (número) de girafas fêmeas que residem no zoológico.

**O que será testado:**

- Sem parâmetros, retorna todas as espécies e a quantidade de residentes de cada uma;

- Recebendo como parâmetro um objeto com a chave `specie`, retorna a quantidade de animais daquela espécie;

- Recebendo como parâmetro um objeto com a chave `specie` e `sex`, retorna a quantidade de animais daquela espécie, no sexo selecionado.

</details>

---

</details>


