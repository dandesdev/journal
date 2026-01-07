---
title: "Scaf, de Scaffolding"
date: 2026-01-07
lang: "br"
translationOf: "scaf-for-scaffolding"
description: "Ferramenta para obter a estrutura de arquivos. Meu primeiro pacote npm"
tags: ["npm", "scaf", "tool", "node", "javascript"]
---

Eu queria uma ferramenta cli bem mínima que me mostrasse a estrutura de pastas e arquivos das minhas coisas. Já existiam algumas, mas nenhuma era do jeitinho que eu mais queria. Então desenvolvi scaf, que vem de scaffolding (estrtura de construção, andaimes, em inglês). Scaf é minimalista, para uso rápido, mas também tem algumas configurações interessantes para os mais *nerds* fazerem uma análise um pouco mais ampla.

Como também queria algo multi-plataforma, fiz scaf baseado em nodeJs. Para instalar globalmente em sua máquina, você precisa do node e de algum gerenciador de pacotes, como o npm. Mais abaixo.

### Como usar

#### 1. Instale

```
npm install -g @dandesdev/scaf
```

De maneira alguma você precisa usar npm, sinta-se livre para usar qualquer outro gerenciador de pacotes de sua preferência.

#### 2. Execute

Decida de onde você quer ver seu scaffolding, então, pelo terminal, vá para esse local e execute

```
scaf
```

Você deve ver todo o scaffolding se materializando bem ali diante de seus olhos. Mas pode ser tão rápido que você perca.

#### 3. Faça mais

A partir daí, você pode fazer o uso de flags para fazer coisas mais interessantes; pedi ajuda a uma amiga IA e ela fez essas tabelas para explicar:

### Tabela Completa de Flags do Scaf

#### Entrada e Saída

| Flag | Descrição | Exemplo | Padrão |
|------|-----------|---------|--------|
| `-p, --path <dir>` | Diretório alvo para escanear | `scaf -p ./src` | Diretório atual |
| `-md, --maxdepth <n>` | Profundidade máxima de pastas para escanear (0 = infinito) | `scaf -md 3` | Infinito |
| `-o <file>` | Salvar saída em arquivo, pode ser texto ou json. Formato é auto-detectado pela extensão (.txt, .json). | `scaf -o mystuff.json` | Sem arquivo de saída, exibe no console |
| `-b, --buffered` | Usar modo buffered para saída de texto (constrói scaffolding completo antes de exibir) AVISO: Pode travar seu computador em estruturas muito grandes. | `scaf -b -o out.txt` | Modo streaming, imprime enquanto lê, assim há um limite baixo de uso de memória. |

#### Filtragem de Arquivos e Diretórios

| Flag | Descrição | Exemplo | Padrão |
|------|-----------|---------|--------|
| `-i, --ignore <...>` | Padrões para ignorar (separados por espaço) | `scaf -i node_modules dist config.yml *.log` | Não ignorar nada, exceto o que é especificado em arquivos .gitignore, .dockerignore ou .scafignore, veja mais abaixo. |
| `-ti, --typed-ignore` | Habilitar modo de ignore tipado, onde arquivos não precisam ter as extensões especificadas e as pastas devem ter "/" finais (veja tabela abaixo). | `scaf -ti -i node_modules/ dist/ config` | false |
| `-n, --only <...>` | Mostrar apenas arquivos correspondentes aos padrões (diretórios sempre mostrados para navegação) | `scaf -n .ts .tsx` | [] |
| `-d, --dirs-only` | Exibir apenas diretórios, ocultando arquivos | `scaf -d` | false |
| `--gitignore [true\|false]` | Respeitar regras de .gitignore. Aceita valor booleano opcional | `scaf --gitignore false` | true |
| `--dockerignore` | Respeitar regras de .dockerignore | `scaf --dockerignore` | true |
| `-a, --show-hidden` | Mostrar arquivos e pastas ocultos (dotfiles) | `scaf -a` | false |

#### Exibição e Formato

| Flag | Descrição | Exemplo | Padrão |
|------|-----------|---------|--------|
| `--size` | Exibir tamanho de cada arquivo | `scaf --size` | false |
| `--sort <type>` | Ordenar entradas por: name, size, date | `scaf --sort size` | name |
| `-q, --quiet` | Suprimir mensagens (útil para pipelines) | `scaf -q` | false |

#### Estatísticas

| Flag | Descrição | Exemplo | Padrão |
|------|-----------|---------|--------|
| `--stats [mode]` | Exibir estatísticas básicas. Modos: console, include (em arquivo), all (ambos) | `scaf --stats include -o out.txt` | console |
| `--stats-only [mode]` | Exibir apenas estatísticas detalhadas. Modos: strict (honra filtros) ou all (ignora filtros) | `scaf --stats-only all` | strict |

#### Geral

| Flag | Descrição | Exemplo | Padrão |
|------|-----------|---------|--------|
| `-h, --help` | Exibir mensagem de ajuda e sair | `scaf --help` | - |

#### Modo de Ignore Tipado (-ti)

Quando -ti está habilitado, padrões em -i se comportam diferentemente:

| Padrão | Efeito | Exemplo |
|--------|--------|---------|
| `name` | Ignora arquivos com esse basename (qualquer extensão) | `scaf -ti -i index` ignora index.js, index.ts |
| `folder/` | Ignora pastas com esse nome | `scaf -ti -i bin/` ignora pasta bin/ |
| `*.` | Ignora todos os arquivos (deixa apenas pastas) | `scaf -ti -i *.` |
| `*/` | Ignora todas as pastas (mostra apenas arquivos na raiz) | `scaf -ti -i */` |

Importante: No modo tipado, -ti e -i são destinados a serem usados juntos, e padrões devem vir imediatamente após -i.

#### Arquivos de Ignore Automático

Scaf sempre carrega esses arquivos, se presentes na raiz:

| Arquivo | Carregado por padrão? | Comentário |
|---------|----------------------|-----------|
| `.scafignore` | ✅ Sempre | Crie seus padrões personalizados |
| `.gitignore` | ✅ Com --gitignore (padrão: true) | |
| `.dockerignore` | ✅ Com --dockerignore (padrão: true) | |

Dica: Use scaf --help para ver exemplos práticos e casos de uso comuns.

### Entre em contato

Se você tiver ideias, críticas, amor ou ódio em relação a scaf, entre em contato. <3
