#include "UserController.hpp"
#include "../dao/User.hpp"

void digiedu::controllers::Users::create(
    const drogon::HttpRequestPtr& request,
    std::function<void(const drogon::HttpResponsePtr&)>&& callback
) {
    dao::UserCreate user;
    dao::UserCreate::fromRequest(request, user);


    int lol = 0;
    ++lol;
}
