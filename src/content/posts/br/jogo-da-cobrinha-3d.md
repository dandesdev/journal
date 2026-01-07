---
title: "Jogo da Cobrinha 3D"
date: 2025-09-26
lang: "br"
translationOf: "snake-game-3d"
description: "Um jogo da cobrinha realmente em 3d"
tags: ["game", "3d", "casual"]
---
Isso mesmo. Nas últimas semanas tive que lidar com algumas tarefas… onerosas… e, para equilibrar, mergulhei em uma ideia antiga, um projeto simples, rápido e casual mas que parecia muito divertido: um jogo de cobrinha em 3D, mas 3D *de verdade*. Se você procurar por aí, vai encontrar muitos jogos de cobrinha que se dizem 3D, mas que não são de fato 3D, isto é, tem algumas características tridimensionais, como os modelos ou o terreno, mas a mecânica do jogo em si, não. 
Pensava que não era possível que de fato não exista nenhum jogo de cobrinha em 3D – e de certo modo estava certo, porém, pelo que encontrei, existia apenas um, que ainda não era exatamente como eu imaginava. 
O que eu quero dizer por um jogo de cobrinha 3D *de verdade* é que nesse jogo a "cobrinha" pode realmente se mover em todas as três dimensões de um mundo espacial, ou seja, pode ir para a direita ou para a esquerda, para cima ou para baixo, mas também para dentro e para fora. 
Decidi então iniciar esse projeto e dar ao meu jogo a carinha que eu imaginava, e agora já está pronto para compartilhar. E se não entendeu ainda como é, vai logo ver: [**Jogo da Cobrinha 3D**](https://danielx-art.github.io/snakegame3d/)

Vale lembrar que, no presente momento, o jogo é somente para desktop, no browser. Até o momento, ainda não existe uma adaptação para telas pequenas e sensíveis ao toque, sem teclado.

O jogo é surpreendentemente mais difícil do que eu imaginava, e alguns amigos concordam. Mais uma vez, convido você  a tentar, e a tela de Game Over tem mostra sua pontuação, então fica a dica: compartilha por aí.
Só não vai roubar, ein? XD

### O desenvolvimento

Para o 3D, utilizei React-Three-Fiber (e Drei), tudo em Vite, e para os estados em geral utilizei Zustand. Como eu disse, era pra ser algo tranquilo, fácil, ergonômico de desenvolver, simples. O foco seria mais a mecânica do jogo e o visual. 
### A cobrinha

De início pensei em fazer a "cobrinha" como uma série de cubos, dessa forma teria bem fácil um controle individual de cada um para qualquer coisa. Porém, essa não era uma boa opção pois em algum momento poderia ter que lidar com centenas desses cubos, e aí a coisa ia ficar lenta (eu acho). Passei para uma instancedMesh, mas muitos problemas começaram a aparecer, especialmente porque eu queria muito usar um shader, ou melhor, shaderMaterial, para colorir. Shaders sempre foram algo que eu me impressiono muito e que ao mesmo tempo parecem bem desafiadores, e por isso eu sempre quero "molhar o pé" de vez em quando. De qualquer forma, depois de passar um dia e meio tentando, não consegui fazer o shaderMaterial funcionar com as instâncias e pensei: quer saber? vou logo é fazer tudo de uma vez em shaders… e resolvi lidar com todas as "células" do universo cúbico dentro do shader, e aí pintar cada uma de acordo com o que representa – um espaço vazio, o corpo da cobrinha, a comida … – assim também não precisei me preocupar tanto com possíveis vazamentos de memória, por conta da mudança de posição e de tamanho das entidades do jogo quadro a qiadro (isso já me aconteceu antes).
E assim o fiz, e não posso negar, o gpt-5 me ajudou bastante, e aprendi um pouco mais sobre shaders no processo.
Ainda quero melhorar esse aspecto, tratar iluminação, sombras, contornos etc - mas, no momento, fica para uma outra hora.

### O básico de como funciona um jogo de cobrinha

A cobrinha possui uma cabeça e um corpo, ou cauda, representados por uma lista de posições. A cada "tick" do jogo movimentamos a cabeça, que é a primeira posição da lista, na direção correta, atualizando a sua posição. A partir daí, a primeira célula do corpo, isto é, a posição após a cabeça na ordem da lista, ocupa a posição que antes a cabeça ocupava. Da mesma forma, a segunda célula do corpo vai para o lugar onde antes era da primeira, e assim por diante. 
Quando a cobrinha "come", adiciona-se mais um item à lista no próximo tick, no lugar onde antes era o último (já que o último irá se mover).

### … Realmente espero que você goste, e ficamos aqui por hoje.