FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

RUN npm install dotenv

COPY --from=build /app /app

EXPOSE 5000

# ENV MONGO_URL=mongodb://mongo:27017/tarefas

CMD ["npm", "start"]