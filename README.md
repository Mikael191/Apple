# X-PHONE Landing Page

Uma Landing Page de alta fidelidade para um smartphone futurista, desenvolvida com tecnologia de ponta para evocar uma sensação premium e misteriosa.

## 🚀 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Animações:** [Framer Motion](https://www.framer.com/motion/)
- **Ícones:** [Lucide React](https://lucide.dev/)

## 🛠️ Como rodar localmente

1. **Clone o repositório:**
   ```bash
   git clone <SEU_REPOSITORIO_URL>
   cd futuristic-landing-page
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse:**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## ☁️ Como fazer deploy na Vercel

A Vercel é a plataforma criadora do Next.js e a maneira mais fácil de colocar este projeto no ar.

### Opção 1: Via Interface Web (Recomendado)

1. Faça push do seu código para um repositório Git (GitHub, GitLab ou Bitbucket).
2. Crie uma conta ou faça login na [Vercel](https://vercel.com).
3. No dashboard, clique em **"Add New..."** -> **"Project"**.
4. Importe o repositório Git que você acabou de criar.
5. A Vercel detectará automaticamente que é um projeto **Next.js**. As configurações de build padrão (`npm run build`) funcionarão perfeitamente.
6. Clique em **"Deploy"**.
7. Aguarde alguns instantes e seu site estará no ar!

### Opção 2: Via Vercel CLI

1. Instale a Vercel CLI globalmente:
   ```bash
   npm i -g vercel
   ```

2. Na pasta do projeto, execute:
   ```bash
   vercel
   ```

3. Siga as instruções no terminal (faça login, confirme as configurações padrão).

## 📁 Estrutura do Projeto

- `app/page.tsx`: Página principal contendo todas as seções (Hero, Performance, Vision, Features).
- `public/`: Contém os assets estáticos (imagens).
- `components/`: Componentes UI reutilizáveis (se houver extração futura).

## ✨ Destaques de UX/UI

- **Hero:** Animação de flutuação e entrada suave.
- **Performance:** Scrollytelling com partículas animadas.
- **Vision:** Efeito de scan biométrico.
- **Features:** Bento Grid com efeito de vidro e tilt 3D.
