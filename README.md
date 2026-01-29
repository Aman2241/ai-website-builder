# AI Website Builder

A modern, "AI-powered" website builder that generates stunning, responsive websites based on natural language prompts. Built with Next.js and TypeScript, this application features a real-time chat interface and a live preview pane.

## ✨ Features

- **Natural Language Generation**: Just describe what you want (e.g., "create a restaurant website with a menu"), and the system generates it.
- **Diverse Templates**: Supports a wide range of website types:
    - 🛍️ **E-commerce**: Includes product grids and a functional shopping cart.
    - 💼 **Business/Corporate**: Professional layouts with services and contact forms.
    - 🍽️ **Restaurant**: Gourmet designs with menu listings and reservation booking.
    - 🏋️ **Gym/Fitness**: Bold designs with membership plans.
    - 📅 **Events**: Conference pages with agenda and ticket registration.
    - 🎨 **Portfolio**: Showcase for creatives with case studies.
    - 📝 **Blog**: Content-focused layouts for writers.
- **Interactive Elements**: All generated websites come with working JavaScript components:
    - "Add to Cart" updates counters.
    - Contact forms validate and show success alerts.
    - "Book Table" / "Register" buttons trigger confirmation dialogs.
- **Real-time Preview**: See your changes instantly in the safe, sandboxed preview pane.
- **Premium Aesthetics**: Dark-mode first design, glassmorphism effects, and smooth animations.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules with CSS Variables (Vanilla CSS, no Tailwind dependency)
- **Deployment**: Ready for Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/ai-website-builder.git
    cd ai-website-builder
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the app:**
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 💡 How to Use

1.  Click **"Start Building"** on the landing page.
2.  In the chat sidebar, type a prompt. Examples:
    - *"Create an online store for sneakers"*
    - *"I need a website for my digital marketing agency"*
    - *"Build a landing page for a tech conference"*
    - *"Create a restaurant website for an Italian bistro"*
3.  The "AI" will generate the code, and the website will appear in the specific preview pane on the right.
4.  Interact with the preview! Click buttons, fill forms, and test the responsiveness.

## 🧠 "AI" Logic

Currently, the application uses a sophisticated mock AI service (`src/lib/ai-mock.ts`) that maps keywords in your prompt to robust, pre-built templates. This ensures high-quality, bug-free outputs for demonstration purposes.

## 📁 Project Structure

```
src/
├── app/
│   ├── builder/       # The main builder interface page
│   ├── layout.tsx     # Global layout and font setup
│   ├── page.tsx       # Landing page
│   └── globals.css    # Global theme variables
├── components/
│   ├── Chat/          # Chat window, input, and bubbles
│   ├── Layout/        # Sidebar, Header, Main container
│   └── Preview/       # Iframe preview component
└── lib/
    └── ai-mock.ts     # Mock AI service and templates
```
