let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', function () {
    let request = new XMLHttpRequest();

    // request.open(method, url, async, login, password);
    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    // status
    // statusText
    // responseText  /  response
    // readyState

    request.addEventListener('readystatechange', function () {
        function catchData() {
            return new Promise(function (resolve, reject) {
                if (request.readyState == 4 && request.status == 200) {
                    resolve();
                } else {
                    reject()
                }
            });
        }
        catchData()
            .then(() => {
                let data = JSON.parse(request.response);
                inputUsd.value = inputRub.value / data.usd;
            })
            .catch(() => inputUsd.value = 'Что-то пошло не так!');

    });
});

// let inputRub = document.getElementById('rub'),
//     inputUsd = document.getElementById('usd');

// inputRub.addEventListener('input', function () {
//     function catchData() {
//         return new Promise(function (resolve, reject) {
//             let request = new XMLHttpRequest();

//             // request.open(method, url, async, login, password);
//             request.open('GET', 'current.json');
//             request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//             request.send();

//             // status
//             // statusText
//             // responseText  /  response
//             // readyState

//             request.addEventListener('readystatechange', function () {
//                 if (request.readyState == 4 && request.status == 200) {
//                     resolve(this.response);
//                 } else {
//                     reject()
//                 }
//             });
//         });
//     }
//     catchData()
//         .then(response => {
//             console.log(response);
//             let data = JSON.parse(response);
//             inputUsd.value = inputRub.value / data.usd;
//         })
//         .catch(() => inputUsd.value = 'Что-то пошло не так!');

// });