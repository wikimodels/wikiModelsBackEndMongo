exports = async function(articleId) {

    try {

        const coll = await context.functions.execute("util_db_get_articles_collection");

        return await coll.find({ articleId: articleId}).limit(1);
       

    } catch (e) {

        await context.functions.execute("util_db_log_error", "f_1_get_total_clicks_for_time_period", e);
        return Error(e.message);
    }
}