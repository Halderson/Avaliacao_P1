FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
#ENV REACT_APP_URL_BACKEND=http://halderson/tarefas_back:5000/tarefas
RUN npm run build

FROM nginx:alpine AS server

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]