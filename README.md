# Agência Criativa Web

Website responsivo de uma agência de design digital com tema gótico desenvolvido para aplicar conceitos avançados de CSS, incluindo Flexbox, CSS Grid, design responsivo e unidades relativas. Projeto desenvolvido como atividade prática do curso da EBAC.

## Descrição do Projeto

A Agência Criativa Web é um site institucional completo que apresenta os serviços de uma agência digital fictícia. O projeto foi desenvolvido com foco em design responsivo, acessibilidade e experiência do usuário, aplicando as melhores práticas de HTML5 e CSS3.

## Funcionalidades

* Página inicial com banner de destaque
* Seção Sobre Nós com valores da agência
* Portfólio de serviços organizados em grid
* Depoimentos de clientes
* Formulário de contato funcional
* Menu de navegação responsivo com hambúrguer menu
* Design totalmente adaptável para diferentes dispositivos
* Smooth scroll entre seções
* Validação de formulário

## Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla)
* Flexbox
* CSS Grid
* Media Queries
* Unidades Relativas (rem, em, %, vh, vw, fr)

## Conceitos Aplicados

### Layout e Posicionamento
* **Flexbox**: Utilizado no header, navegação, seção hero e layout da seção sobre
* **CSS Grid**: Aplicado nas seções de serviços, depoimentos e contato para criar layouts responsivos
* **Position Sticky**: Menu fixo que acompanha o scroll

### Responsividade
* **Mobile First**: Design adaptável para dispositivos móveis
* **Media Queries**: Breakpoints em 480px, 768px e 1400px
* **Menu Hambúrguer**: Navegação otimizada para telas pequenas
* **Grid Responsivo**: Utilização de `auto-fit` e `minmax()` para adaptação automática

### Unidades Relativas
* **rem/em**: Tipografia e espaçamentos escaláveis
* **% (porcentagem)**: Larguras fluidas
* **vh/vw**: Hero section ocupando viewport
* **fr (fractional units)**: Distribuição proporcional no Grid

### Design Visual
* Paleta de cores gótica (vermelho sangue e preto)
* Gradientes e sombras para profundidade
* Transições suaves em hover
* Ícones SVG personalizados
* Tipografia hierárquica com `clamp()` para responsividade

## Estrutura do Projeto

```
agencia-criativa-web/
├── index.html
├── estilos.css
└── README.md
```

## Seções do Site

### 1. Header
Menu de navegação fixo com logo da agência e links para todas as seções.

### 2. Home (Hero)
Banner de boas-vindas com título principal, descrição e call-to-action.

### 3. Sobre Nós
Apresentação da agência, missão e valores organizados com Flexbox.

### 4. Serviços
Grid responsivo com 6 serviços oferecidos:
- Design Gráfico
- Desenvolvimento Web
- Branding
- UI/UX Design
- Marketing Digital
- Produção de Conteúdo

### 5. Depoimentos
Comentários de clientes fictícios em layout de grid responsivo.

### 6. Contato
Informações de contato e formulário funcional com validação.

### 7. Footer
Rodapé com informações de copyright.

## Como Usar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/agencia-criativa-web.git
```

2. Navegue até a pasta do projeto:
```bash
cd agencia-criativa-web
```

3. Abra o arquivo `index.html` no navegador:
   - Clique duas vezes no arquivo, ou
   - Use um servidor local (ex: Live Server no VS Code)

## Responsividade

O site foi desenvolvido para funcionar perfeitamente em diferentes tamanhos de tela:

### Desktop (acima de 1400px)
- Grid de 3 colunas nos serviços
- Layout completo do menu horizontal
- Espaçamentos amplos

### Tablet (768px - 1400px)
- Grid de 2 colunas
- Menu hambúrguer ativado
- Ajustes de espaçamento

### Mobile (até 768px)
- Grid de 1 coluna
- Menu vertical
- Botões e textos otimizados
- Font-size reduzido

## Destaques Técnicos

### Flexbox
```css
.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

### CSS Grid
```css
.servicos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--espacamento-md);
}
```

### Unidades Relativas
```css
:root {
    --espacamento-sm: 1rem;
    --espacamento-md: 2rem;
    --espacamento-lg: 4rem;
}
```

### Responsividade com clamp()
```css
.hero-content h2 {
    font-size: clamp(2rem, 5vw, 3.5rem);
}
```

## Validações e Interatividade

* Formulário com campos obrigatórios
* Validação HTML5 nativa
* Feedback visual em foco (focus states)
* Animações suaves em hover
* Smooth scroll entre seções
* Menu responsivo com JavaScript

## Acessibilidade

* Estrutura semântica HTML5
* Labels associados aos inputs
* Atributos ARIA no menu hambúrguer
* Contraste adequado de cores
* Navegação por teclado

## Navegadores Suportados

* Google Chrome (última versão)
* Mozilla Firefox (última versão)
* Microsoft Edge (última versão)
* Safari (última versão)
* Opera (última versão)

## Melhorias Futuras

* Integração com backend para envio real de formulários
* Animações mais elaboradas com CSS animations
* Modo claro/escuro (theme switcher)
* Galeria de projetos realizados
* Blog integrado
* Integração com redes sociais

## Autor

Projeto desenvolvido como atividade prática do curso de Desenvolvimento Web da EBAC.

## Licença

Este projeto é de código aberto e está disponível para fins educacionais.