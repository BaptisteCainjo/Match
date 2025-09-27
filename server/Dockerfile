# Utilise Node.js LTS
FROM node:18-alpine

# Définit le répertoire de travail
WORKDIR /app

# Copie les fichiers package
COPY package*.json ./

# Installe TOUTES les dépendances (dev + prod pour le build)
RUN npm ci && npm cache clean --force

# Copie le code source
COPY . .

# Build l'application (nécessite les devDependencies)
RUN npm run build

# Supprime les devDependencies après le build pour réduire la taille
RUN npm prune --production

# Expose le port
EXPOSE $PORT

# Commande de démarrage
CMD ["npm", "run", "start:prod"]