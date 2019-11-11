exports = async function(payload, response) {

    const { ribbon_id } = payload.query;

    try {
        const result = await context.functions.execute("f_02_get_ribbon_by_id", ribbon_id);

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