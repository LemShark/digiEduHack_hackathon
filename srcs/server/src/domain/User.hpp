#pragma once

#include <drogon/HttpRequest.h>

namespace digiedu::domain {
    struct User {
        std::string id;
        std::string name;
        std::string surname;
        std::string email;
        // std::string position;
        // std::string password_hash;
    };
}

namespace drogon {
    template <>
    inline digiedu::domain::User fromRequest(const HttpRequest &req) {
        const auto& json = req.getJsonObject();
        digiedu::domain::User user;
        if (json) {
            user.id = (*json)["id"].asString();
            user.name = (*json)["name"].asString();
            user.surname = (*json)["surname"].asString();
            user.email = (*json)["email"].asString();
        }
        return user;
    }
}
