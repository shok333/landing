import VK from 'vk-openapi';

const apiId = 6451156;

VK.init({
    apiId
});

export function getAuthStatus() {
    return new Promise((resolve) => {
        VK.Auth.getLoginStatus((loginStatus) => {
            resolve(loginStatus);
        }, 1024);
    });
}

export function getAuthPopUp() {
    return new Promise((resolve) => {
        VK.Observer.subscribe('auth.login', (loginStatus) => {
            resolve(loginStatus);
        });

        VK.Auth.login();
    });
}

export function getDataOfUser() {
    return new Promise((resolve) => {
        VK.Api.call('users.get', {v:"5.73", fields: ['photo_50', 'domain']}, ({response}) => {
            if(response && response.length > 0) {
                resolve(response[0]);
            }
        });
    });


}


