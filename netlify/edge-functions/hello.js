export default async (request, context) => {
    return new Response("hello world from edge!", {
        headers : {
            "context-type": "text/html",
        },
    });
};