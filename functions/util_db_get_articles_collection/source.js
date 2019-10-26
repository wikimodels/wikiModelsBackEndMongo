exports = async function() {

    try {
        const dbName = await context.values.get("projectEnvValues").db;
        const collName = await context.values.get("projectEnvValues").articles;
        const coll = await context.services.get("mongodb-atlas").db(dbName).collection(collName);

        return coll;

    } catch (e) {

        await context.functions.execute("util_db_log_error", "util_db_get_clicks_collection", e);

        return Error(e.message, e)
    }
};