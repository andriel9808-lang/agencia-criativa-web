# Agência Criativa Web - Refatoração SASS

Projeto refatorado usando SASS seguindo os requisitos da EBAC (Escola Britânica de Artes Criativas e Tecnologia).

## O Que Mudou

### Antes (CSS Modular)
- 17 arquivos CSS separados
- Variáveis CSS (Custom Properties)
- Código duplicado em vários lugares
- Múltiplas importações no HTML

### Depois (SASS)
- 6 arquivos SASS organizados
- Variáveis SASS
- 8 mixins reutilizáveis
- Aninhamento BEM
- Um único CSS compilado
- Código otimizado e sem duplicação

## Estrutura de Arquivos

```
agencia-criativa-web/
├── scss/
│   ├── _variaveis.scss      # Todas as variáveis (cores, fontes, espaçamentos)
│   ├── _mixins.scss          # 8 mixins reutilizáveis
│   ├── _base.scss            # Reset e estilos base
│   ├── _componentes.scss     # Componentes reutilizáveis
│   ├── _layout.scss          # Estrutura do site
│   └── estilos.scss          # Arquivo principal
├── css/
│   └── estilos.css           # CSS compilado (gerado automaticamente)
├── index.html                # HTML atualizado
├── script.js                 # JavaScript (sem alterações)
├── package.json
└── README.md
```

## Instalação e Uso

### 1. Instalar Dependências

```bash
npm install
```

### 2. Desenvolver (Modo Watch)

```bash
npm run sass
```

Este comando:
- Observa mudanças nos arquivos SASS
- Compila automaticamente para CSS
- Mantém rodando enquanto você desenvolve

### 3. Compilar para Produção

```bash
npm run build:prod
```

Este comando:
- Compila SASS para CSS
- Minifica o código
- Otimiza para produção

## Arquivos SASS Explicados

### _variaveis.scss
Todas as variáveis do projeto:

```scss
// Cores
$cor-primaria: #8B0000;
$cor-secundaria: #DC143C;

// Espaçamentos
$espacamento-sm: 1rem;
$espacamento-md: 2rem;

// Breakpoints
$breakpoint-mobile: 480px;
$breakpoint-tablet: 768px;
```

### _mixins.scss
8 mixins reutilizáveis:

1. `botao-base` - Estilos base para botões
2. `hover-levitacao` - Efeito hover de levitação
3. `card-base` - Estilos base para cards
4. `flex-center` - Centralização flexbox
5. `grid-responsivo` - Grid adaptativo
6. `texto-responsivo` - Fontes com clamp
7. `container` - Container centralizado
8. `gradiente-vermelho` - Gradiente reutilizável

Exemplo de uso:
```scss
.meu-componente {
  @include card-base;
  @include hover-levitacao;
}
```

### _base.scss
Reset CSS e estilos fundamentais:
- Reset de margins e paddings
- Estilos de body
- Tipografia base (h1-h6, p, strong)
- Links, listas, imagens
- Responsividade mobile

### _componentes.scss
Componentes reutilizáveis com BEM:

**Container:**
```scss
.container
```

**Botões:**
```scss
.button
.button--primary
.button--secondary
.button--full-width
```

**Cards:**
```scss
.card
.card--elevated
.card--dark
.card--bordered-left
.card--hoverable
.card--compact
.card--large
```

**Seções:**
```scss
.section
.section--dark
.section--elevated
.section__title
.section__subtitle
```

**Formulários:**
```scss
.form
.form__group
.form__label
.form__input
.form__textarea
```

### _layout.scss
Toda a estrutura do site:

- Header (com navegação responsiva)
- Hero (banner principal)
- About (sobre nós)
- Services (serviços com grid)
- Testimonials (depoimentos)
- Contact (contato com formulário)
- Footer (rodapé)

### estilos.scss
Arquivo principal que importa todos:

```scss
@use 'variaveis';
@use 'mixins';
@use 'base';
@use 'componentes';
@use 'layout';
```

## Recursos SASS Utilizados

### 1. Variáveis

```scss
$cor-primaria: #8B0000;

.botao {
  background: $cor-primaria;
}
```

### 2. Aninhamento BEM

```scss
.header {
  &__container { }
  &__logo {
    &-text { }
    &-highlight { }
  }
  &__nav {
    &-list { }
    &-item { }
    &-link {
      &:hover { }
    }
  }
}
```

### 3. Mixins

```scss
@mixin botao-base {
  padding: 1rem 2.5rem;
  border-radius: 4px;
  // ...
}

.button {
  @include botao-base;
}
```

### 4. Operadores

```scss
padding: calc($espacamento-md / 2);
margin-bottom: $espacamento-sm;
```

### 5. @use (Importação Moderna)

```scss
@use 'variaveis' as *;
@use 'mixins';

.elemento {
  color: $cor-primaria; // De variaveis
  @include flex-center; // De mixins
}
```

## Metodologia BEM Mantida

Toda a estrutura BEM do projeto original foi preservada:

```
.bloco
.bloco__elemento
.bloco__elemento--modificador
.bloco--modificador
```

Exemplos:
- `.header__nav-list`
- `.button--primary`
- `.card--elevated`
- `.section--dark`

## Vantagens da Refatoração

### Organização
- Código modular e organizado
- Fácil localizar e modificar estilos
- Hierarquia clara de arquivos

### Manutenção
- Mudanças centralizadas em variáveis
- Mixins eliminam duplicação
- Código reutilizável

### Performance
- Um único arquivo CSS
- Código minificado em produção
- Menos requisições HTTP

### Desenvolvimento
- Aninhamento facilita leitura
- Variáveis evitam erros
- Mixins aceleram desenvolvimento

## Comandos Disponíveis

```bash
# Instalar dependências
npm install

# Modo desenvolvimento (watch)
npm run sass

# Compilar uma vez
npm run build

# Compilar minificado
npm run build:prod
```

## Compatibilidade

- Node.js 14+
- SASS 1.69.0+
- Navegadores modernos (Chrome, Firefox, Safari, Edge)

## Requisitos EBAC Atendidos

- [x] Estrutura com partials (_variaveis, _mixins, _base, etc)
- [x] Arquivo _variaveis.scss com todas as variáveis
- [x] Arquivo _mixins.scss com pelo menos 2 mixins (criamos 8)
- [x] Uso de operadores SASS (calc)
- [x] Aninhamento de seletores
- [x] Metodologia BEM aplicada
- [x] Uso de @use (moderno)
- [x] Compilação via Node.js
- [x] Pasta scss/ separada de css/
- [x] index.html atualizado
- [x] Repositório público no GitHub

## Comparação: CSS vs SASS

### CSS (Antes)
```css
.button {
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #8B0000, #DC143C);
}

.button:hover {
  transform: translateY(-2px);
}

.button--secondary {
  padding: 1rem 2.5rem;
  background: transparent;
}
```

### SASS (Depois)
```scss
@mixin botao-base {
  padding: 1rem 2.5rem;
}

.button {
  @include botao-base;
  @include gradiente-vermelho;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &--secondary {
    @include botao-base;
    background: transparent;
  }
}
```

## Troubleshooting

### CSS não atualiza
1. Verifique se `npm run sass` está rodando
2. Recarregue a página (Ctrl+F5)
3. Limpe o cache do navegador

### Erro de importação
1. Certifique-se de usar `@use` e não `@import`
2. Adicione `as *` se quiser usar variáveis diretamente
3. Verifique os nomes dos arquivos

### Variável não encontrada
1. Verifique se o arquivo está importando variáveis: `@use 'variaveis' as *;`
2. Confirme o nome correto da variável

## Próximos Passos

1. Testar o site compilado
2. Verificar responsividade em diferentes dispositivos
3. Fazer commit das mudanças
4. Push para o GitHub
5. Compartilhar o link do repositório

## Licença

MIT

## Autor

Desenvolvido como parte do curso EBAC - Desenvolvimento Full Stack