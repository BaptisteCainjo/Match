# Guide de Déploiement

## Frontend (Next.js) sur Vercel

### Étapes :
1. Push ton code sur GitHub
2. Va sur [vercel.com](https://vercel.com)
3. Connecte ton compte GitHub
4. Importe ton projet
5. Sélectionne le dossier `client/` comme root directory
6. Vercel détecte automatiquement Next.js
7. Deploy !

### Configuration Vercel :
- **Root Directory**: `client`
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

## Backend (NestJS) sur Railway

### Étapes :
1. Va sur [railway.app](https://railway.app)
2. Connecte ton compte GitHub
3. "New Project" → "Deploy from GitHub repo"
4. Sélectionne ton repository
5. Railway détecte automatiquement le `railway.toml`
6. Deploy !

### Variables d'environnement Railway :
Dans le dashboard Railway, ajoute :
```
PORT=5000 (Railway l'assigne automatiquement)
```

### Commandes Railway utiles :
```bash
# Installer Railway CLI
npm install -g @railway/cli

# Se connecter
railway login

# Déployer manuellement
railway up
```

## Configuration du Frontend pour utiliser le Backend

Après déploiement, tu auras une URL Railway (ex: `https://ton-app.railway.app`).

Modifie `client/src/utils/constants/general.tsx` :
```typescript
export const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://ton-app.railway.app'  // URL Railway
  : 'http://localhost:5001';
```

## Nom de domaine personnalisé

### Sur Railway :
1. Dashboard → Settings → Domains
2. Ajoute ton domaine
3. Configure les DNS chez ton registraire

### Sur Vercel :
1. Dashboard → Domains
2. Ajoute ton domaine
3. Configure les DNS

## Tips :
- Les deux services redémarrent automatiquement à chaque push Git
- Railway offre 5$ gratuit/mois
- Vercel est gratuit pour les projets personnels