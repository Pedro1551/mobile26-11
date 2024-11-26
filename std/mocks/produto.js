import imagem_tabela from '../../assets/logo_dg.png'

const produto = {
    topo: {
        titulo: "Drawing Club",
    },
    detalhes: {
        nome: "Kit arte aleatória",


        logo: imagem_tabela,


        detalhes: "Um kit com panos de copa feitos a mão com muito carinho para deixar sua cozinha mais bonita!",
        preco: "R$ 50,00",
        botao: "Adicionar na Lista de Desejos",
        informacao: "Esse kit é um pacote misterioso, onde sua sorte é posta em risco!",
    },
    itens: {
        titulo: "Itens do Kit",
        lista: [
          {
            nome: "1x Fita de Cetim",
            imagem: imagem_tabela,
          },
          {
            nome: "2x Passa fita",
            imagem: imagem_tabela,
          },
          {
            nome: "1x Laise",
            imagem: imagem_tabela,
          },
        ]
    }
}

export default produto;