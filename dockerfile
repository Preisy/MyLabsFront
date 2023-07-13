#clone project
FROM alpine/git AS INSTALLER
RUN git clone https://github.com/Preisy/MyLabsFront.git /client

#build
FROM node:16-alpine AS BUILDER
WORKDIR /client
COPY --from=INSTALLER /client .
RUN npm ci
RUN npm run build

#prepare nginx
FROM nginx:alpine-slim as RUNNER
COPY --from=BUILDER /client/dist /var/www/my-labs.ru/dist
COPY --from=BUILDER /client/.nginx/ /etc/nginx/

#run
EXPOSE 4000
ENTRYPOINT ["nginx", "-g", "daemon off;"]