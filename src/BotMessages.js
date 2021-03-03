class BotMessages {

    static START_MESSAGE = `
    Olá! Eu sou o Super Mercado Bot. Prazer em conhecer você.
    Eu organizo listas de super mercado. Para adicionar um item, basta escrever "+ nome_do_item", sem as aspas. 
    Eu aceito mais de um item separado por vírgula, também! Por exemplo: "+ batata, feijão, cenoura"
    Para ver sua lista atual, digite "Mostrar lista", novamente sem as aspas.
    Para remover um item, "- nome_do_item". Tem que ser exatamente igual ao que diz na lista!
    Para apagar uma lista, digite "Apagar lista".
    Se apagou uma lista sem querer, não tem problema. É só digitar "Recuperar lista" que eu mostro como ela era.
    Todos esses comandos sem aspas, né?
    
    Obrigado e boas compras!`

    static HELP_MESSAGE = `
Comandos:
    - "+ item" para adicionar item
    - "+ item1, item2, item3..." para adicionar mais de um item
    - "Mostrar lista" para mostrar a lista
    - "- item" para remover item
    - "Apagar lista" para apagar a lista
    - "Recuperar lista" para mostrar última lista apagada
    `
}

module.exports = BotMessages;
