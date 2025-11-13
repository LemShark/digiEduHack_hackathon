#pragma once

#include <drogon/HttpRequest.h>

namespace digiedu::dao {
    struct UserCreate {
        Json::String name;
        Json::String surname;
        Json::String email;
        Json::String position;
        Json::String password;
        Json::String access_level;

        static bool fromRequest(const drogon::HttpRequestPtr& request, UserCreate& out) {
            if (const auto& json = request->getJsonObject()) {
                out.name = (*json)["name"].asString();
                out.surname = (*json)["surname"].asString();
                out.email = (*json)["email"].asString();
                out.position = (*json)["position"].asString();
                out.password = (*json)["password"].asString();
                out.access_level = (*json)["access_level"].asString();
                return true;
            }
            return false;
        }
    };
}
