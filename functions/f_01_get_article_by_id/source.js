exports = async function(article_id) {

    try {

        const coll = await context.functions.execute("util_db_get_articles_collection");

        return await coll.findOne({ article_id: article_id });


    } catch (e) {

        await context.functions.execute("util_db_log_error", "f_01_get_aricle_by_id", e);
        return Error(e.message);
    }
}