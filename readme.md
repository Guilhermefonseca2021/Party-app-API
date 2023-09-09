<h3> Instalacao </h3>

npm init (ja instala um documento package do node)
npm install nodemon -D
npm install express cors mongoose

<h3> iniciando NodeJS </h3>

1. Node usado para criar API(CRUDs em formato JSON)
3. utiliza engine V8 Engine(mesmo motor do chrome)
3. Node é single threaded mas é non-blocking(um nucleo mas com multiplas requisicoes ao mesmo tempo)
4. otimo uso de memoria(baixo custo 'pagar menos para hospedar ja que é beneficio para o site hospedar menor espaco')
5. harmonia com front-end ambos usam Javascript
6. Presenca forte no mercado.

<h3> Aplicação Back-End no Padrão MVC</h3>

Back-end foi desenvolvido seguindo o padrão arquitetural MVC (Model-View-Controller), padrão de projeto amplamente utilizado para separar as responsabilidades das diferentes partes de um sistema, facilitando a manutenção, reutilização e testabilidade do código. isso tudo ja me conquista na questao de ser independente e amplo.

<img width="1326" alt="mvc-arquiteture" src="https://github.com/Guilhermefonseca2021/Node-System/assets/92196697/37be3e5f-b3c6-40fe-b978-2b373c2f3c5e">

<h3> Estrutura de pastas: </h3>

- "models" contém os modelos de dados da aplicação, responsáveis por representar as entidades e regras de negócio.
- "views" é responsável por apresentar os dados ao usuário, geralmente através de templates ou páginas HTML.
- "controllers" partes responsáveis por receber as requisições do usuário, processá-las e interagir com os modelos e as views.
- "routes" contém as definições das rotas da aplicação, que mapeiam as URLs para os controladores correspondentes.
- "middlewares" contém os middlewares, funções que podem ser executadas antes ou depois do processamento dos controladores, permitindo a implementação de lógicas adicionais.
- "config" contém arquivos de configuração da aplicação, como conexões com bancos de dados ou configurações de autenticação.
- "utils" contém utilitários ou funções auxiliares que podem ser usados em diferentes partes da aplicação


<h3> Principais componentes: </h3>

Esses três componentes trabalham em conjunto para garantir uma separação clara de responsabilidades e facilitar a manutenção e evolução da aplicação. O modelo é responsável pelos dados e regras de negócio, a visualização é responsável pela apresentação dos dados ao usuário e o controlador coordena a interação entre esses dois componentes.

<h3> Processos do NodeJS </h3>

non-blocking(usuario faz requisicao ele nao espera retornar respostas para atender o proximo usuario):

<img width="1326" alt="multiple-request" src="https://github.com/Guilhermefonseca2021/Node-System/assets/92196697/42dd8d3a-96e1-492c-a8a6-93f84dd9a490">


criacao de modulos proprios para CRUD(criar back end HTTP, para CRUD.)

modulos: path


Instalacao de NPM(modulos de terceiros para uso armazenadas na pasta node_modules) 

mais usados:

npm init
npm install express
npm -g install nodemon

<h3> Iniciando Banco de dados MongoDB </h3>

npm install mongoose (biblioteca mongoDB)
npm install dotenv   (criar variaveis)
-para trabalhar com acesso nao podemos expor nossa senha do banco por isso o arquivo: 
.env (variavel de acesso.)

Contribuição:
- Se desejar contribuir com este projeto, por favor, envie um pull request com as suas alterações.


