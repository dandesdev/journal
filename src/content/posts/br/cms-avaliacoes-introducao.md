---
title: "Estou criando uma plataforma de avaliações"
date: 2025-09-12
lang: "br"
translationOf: "cms-evaluations-introduction"
description: "A introdução para um novo projeto: um sistema de gerenciamento de conteúdo para avaliações, e um panorama básico geral"
tags: ["cms", "project", "first"]
---

Há pouco tempo, fiz parte de um editorial específico de avaliações educacionais em uma grande corporação. Nesse time, utilizávamos uma plataforma proprietária que atendia a algumas etapas do nosso fluxo de produção, porém, muitas vezes, não da maneira como gostaríamos. Com essa experiência, percebi que não existe uma forma verdadeiramente satisfatória de criar, gerenciar, aplicar e acompanhar avaliações para os mais diferentes fins. As soluções existentes, como Google Forms, Typeform, Moodle e outras plataformas proprietárias com as quais tive contato, atendem parcialmente, mas não cobrem de forma integrada todas as etapas do ciclo de vida de uma avaliação, nem oferecem uma experiência fluida para educadores e editores autônomos, para instituições e também, é claro, para os respondentes.

Dito isso, **olá! Seja bem-vinde novamente**, e hoje irei começar a contar um pouco desse projeto, dando um panorama básico de como eu o imagino e idealizo, sem me aprofundar ainda no software em si. Se acalmem, logo contarei em mais detalhes como está sendo o processo de design e desenvolvimento.

Primeiramente, gostaria de fazer um esclarecimento: “avaliação” tem um significado muito amplo e assume diferentes formas em diferentes contextos e culturas — caso se interesse, saiba que existe muita literatura acadêmica sobre esse tópico! — mas aqui, especificamente, quero dizer com “avaliação” o que provavelmente você deve reconhecer como uma prova escolar; ou seja, de forma bem enxuta, *uma série de questões dispostas de acordo com um programa pedagógico e cujas respostas passam por um critério de pontuação bem definido*.

Com isso estabelecido, acredito que a melhor forma de começar seja pelo básico do que espero em termos de funcionalidade. O objetivo final, os problemas e desafios devem emergir naturalmente.

## O básico

### Usuários

Existem três principais tipos de usuários para essa aplicação, e um bônus que vem de graça:

1. **Educadores autônomos**: um professor ou tutor particular, por exemplo, que deseja ter um banco de itens e aplicar avaliações a seus alunos.

2. **Respondentes**: aqueles que terão acesso para realizar as avaliações de fato.

3. **Organizações e instituições de ensino**: um conjunto de pessoas com diferentes papéis que podem trabalhar em conjunto para criar e aplicar a avaliação.

4. **(Bônus): Qualquer um** que queira criar uma avaliação ou pesquisa pública e acompanhar estatísticas e resultados.

### Ferramentas

Como já dito antes, em sua forma mais simples, uma avaliação aqui é composta de uma série do que chamamos de itens avaliativos — questões de múltipla escolha são um exemplo. Contudo, apenas juntar vários itens não faz uma avaliação, ou pelo menos não deveria. Uma avaliação tem um conceito geral, que permeia todos os seus itens: algo que se quer avaliar e por que. Por exemplo, o tipo mais comum de escola no Brasil tem turmas de alunos separadas por idade, e cada turma segue um ano curricular específico; isto é, deve ter contato com certo conteúdo específico que é definido de forma geral tanto pela própria escola como também pelo Estado, por meio, por exemplo, da [BNCC](https://basenacionalcomum.mec.gov.br/). Independentemente desse conteúdo curricular, pode existir também, como no ENEM, uma lista de habilidades específicas que a avaliação pode “medir” — continuando no exemplo do [ENEM](https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem), um item pode atender ao assunto curricular Matemática > Álgebra > Equações de Segundo Grau e, ao mesmo tempo, estar dentro da competência/habilidade C5 - H23.

Finalmente, a avaliação não termina quando um aluno a responde por completo e pode ver sua pontuação, pois os resultados como um todo ainda devem ser verificados, comparados e analisados pela entidade avaliadora, utilizando, por exemplo, a psicometria — se você nunca viu esse termo, digamos aqui que é basicamente uma forma de se avaliar a própria avaliação. Como uma analogia ao DevOps, **o ciclo de vida de uma avaliação é basicamente um ciclo de CI/CD**.

Segue disso que um usuário responsável pela concepção da avaliação deve basicamente ser capaz de:

- Criar e editar itens avaliativos;

- Montar uma avaliação usando os itens criados/reaproveitados;

- Representar e associar os assuntos curriculares abordados a esses itens;

- Fazer o mesmo para competências e/ou habilidades;

- Compartilhar e expor a avaliação para o público-alvo de respondentes;

- Analisar os resultados estatisticamente e acompanhar indicadores psicométricos em tempo quase real.

Enquanto que ao usuário respondente cabe, além do óbvio, também verificar seus resultados, inclusive, e na maior parte das vezes, também em comparação com todos os outros respondentes, por exemplo, em uma classificação.

Com o básico disposto e bem definido, vamos parar por aqui por hoje. Logo eu volto para falar sobre o sofware em si, a stack de tecnologias que pretendo usar, e quem sabe até um roadmap. Obrigado, e até breve!

— Daniel