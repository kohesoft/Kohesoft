# Kohesoft Development Instructions

## Project Overview
This is a corporate website built with Next.js 14 frontend and Spring Boot backend, following strict Turkish development standards. The project emphasizes SOLID principles, DRY code, and responsive design using Tailwind CSS.

## Architecture & Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: JavaScript (not TypeScript)
- **Styling**: Tailwind CSS (locally installed, never CDN)
- **Animations**: Framer Motion
- **State Management**: React Context or Zustand
- **Structure**: Modular components with single responsibility

### Backend
- **API**: Spring Boot
- **Database**: PostgreSQL  
- **Authentication**: OAuth2
- **Deployment**: VM hosting

### Key Features
- Responsive design (mobile-first)
- Services page, portfolio gallery, team introduction
- Contact forms, blog/news section
- SEO optimization, multi-language support
- Admin panel, social media integration

## Development Rules (MANDATORY)

### Code Quality
1. **SOLID Principles**: Every class/module has single responsibility, open for extension but closed for modification
2. **DRY**: Never repeat code or information
3. **KISS**: Choose the simplest possible solution
4. **No CDN**: All libraries must be installed locally (including Tailwind)

### File Organization
- Keep file sizes reasonable, avoid bloated components
- One responsibility per file/module
- Check for existing reusable components before creating new ones
- Modular structure with clear separation of concerns

### UI/UX Standards
- **Tailwind CSS only** for styling
- **Fully responsive** design required
- Modern, clean aesthetic
- Smooth animations with Framer Motion

### Workflow
1. Before any changes, check existing code for reusable patterns
2. **Always get user approval** before implementing changes
3. Follow the detection → planning → approval → implementation cycle
4. Must add `*ruleprompt*` at the end of responses when all rules are followed

## Key Conventions

### Component Structure
```javascript
// Single responsibility components
const ServiceCard = ({ title, description, icon }) => {
  // Tailwind classes, no inline styles
  // Responsive design patterns
}
```

### API Integration
- Use Spring Boot endpoints
- Handle OAuth2 authentication
- PostgreSQL data layer
- Error handling with user-friendly messages

### State Management
```javascript
// Use Context for global state
const AppContext = createContext();
// Or Zustand for complex state
const useStore = create((set) => ({...}));
```

## Development Commands
- `npm run dev` - Start Next.js development server
- `npm run build` - Build for production
- `npm run lint` - Code quality checks
- `tailwindcss build` - Compile Tailwind (local installation)

## Critical Patterns
- All external dependencies must be self-hosted
- Turkish language primary, multi-language support planned
- Corporate branding and professional design standards
- SEO-first approach with meta tags and structured data

## Common Pitfalls to Avoid
- Using CDN links for any library
- Creating components without checking for existing solutions
- Violating single responsibility principle
- Making changes without user approval
- Forgetting responsive design considerations
- Missing the `*ruleprompt*` confirmation marker

When working on this codebase, always reference the development rules in `.github/prompts/rule.prompt.md` and ensure compliance with all specified standards.