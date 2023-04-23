FROM node:19-slim

WORKDIR /app

COPY . .

USER node

EXPOSE 3000

ENTRYPOINT ["tail", "-f", "/dev/null"]
