FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

# Copia a aplicação do estágio de build
COPY --from=build /app /app

# Expõe a porta do backend
EXPOSE 5000

# Executa a aplicação
CMD ["npm", "start"]