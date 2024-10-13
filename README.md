# Criando CRUD para explorar as possibilidades do nestJS

_Não é possível ter 2 métodos com o mesmo nome, e isso é por padrão do
javascript_

**CRUD** = São métodos para passar para uma api - Post - Get - Patch/Put -
Delete

> Create -> POST -> Cria algo Read -> GET -> Ler algo Update -> PATCH / PUT ->
> Atualizar algo Delete -> DELETE -> Deleta algo

**Diferenças de Patch e Put** - ==**Patch**== é utilizado para atualizar dados
de _um_ recurso - ==**Put**== é utilizado para atualizar um recurso inteiro

## Querys parâmetros

Todos os parâmetros de querys são passados na url depois de um **=="?"==**

### Service

Os arquivos `.service` funcionam como repositórios, é uma interface da minha
aplicação e a minha base de dados.

### DTO

**Data transfer object (Obejto de transferência de dados)**

É um padrão de objeto. Serve para transportar dados de um lado para outro em uma
aplicação.

É um objeto simples de transporte de dados. Mas no nest ele pode ser usado tanto
para ==validar dados quanto para transformar dados.==

> [!NOTE] Observações Tudo que chega de uma **chave {}** em teoria é uma string

> [!SUMMARY] Transform validationPipe Não entendi muito bem como funciona,
> principalmente o transform
