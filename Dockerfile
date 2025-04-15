# Étape 1: Construire l'application Angular
FROM node:18 AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --configuration=production

# Étape 2: Servir l'application avec Nginx
FROM nginx:alpine
COPY --from=build-stage /app/dist/immotrend/browser/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]