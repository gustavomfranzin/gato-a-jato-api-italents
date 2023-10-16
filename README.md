# # API Gato-a-jato para Gestão de Lava Rápidos

Bem-vindo à documentação da API para o sistema de gestão de lava-rápido. Esta API está atualmente em desenvolvimento e é projetada para facilitar a gestão de um lava-rápido. A API é construída usando Node.js com o Express, seguindo o padrão arquitetônico MVC (Model-View-Controller) e fornece operações CRUD (Criar, Ler, Atualizar, Excluir) básicas para gerenciamento de usuários.


# Começando
### Pré-requisitos

Certifique-se de ter o seguinte software instalado no seu sistema:

-   Node.js
-   npm (Node Package Manager)

### Instalação

1.  Clone este repositório para a sua máquina local:	

    `git clone <https://github.com/gustavomfranzin/gato-a-jato-api-italents.git>`

2. Navegue até a pasta do projeto:	

   `cd gato-a-jato-api-italents`
    
3. Instale as dependências necessárias:			

    `yarn install`

4. Configure a API modificando o arquivo `config.js` e criando um arquivo `.env`, incluindo a `PORTA` em que o servidor será executado e quaisquer outras configurações necessárias.	

5. Inicie a API:		

    `yarn start`

6. A API agora estará acessível em `http://localhost:<PORTA>`. Você pode testar os endpoints disponíveis usando ferramentas como o Postman ou enviando requisições HTTP a partir do seu aplicativo.

## Endpoints da API

Os seguintes endpoints estão disponíveis na API:

-   **GET /:** Este é um endpoint de teste simples para verificar se a API está disponível. Ele retorna uma mensagem com a data e hora atuais.
    
-   **POST /auth/create-user:** Crie um novo usuário enviando um payload JSON com informações do usuário. O Content-Type da requisição deve ser definido como "application/json".
    
-   **PUT /auth/update-user/:cod:** Atualize as informações de um usuário existente, fornecendo o `cod` do usuário como parâmetro na URL e enviando um payload JSON com os dados atualizados. O Content-Type da requisição deve ser definido como "application/json".
    
-   **DELETE /auth/delete-user/:cod:** Exclua um usuário com o `cod` (código do usuário) especificado, fazendo uma requisição DELETE com o `cod` do usuário como parâmetro na URL.

## Formato de Requisição e Resposta

Todas as requisições POST e PUT devem ter um payload JSON com as informações do usuário, por exemplo,

	{   
	    "company": "Eduzz",
	    "username": "zzdxxxxxxx",
	    "email": "zdxxxxxxzx@example.com",
	    "full_name": "das Doe",    
	    "date_of_birth": "31/01/2020",    
	    "phone_number": "1234567890",    
	    "password": "vxfcvdf"    
    }

Respostas bem-sucedidas terão um código de status HTTP 200 e uma resposta JSON contendo dados relevantes, por exemplo,

    {  
	    "mensagem":  "Usuário criado com sucesso.",  
	    "usuário":  
	    {  
		    "cod":  1,  
		    "nome":  
		    "João Silva",  
		    "email":  
		    "joao@example.com",  
		    "telefone":  "12-3456-7890"  
		}  
    }
Respostas de erro terão o código de status HTTP apropriado e uma resposta JSON com uma mensagem de erro, por exemplo,

    {  "error":  "Usuário não encontrado."  }
    
## Tratamento de Erros

A API realiza tratamento básico de erros, incluindo a verificação do Content-Type das requisições e o tratamento de dados JSON inválidos.

## Suporte

Se você encontrar algum problema ou tiver dúvidas, crie um problema no repositório ou entre em contato comigo gusfranzin@gmail.com. Agradeço seu feedback e contribuições para tornar esta API ainda melhor.
