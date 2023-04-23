## Desafio Fullcycle 2

Pela demora ao instalar e compilar foi escolhido fazer esses processos no container no lugar de na imagem.

Para o correto funcionamento do projeto foi escolhido rodar da seguinte forma:

1. docker image build -t robsonpds/fullcycle2 .
2. docker run -d -it --name=nextjs -v $(pwd):/app -p 3000:3000 robsonpds/fullcycle2
3. docker exec -it nextjs bash
4. npm install
5. npm run dev

Inicialmente o editor utilizado foi o phpstorm que não utiliza o mesmo funcionamento do vscode.
Ate o api.http tinha cido de outra forma, porem no final criei as variaveis la para quem testar funcionar nesse editor.

Por ultimo foi excluido tudo que não era necessario para o projeto rodar essas duas api. Inclusive a pagina inicial.
E foi criado a coluna created_at na tabela conforme indicado no video.