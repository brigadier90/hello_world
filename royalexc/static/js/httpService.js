var httpService = httpService || {};

httpService.httpPOST = function (url, data, callback) {
    httpService.httpCall('POST', url, data, callback);
};

httpService.httpGET = function (url, data, callback) {
    httpService.httpCall('GET', url, data, callback);
};

httpService.httpCall = function (method, url, data, callback) {
    $.ajax({
        method: method,
        url: url,
        data: data,
        async: true,
        headers: {
            Accept: 'application/json; charset=utf-8'
        },
        success: function (response) {
            callback(response);
        }
    });
}

httpService.httpCallJson = function (method, url, data, callback) {
    $.ajax({
        method: method,
        url: url,
        data: JSON.stringify(data),
        contentType: 'application/json; charset=utf-8',
        async: true,
        success: function (response) {
            callback(response);
        }
    });
}