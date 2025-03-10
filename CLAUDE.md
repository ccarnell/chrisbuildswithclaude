# CLAUDE.md - Guide for Agentic Coding Assistants

## Build/Test/Lint Commands
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Run production server
- `npm run lint`: Run ESLint

## Code Style Guidelines
- **Formatting**: 2-space indentation, single quotes, no semicolons, 80 char limit
- **Imports**: Group by type (React/Next.js, components, utils), sort alphabetically
- **Components**: Use function declarations with explicit return types
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Types**: Prefer explicit TypeScript types, avoid `any`
- **Styling**: Uses TailwindCSS, prefer utility classes over custom CSS
- **Error Handling**: Use try/catch for async operations, provide fallbacks

## Project Structure
- `app/`: Next.js 13+ app router structure with page components
- `components/`: Reusable UI components, especially in /ui subfolder
- `hooks/`: Custom React hooks
- `lib/`: Utilities and constants