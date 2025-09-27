# Utilise Node.js LTS
FROM node:18-alpine

# Définit le répertoire de travail
WORKDIR /app

# Copie les fichiers package du serveur
COPY server/package*.json ./

# Installe les dépendances
RUN npm ci --only=production && npm cache clean --force

# Copie le code source du serveur
COPY server/ .

# Build l'application
RUN npm run build

# Expose le port
EXPOSE $PORT

# Commande de démarrage
CMD ["npm", "run", "start:prod"]