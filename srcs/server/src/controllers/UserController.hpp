#pragma once

#include "base/BaseController.hpp"

namespace digiedu::controllers {
    class Users : BaseController<"/users"> {
    public:
        REGISTRATION_BEGIN
            PATH(Users::create, "", drogon::Post)
        REGISTRATION_END
    private:
        static void create(const drogon::HttpRequestPtr& request, std::function<void(const drogon::HttpResponsePtr&)>&& callback);
    };
}
