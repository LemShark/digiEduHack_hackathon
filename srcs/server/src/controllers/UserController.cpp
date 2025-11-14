#include "UserController.hpp"
#include "../dao/User.hpp"
#include "../utils/Utils.hpp"

void digiedu::controllers::Users::create(
    const drogon::HttpRequestPtr& request,
    std::function<void(const drogon::HttpResponsePtr&)>&& callback
) {
    auto user = dao::User::fromCreateRequest(request);
    user.hashPassword();

    const auto db = drogon::app().getFastDbClient();
    db->newTransactionAsync([u = std::move(user), c = std::move(callback)] (std::shared_ptr<drogon::orm::Transaction> t) mutable {
        u.execCreateSqlAsync(
            t,
            [t, c] (const drogon::orm::Result&) {
                utils::emptyResponse(c, drogon::k200OK);
            },
            [t, c] (const drogon::orm::DrogonDbException& e) {
                utils::emptyResponse(c, drogon::k500InternalServerError);
                t->rollback();
                std::cerr << e.base().what() << std::endl;
            }
        );
    });
}

void digiedu::controllers::Users::getAll(
    const drogon::HttpRequestPtr&,
    std::function<void(const drogon::HttpResponsePtr&)>&& callback
) {
    const auto db = drogon::app().getFastDbClient();
    db->execSqlAsync(
        dao::User::getAllSql(),
        [callback] (const drogon::orm::Result& r) {
            Json::Value root;
            for (size_t i = 0; i < r.size(); ++i)
                root.insert(i, dao::User::getAllRowToJson(r[i]));
            utils::jsonResponse(callback, std::move(root), drogon::k200OK);
        },
        [callback] (const drogon::orm::DrogonDbException& e) {
            utils::emptyResponse(callback, drogon::k500InternalServerError);
            std::cerr << e.base().what() << std::endl;
        }
    );
}

void digiedu::controllers::Users::get(
    const drogon::HttpRequestPtr& request,
    std::function<void(const drogon::HttpResponsePtr&)>&& callback,
    const std::string& userId
) {
    // TODO
}
