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

# Banco de dados PostgresSQL com TypeORM

É preciso instalar o postgreSQL, e para visualizar esse banco usamos o dbeaver
mas poderia ser qualquer um outro administrador de banco.

Agora podemos instalar o typeORM por esse código aqui
`npm i @nestjs/typeorm typeorm pg` ==pg== significa que é referente ao banco
postgres.

**Cada vez que eu crio uma entidade, basicamente eu estou criando repositórios**

> [!NOTE] Pesquisa
>
> - Procurar sobre promisses javaScript

Para criar uma nova "tabela" vamos assim dizer, para colocar em um banco e
referenciar ela à uma API basicamente os arquivos necessários serão assim:

- Nova Tabela
  - dto
    - `create-novaTabela.dto.ts`
    - `update-novaTabela.dto.ts`
  - entities
    - `novaTabela.entity.ts`
  - `novaTabela.controller.ts`
  - `novaTabela.module.ts`
  - `novaTabela.service.ts`

> Basicamente essa é a estrutura padrão para uma nova tabela

> [!NOTE] Comando É possível fazer essa criação de forma automática com o
> comando `nest g res novaTabela` , e responder as perguntas geradas.

> [!NOTE] Lembrete Eu preciso declarar a minha nova tabela em `app.module.ts` e
> também no meu `novaTabela.module.ts` e assim vai funcionar.
> ![[Pasted image 20241006113354.png]] ![[Pasted image 20241006113435.png]]

> [!SUMMARY] CASCADE `{ onDelete: 'CASCADE', onUpdate: 'CASCADE' }` Serve para
> quando eu apagar algum id, tudo que tiver sendo relacionado com ele também
> será apagado.

**A paginação de qualquer site que você usa em sql é a combinação do Limit e
Offset**

**Parse int pipe** > ajuda bastante se usado globalmente, com mensagens
indicando erros sobre o endpoint que o usuário está passando.

> [!NOTE] Cache Inteceptor Sempre tomar cuidado ao usar o cache isso ocupa
> memória do servidor então nem sempre precisa ser utilizada.

> [!NOTE] Injectable Sempre utilize quando for preciso usar para uma
> dependência.

### Middlewares

_Fluxo_

- Cliente (Navegador) -> Servidor (Atráves de Middleware) aceita (Request,
  Response)
- NestJs -> Guards, Pipes, Filters, Interceptors -> O middleware pode ser
  genérico, ele pode ser todas essas opções de interceptadores.

Middlewares está bem mais perto da conexão com o servidor

### Guards

Basicamente são os guards que dão acesso a determinadas rotas.

Uma guard está checando alguma coisa.

Guards podem ser adicionados globalmente, ou por módulo ou por rota.

### Parâmetros

É bom quando vc está usando algo repetidas vezes, ai cria-se um param
