const fs = require("fs");
const path = require("path");

//  Criar uma pasta(mkdir ver onde a pasta esta e vai criar)
fs.mkdir(path.join(__dirname, "/test"), (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Pasta criada com sucesso!");
  
});

/* 
    criar um arquivo(recebe diretorio criado, nome da pasta, qual arquivo) 
    fecha e passa o conteudo e segundo argumento trata erro
    so que writte fille sempre sobrescreve o arquivo atual
*/
fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'Hello world!', (error) => {
    if(error) {
        return console.log('Error: ', error)
    }

    console.log("arquivo criado com sucesso")

    // adicionar um arquivo sem sobrescrever
    fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'hello word', (error) => {
        if (error) {
            return console.log('Erro', error)
        }

        console.log('Arquivo modificado com sucesso!')
    });


    /*  
    ler arquivo (precisamos passar qual o tipo de texto ta usando) retorna error e data 
    (writefile é assincrono por isso o readfile deve estar dentro de onde criamos o arquivo)
    */
    fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (error, data) => {
        if (error) {
            return console.log('Error: ', error)
        }

        console.log(data)
    })
});




