FROM node:16-alpine3.18 as angular


WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

WORKDIR /app/login
RUN npm run build -- --output-path=dist/login

WORKDIR /app/home
RUN npm run build -- --output-path=dist/home

WORKDIR /app/home
RUN npm run build -- --output-path=dist/users/create

WORKDIR /app/home
RUN npm run build -- --output-path=dist/nfts/create

WORKDIR /app/home
RUN npm run build -- --output-path=dist/collections

WORKDIR /app/home
RUN npm run build -- --output-path=dist/privacy


FROM httpd:alpine3.15

WORKDIR /usr/local/apache2/htdocs
COPY --from=angular /app/dist/musicart-angular .
COPY --from=angular /app/dist/login ./login
COPY --from=angular /app/dist/home ./home
COPY --from=angular /app/dist/users/create ./users/create
COPY --from=angular /app/dist/nfts/create ./nfts/create
COPY --from=angular /app/dist/collections ./collections
COPY --from=angular /app/dist/privacy ./privacy