# D&D Beyond Mini

<div align="center">
  
  ![D&D Beyond Mini](https://img.shields.io/badge/D%26D-5e-red?style=for-the-badge)
  ![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
  ![Prisma](https://img.shields.io/badge/Prisma-Latest-2D3748?style=for-the-badge&logo=prisma)
  
  **A modern, feature-rich character manager and compendium for Dungeons & Dragons 5th Edition**
  
  [Live Demo](#) · [Report Bug](https://github.com/Slowriide/dungeons-and-dragons-next/issues) · [Request Feature](https://github.com/Slowriide/dungeons-and-dragons-next/issues)
  
</div>

---

## 📖 About The Project

D&D Beyond Mini is a comprehensive web application built for Dungeons & Dragons players and Dungeon Masters. It provides an intuitive character creation wizard, searchable compendiums for monsters, spells, equipment, and more—all powered by the official D&D 5e API.

### ✨ Key Features

- 🎭 **Step-by-Step Character Creator** - Guided wizard for creating D&D characters with validation and auto-calculation
- 🔐 **User Authentication** - Secure login with Google OAuth and email/password
- 💾 **Character Management** - Save, view, edit, and delete your characters
- 🔍 **Global Search** - Search across classes, races, monsters, spells, equipment, and magic items
- 📚 **Complete Compendiums**:
  - 🐉 Monster Manual with CR filtering
  - 📜 Spell Database with level and school filtering
  - ⚔️ Equipment Catalog with price and weight filters
  - 🎭 All 12 D&D Classes with features and subclasses
  - 🧝 All 9 D&D Races with traits and bonuses
  - ✨ Magic Items collection
- 🎲 **Dice Roller** - Virtual dice roller for all standard D&D dice
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile
- 🎨 **Beautiful UI** - Modern interface with Tailwind CSS and shadcn/ui

---

## 🛠️ Tech Stack

### Frontend

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Lightweight state management
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms
- **[Zod](https://zod.dev/)** - Schema validation

### Backend

- **[NextAuth.js v5](https://next-auth.js.org/)** - Authentication
- **[Prisma](https://www.prisma.io/)** - Type-safe ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Database
- **[D&D 5e API](https://www.dnd5eapi.co/)** - Official D&D data source

### Development

- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm
- **PostgreSQL** database
- **Google OAuth credentials** (optional, for Google login)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Slowriide/dungeons-and-dragons-next.git
   cd dungeons-and-dragons-next
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/dnd_db"

   # NextAuth
   AUTH_SECRET="your-secret-key-here"  # Generate with: openssl rand -base64 32
   AUTH_URL="http://localhost:3000"

   # Google OAuth (optional)
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   ```

4. **Set up the database**

   ```bash
   # Run Prisma migrations
   npx prisma migrate dev

   # Generate Prisma client
   npx prisma generate
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
dungeons-and-dragons-next/
├── app/                          # Next.js App Router pages
│   ├── api/                      # API routes
│   ├── auth/                     # Authentication pages
│   ├── characters/               # Character management
│   ├── classes/                  # D&D classes
│   ├── dice/                     # Dice roller
│   ├── equipment/                # Equipment catalog
│   ├── magic-items/              # Magic items
│   ├── monsters/                 # Monster manual
│   ├── races/                    # D&D races
│   └── spells/                   # Spell compendium
├── components/                   # React components
│   ├── ui/                       # shadcn/ui components
│   ├── characters/               # Character-related components
│   ├── monsters/                 # Monster components
│   └── ...                       # Other feature components
├── actions/                      # Server Actions
│   ├── auth/                     # Authentication actions
│   └── characters/               # Character CRUD operations
├── hooks/                        # Custom React hooks
├── services/                     # API service layer
├── store/                        # Zustand stores
├── utils/                        # Utility functions
├── data/                         # Static data and constants
├── interface/                    # TypeScript interfaces
├── prisma/                       # Prisma schema and migrations
│   └── schema.prisma             # Database schema
└── public/                       # Static assets
```

---

## 🔑 Key Features Explained

### Character Creation Wizard

Multi-step form with validation:

1. **Basic Info** - Name, class, level
2. **Race Selection** - Choose race with traits and bonuses
3. **Attributes** - Assign ability scores
4. **Background** - Select background and personality
5. **Equipment** - Choose starting equipment

**Features:**

- ✅ Real-time validation with Zod schemas
- ✅ Auto-calculation of modifiers and stats
- ✅ Dynamic options based on class/race
- ✅ Progress saved in Zustand store
- ✅ Character saved to database (if logged in)

### Authentication System

- **Google OAuth** - One-click login
- **Email/Password** - Traditional authentication
- **Session Management** - JWT-based sessions
- **Protected Routes** - Middleware-based route protection

### Search & Filtering

- **Global Search** - Search across all content types
- **Advanced Filters**:
  - Monsters: Challenge Rating, Type, Size
  - Spells: Level, School, Class
  - Equipment: Category, Price, Weight
- **Real-time Results** - Debounced search with instant feedback

---

## 🗄️ Database Schema

### Key Models

```prisma
model User {
  id            String      @id @default(cuid())
  email         String      @unique
  name          String?
  password      String?     // Null for OAuth users
  characters    Character[]
  accounts      Account[]   // OAuth accounts
}

model Character {
  id                String   @id @default(cuid())
  userId            String
  name              String
  characterClass    String
  race              String
  level             Int
  baseAttributes    Json
  skills            Json
  equipment         Json
  // ... more fields
}
```

See [prisma/schema.prisma](./prisma/schema.prisma) for the complete schema.

---

## 🔐 Authentication Setup

### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://your-domain.com/api/auth/callback/google` (production)
6. Copy Client ID and Client Secret to `.env`

---

## 🎨 Styling

This project uses:

- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for pre-built accessible components
- **Custom fonts**:
  - `Geist Sans` - Main UI font
  - `Cinzel` - Decorative headers

### Color Scheme

- Primary: Red (`#E63946`)
- Background: Dark mode support
- Accent colors for different content types

---

## 📝 Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server

# Database
npx prisma migrate dev      # Run migrations
npx prisma generate         # Generate Prisma client
npx prisma studio          # Open Prisma Studio

# Code Quality
npm run lint         # Run ESLint
```

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production

```env
DATABASE_URL="postgresql://..."
AUTH_SECRET="..."
AUTH_URL="https://your-domain.com"
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
```

**Important:** Update Google OAuth redirect URIs with your production domain.

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

This project is for educational purposes. D&D content is property of Wizards of the Coast.

---

## 🙏 Acknowledgments

- [D&D 5e API](https://www.dnd5eapi.co/) - Official D&D data
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Wizards of the Coast](https://dnd.wizards.com/) - D&D 5e content

---

## 📧 Contact

Thiago Gobbi - [@Slowriide](https://github.com/Slowriide)

Linkedin - [Thiago Gobbi](https://www.linkedin.com/in/thiago-gobbi-b500421a6/)

Project Link: [https://github.com/Slowriide/dungeons-and-dragons-next](https://github.com/Slowriide/dungeons-and-dragons-next)

---

<div align="center">
  Made with ❤️ for D&D players everywhere
</div>
