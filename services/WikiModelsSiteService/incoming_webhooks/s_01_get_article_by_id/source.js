exports = async function(payload, response) {

    const { article_id } = payload.query;

    try {
        const result = await context.functions.execute("f_01_get_article_by_id", article_id);

        if (result.message) {
            response.setStatusCode(422);
        } else {
            response.setStatusCode(200);
        };

        response.setBody(JSON.stringify(result));
        response.setHeader("Content-Type", ["application/json"]);

    } catch (e) {
        response.setStatusCode(400);
        response.setHeader("Content-Type", ["application/json"]);
        response.setBody(JSON.stringify(e));
    }
};