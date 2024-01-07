const Hapi = require('@hapi/hapi');
const { nanoid } = require('nanoid');
const post = require('./post')

const init = async () => {

    const server = Hapi.server({
        port: 8000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/posts',
        handler: (request, h) => {

            const posts = post.get();

            return h.response({
                statusCode: 200, 
                massage: "Posts Found",
                data: posts,
            });
        },
    });

    server.route({
        method: 'GET',
        path: '/posts/{id}',
        handler: (request, h) => {

            const result = post.getById(request.params.id);

            if(!result) {
                return h.response({
                    statusCode: 404,
                    error: "Not Found",
                    massage: "Post Not Found!"
                })
                .code(404);
            }

            return h.response({
                statusCode: 200, 
                massage: "Post Found",
                data: result,
            });
        },
    });

    server.route({
        method: 'POST',
        path: '/posts',
        handler: (request, h) => {
            const id = nanoid(5);
            const tittle = request.payload.tittle;
            const content = request.payload.content;
            const author = request.payload.author;
            const date = request.payload.date;
            const tags = request.payload.tags;

            post.save({
                id,
                tittle,
                content,
                author,
                date,
                tags,
             });

            return h.response({
                statusCode: 201,
                massage: "Posts Created",
            });
        },
    });

    server.route({
        method: 'PUT',
        path: '/posts/{id}',
        handler: (request, h) => {
            const tittle = request.payload.tittle;
            const content = request.payload.content;
            const author = request.payload.author;
            const date = request.payload.date;
            const tags = request.payload.tags;

            post.update( request.params.id, {
                tittle,
                content,
                author,
                date,
                tags,
             });

            return h.response({
                statusCode: 200,
                massage: "Posts Updated",
            });
        },
    });

    server.route({
        method: 'DELETE',
        path: '/posts/{id}',
        handler: (request, h) => {

            post.destroy( request.params.id);

            return h.response({
                statusCode: 200,
                massage: "Posts Deleted",
            });
        },
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();