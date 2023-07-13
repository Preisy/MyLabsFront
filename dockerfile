#cloning repo
FROM alpine/alpine/git AS INSTALLER
WORKDIR /client
RUN git clone https://github.com/Preisy/MyLabsFront.git

#building frontend
FROM node:16-alpine AS BUILDER
WORKDIR /client
RUN npm ci
RUN npm run build

#prepare nginx
FROM nginx:alpine-slim as RUNNER
COPY --from=BUILDER /client/dist /var/www/my-labs.ru/dist
COPY --from=INSTALLER /client/.nginx/ /etc/nginx/

#run
EXPOSE 4000
ENTRYPOINT ["nginx", "-g", "daemon off;"]