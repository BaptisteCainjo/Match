# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a full-stack TypeScript application with a React Next.js frontend and a NestJS backend. The project appears to be a match-making application with planned features for user authentication, Spotify integration, and user management.

### Architecture

- **Frontend**: Next.js 15.5.3 with React 19, TypeScript, and Tailwind CSS 4
- **Backend**: NestJS with TypeScript, running on Node.js
- **Database**: MongoDB (planned, mentioned in README)
- **Development**: Turbopack for fast builds

## Project Structure

```
├── client/          # Next.js frontend
│   ├── src/
│   │   ├── app/     # Next.js app directory (pages and layouts)
│   │   ├── utils/   # Utility functions and constants
│   │   └── components/ # React components
│   └── public/      # Static assets
├── server/          # NestJS backend
│   ├── src/
│   │   ├── modules/ # NestJS modules
│   │   └── hello/   # Example controller module
│   └── test/        # Test files
└── start.sh         # Development startup script
```

## Development Commands

### Starting the Application

- **Full Stack**: `./start.sh` (starts both frontend and backend)
- **Frontend only**: `cd client && npm run dev`
- **Backend only**: `cd server && npm run start:dev`

### Frontend (client/)

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Backend (server/)

- `npm run start:dev` - Start development server with hot reload
- `npm run build` - Build application
- `npm run start` - Start production server
- `npm run start:debug` - Start with debugging
- `npm run lint` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:cov` - Run tests with coverage
- `npm run test:e2e` - Run end-to-end tests

## Configuration

### TypeScript Configuration

- **Frontend**: Uses Next.js TypeScript config with path aliases (`@/*` maps to `./src/*`)
- **Backend**: Uses NestJS TypeScript config with Node.js ES2023 target and decorator support

### Environment Variables

- Backend uses `.env` file (located in `server/.env`)
- Default backend port: 5001 (configured in `server/src/main.ts`)
- Frontend API URL: `http://localhost:5001` (defined in `client/src/utils/constants/general.tsx`)

### CORS

Backend has CORS enabled globally in `server/src/main.ts`

## Key Architecture Patterns

### Backend (NestJS)

- Uses decorators for controllers and modules
- Follows NestJS module structure with `@Module`, `@Controller`, `@Get` decorators
- Example controller: `HelloController` demonstrates basic GET endpoint pattern
- Main application bootstrap in `main.ts` with CORS enabled

### Frontend (Next.js)

- Uses App Router (Next.js 13+ pattern)
- Client-side components with "use client" directive
- TypeScript with strict type checking
- Tailwind CSS for styling
- Utility-first approach with organized constants and functions

## API Integration

- Frontend communicates with backend using fetch API
- API base URL centralized in `client/src/utils/constants/general.tsx`
- Example API call in `client/src/app/page.tsx` demonstrates the pattern

## Planned Features (from README)

- User authentication (Login, Logout, Signup)
- User profiles
- Spotify integration
- MongoDB database integration

## Testing

- **Backend**: Jest configured for unit and e2e tests
- Test files follow `.spec.ts` convention
- Coverage reports available in `coverage/` directory
