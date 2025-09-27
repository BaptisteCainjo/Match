#!/bin/bash

# Lancer le backend
echo "Démarrage du backend..."
cd server
npm run start:dev &
cd ..

# Lancer le frontend
echo "Démarrage du frontend..."
cd client
npm run dev &

echo "Tous les serveurs sont lancés !"