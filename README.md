# Bros Club Barber School 💈

## Sobre o Projeto

**Bros Club Barber School** é um site institucional desenvolvido para uma escola profissional de barbearia. O site apresenta cursos, depoimentos de alunos, galeria de trabalhos e formulário de contato para interessados em se profissionalizar na arte da barbearia.

## 🎯 Objetivo

O site foi criado para:

- **Atrair novos alunos** interessados em curso profissional de barbearia
- **Apresentar a grade curricular** completa (do básico ao avançado)
- **Mostrar resultados reais** através de depoimentos e galeria de trabalhos
- **Facilitar o contato** com formulário de solicitação de informações
- **Divulgar a escola** de forma profissional e moderna

## 🚀 Funcionalidades

- ✅ Design moderno e responsivo (mobile-first)
- ✅ Animações suaves e interativas
- ✅ Menu fullscreen com navegação fluída
- ✅ Grade curricular com 6 módulos detalhados
- ✅ Seção de vídeos demonstrativos
- ✅ Depoimentos de alunos formados
- ✅ Galeria de trabalhos com efeito hover
- ✅ FAQ com perguntas frequentes
- ✅ Formulário de contato funcional
- ✅ Botão flutuante de WhatsApp
- ✅ Tela de carregamento personalizada
- ✅ Código otimizado e minificado

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **Tailwind CSS** - Framework de estilização
- **JavaScript** - Interatividade e funcionalidades
- **Lucide Icons** - Ícones modernos e leves
- **Terser** - Minificação e ofuscação de código
- **Google Fonts** - Tipografias personalizadas (Cinzel, Inter, Space Grotesk)

## 📦 Estrutura do Projeto

```
BrosClub/
├── index.html          # Página principal com preloader
├── render.js           # Código fonte (não minificado)
├── render.min.js       # Código minificado e ofuscado
├── css/
│   ├── main.css       # Estilos compilados do Tailwind
│   └── tailwind.css   # Arquivo de configuração Tailwind
├── public/
│   └── manifest.json  # Configurações PWA
├── package.json       # Dependências do projeto
├── tailwind.config.js # Configuração do Tailwind
└── README.md          # Documentação
```

## 🎨 Paleta de Cores

- **Fundo escuro**: `#0a0a0a` (dark-900)
- **Dourado**: `#DAA520` (gold-500) - Cor de destaque
- **Texto claro**: `#f5f5f5` (light-50)
- **Acentos**: Gradientes e overlays com transparência

## 🔒 Segurança e Otimização

O código JavaScript foi minificado e ofuscado usando **Terser** para:

- Reduzir o tamanho do arquivo
- Dificultar engenharia reversa no DevTools
- Melhorar o desempenho de carregamento
- Proteger a lógica da aplicação

## 🚀 Como Executar

1. Clone o repositório ou baixe os arquivos
2. Abra o arquivo `index.html` em um navegador moderno
3. Ou use um servidor local como Live Server do VS Code

```bash
# Se usar npm/npx
npx serve .
```

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:

- 📱 Smartphones (320px+)
- 💻 Tablets (768px+)
- 🖥️ Desktops (1024px+)
- 🖥️ Telas grandes (1920px+)

## 🎓 Módulos do Curso

1. **Cortes Clássicos** - Fundamentos essenciais
2. **Fade/Degradê** - Técnica mais requisitada
3. **Barboterapia** - Modelagem de barba profissional
4. **Visagismo** - Leitura facial e consultoria
5. **Pigmentação** - Disfarce e efeitos especiais
6. **Gestão** - Como transformar habilidade em negócio

## 📞 Contato

O site inclui múltiplas formas de contato:

- Formulário de solicitação de informações
- Botão flutuante de WhatsApp
- Links para redes sociais (Instagram)
- Informações de endereço

## 🔧 Desenvolvimento

### Minificação do Código

Para minificar o código após alterações:

```bash
npm install -g terser
terser render.js -c -m -o render.min.js
```

### Build do Tailwind CSS

Para recompilar os estilos:

```bash
npm run build
```

## ⚡ Performance

- **Preloader** evita flash de conteúdo não estilizado
- **Critical CSS inline** para renderização rápida
- **Lazy loading** de recursos não críticos
- **Código minificado** reduz tamanho em ~70%
- **Fontes otimizadas** com preconnect

## 📄 Licença

© 2026 Atoms Code. Todos os direitos reservados.

---
