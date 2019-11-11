exports = async function(ribbon_id) {

    try {

        const coll = await context.functions.execute("util_db_get_ribbons_collection");

        return await coll.findOne({ ribbon_id: ribbon_id });


    } catch (e) {

        await context.functions.execute("util_db_log_error", "f_02_get_ribbon_by_id", e);
        return Error(e.message);
    }
}