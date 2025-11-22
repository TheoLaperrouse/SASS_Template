FROM node:20-alpine

WORKDIR /app

# Installer yarn globalement
RUN corepack enable && corepack prepare yarn@stable --activate

COPY package.json yarn.lock* ./

RUN yarn install

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]