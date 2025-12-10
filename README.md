# DevMetrics Pro AI - Premium Developer Analytics Platform

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

**Created by [AshrafMorningstar](https://github.com/AshrafMorningstar)**

Transform your GitHub contributions into stunning cinematic 4K visualizations powered by AI. DevMetrics Pro AI goes beyond static badges to create portfolio-ready video content that analyzes your growth, skills, and coding journey with breathtaking aesthetics.

---

## ✨ Features

### 🎬 Cinematic Visualizations

- **Time-Lapse Evolution**: Watch your commit history grow year by year with dynamic animations
- **Skills Radar**: Interactive 3D spider charts showcasing your language proficiency
- **Basic Stats**: Elegant animated cards displaying your key metrics
- **Contribution Flow**: Particle-based visualization of your coding activity

### 🤖 AI-Powered Insights

- Deep analysis using OpenAI GPT-4
- Productivity trend detection
- Skill growth trajectory mapping
- Personalized recommendations for career development

### 🎨 Premium Design

- Glassmorphism UI components
- Cinematic gradient backgrounds
- Smooth spring-based animations
- 4K resolution support (1920x1080)
- 60fps rendering capability

### 🔗 Multi-Platform Integration

- GitHub (primary)
- GitLab support
- Stack Overflow analytics
- NPM package statistics

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- GitHub Personal Access Token
- OpenAI API Key (optional, for AI features)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AshrafMorningstar/devmetrics-pro-ai.git
   cd devmetrics-pro-ai
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   GITHUB_TOKEN=your_github_personal_access_token
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Launch Remotion Studio**
   ```bash
   npm run studio
   ```
   This opens the video editor to preview and customize animations.

---

## 🎥 Rendering Videos

### Render a specific composition:

```bash
npm run render
```

### Available Compositions:

- `GitHubStats` - Basic statistics card (5 seconds)
- `SkillsRadar` - Skills proficiency radar (5 seconds)
- `TimeLapse` - Simple year-by-year growth (10 seconds)
- `TimeLapseEvolution` - Advanced evolution timeline (10 seconds)

---

## 🛠️ Tech Stack

| Category          | Technology                |
| ----------------- | ------------------------- |
| **Framework**     | Next.js 16, React 19      |
| **Animation**     | Remotion 4.0              |
| **Styling**       | Tailwind CSS v4           |
| **AI/ML**         | OpenAI API                |
| **Language**      | TypeScript                |
| **UI Components** | Lucide React Icons        |
| **Utilities**     | Zod, clsx, tailwind-merge |

---

## 📁 Project Structure

```
devmetrics-pro-ai/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── globals.css   # Global styles & design tokens
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Landing page
│   ├── scenes/           # Remotion video scenes
│   │   ├── BasicStats.tsx
│   │   ├── SkillsRadar.tsx
│   │   ├── TimeLapse.tsx
│   │   └── TimeLapseEvolution.tsx
│   ├── remotion/         # Remotion configuration
│   │   ├── Root.tsx      # Composition registry
│   │   └── index.ts      # Entry point
│   ├── api/              # API integrations
│   ├── ai/               # AI analysis modules
│   ├── components/       # Reusable React components
│   └── utils/            # Utility functions
├── public/               # Static assets
├── package.json
└── README.md
```

---

## 🎨 Customization

### Modify Color Scheme

Edit `src/app/globals.css` to change the color palette:

```css
:root {
  --primary: #8b5cf6; /* Violet */
  --secondary: #06b6d4; /* Cyan */
  --accent: #f472b6; /* Pink */
}
```

### Add New Scenes

1. Create a new file in `src/scenes/YourScene.tsx`
2. Register it in `src/remotion/Root.tsx`:

```tsx
<Composition
  id="YourScene"
  component={YourScene}
  durationInFrames={150}
  fps={30}
  width={1920}
  height={1080}
/>
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Remotion team for the amazing video framework
- Vercel for Next.js
- OpenAI for GPT-4 API
- GitHub for the GraphQL API

---

## 📧 Contact

**AshrafMorningstar**

- GitHub: [@AshrafMorningstar](https://github.com/AshrafMorningstar)
- Project Link: [https://github.com/AshrafMorningstar/devmetrics-pro-ai](https://github.com/AshrafMorningstar/devmetrics-pro-ai)

---

<div align="center">

**Made with ❤️ by AshrafMorningstar**

⭐ Star this repo if you find it useful!

</div>
