#pragma once

#include <drogon/HttpRequest.h>
#include "../../dependencies/libbcrypt2/include/bcrypt/BCrypt.hpp"

namespace digiedu::dao {
    struct UserCreate {
        Json::String name;
        Json::String surname;
        Json::String email;
        Json::String position;
        Json::String password, hashedPassword;
        Json::String accessLevel;

        static UserCreate fromRequest(const drogon::HttpRequestPtr& request) {
            const auto& json = request->getJsonObject();
            return {
                (*json)["name"].asString(),
                (*json)["surname"].asString(),
                (*json)["email"].asString(),
                (*json)["position"].asString(),
                (*json)["password"].asString(),
                "",
                (*json)["access_level"].asString()
            };
        }

        void hashPassword() {
            hashedPassword = BCrypt::generateHash(password);
        }

        void createSql(
            const std::shared_ptr<drogon::orm::Transaction>& t,
            drogon::orm::ResultCallback resClb,
            drogon::orm::ExceptionCallback exClb
        ) const {
            t->execSqlAsync(
                "INSERT INTO user_account (id, name, surname, email, position, password_hash, access_level) VALUES"
                "(gen_random_uuid(), $1, $2, $3, $4, $5, $6)",
                std::move(resClb),
                std::move(exClb),
                name, surname, email, position, hashedPassword, accessLevel
            );
        }
    };
}
