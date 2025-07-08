
# RATTHA_FRONTEND

This is a frontend project built using [Next.js](https://nextjs.org/) with [TypeScript](https://www.typescriptlang.org/) and [Tailwind CSS](https://tailwindcss.com/). It is structured for scalability and component reuse across various business needs.

---

## 📁 Folder Structure

```
.
├── app/                         # App directory for Next.js pages
├── shared/                      # Reusable components (Header, Footer, etc.)
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── NavLink.tsx
│   ├── StarRating.tsx
│   └── ...
├── constants/                   # Static constants
│   ├── assets.ts
│   └── content.ts
├── public/                      # Static public assets
│   ├── assets/
│   │   ├── icons/               # SVG icons
│   │   └── images/              # Image assets
├── types/                       # TypeScript types
│   ├── banner.ts
│   ├── common.ts
│   ├── contact.ts
│   ├── faq.ts
│   └── ...
├── .env                         # Environment variables
├── Dockerfile                   # Docker config
├── next.config.ts               # Next.js config
├── tsconfig.json                # TypeScript config
├── postcss.config.mjs           # PostCSS config
├── eslint.config.mjs            # ESLint config
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

```bash
git clone https://solbaacken.git.beanstalkapp.com/rattha_frontend.git -o beanstalk
cd rattha_frontend
npm install   # or yarn install
```

### Running in Development

```bash
npm run dev
```

### Building for Production

```bash
npm run build
npm run start
```

---

## 🧩 Tech Stack

- **Next.js** – App framework
- **TypeScript** – Type-safe development
- **Tailwind CSS** – Utility-first styling
- **Docker** – Containerization (optional)
- **ESLint + Prettier** – Code quality and formatting

---

## 🤝 Contribution Guidelines

1. **Fork** this repository.
2. Create a new **feature branch**:
   ```bash
   git checkout -b feat/your-feature-name
   ```
3. Make your changes and **commit**:
   ```bash
   git commit -m "feat: describe your feature"
   ```
4. **Push** your changes:
   ```bash
   git push origin feat/your-feature-name
   ```
5. Open a **Pull Request**.

> Please ensure your code passes lint checks and follows the project structure.

---

## 📫 Contact

For any questions or collaboration ideas, reach out to the team or file an issue.
