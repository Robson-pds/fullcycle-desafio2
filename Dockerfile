FROM node:19-slim

WORKDIR /app

COPY . .

EXPOSE 3000

ENTRYPOINT ["tail", "-f", "/dev/null"]
