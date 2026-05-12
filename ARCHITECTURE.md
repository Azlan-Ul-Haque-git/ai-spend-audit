# Architecture Overview

## Frontend

The frontend is built using Next.js 16 with the App Router architecture.

### UI Stack
- React
- Tailwind CSS
- Framer Motion
- Recharts

### Component Structure
- `AuditForm.tsx` → Handles audit input
- `AuditResult.tsx` → Displays optimization recommendations
- `SavingsChart.tsx` → Visualization layer
- `LeadCapture.tsx` → Email collection form
- `Footer.tsx` → Shared footer component

---

## Backend

Supabase is used as the backend service.

### Database
Table: `audits`

Columns:
- email
- tool
- plan
- savings

### Responsibilities
- Store generated audit reports
- Save lead capture data
- Support future analytics expansion

---

## Routing

### Static Routes
- `/`

### Dynamic Routes
- `/audit/[id]`

Used for public shareable audit reports.

---

## Deployment

### Hosting
- Vercel

### Version Control
- GitHub

---

## Design Goals

- Clean SaaS-style UI
- Fast performance
- Scalable architecture
- Modular React components
- Easy deployment workflow