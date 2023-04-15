export async function registerUser(first_name, last_name, email, password, address, phone_number) {
    let headers = createHeaders();

    let body = JSON.stringify({
        "first_name" : first_name,
        "last_name" : last_name,
        "email" : email,
        "password" : password,
        "address" : address,
        "phone_number" : phone_number
    });

    let requestOptions = {
        method: 'POST',
        headers: headers,
        body: body,
        redirect: 'follow',
    };

    fetch("/register", requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem with the network request:', error);
        });
}

export async function loginUser(email, password) {
    let headers = createHeaders();

    let body = JSON.stringify({
        "email" : email,
        "password" : password
    });

    let requestOptions = {
        method: 'POST',
        headers: headers,
        body: body,
        redirect: 'follow',
    };

    fetch("/login", requestOptions)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const token = data.data.auth_token.access.token;
            localStorage.setItem('cartpool_token', JSON.stringify(token));
        })
        .catch(error => {
            console.error('There was a problem with the network request: ', error);
        });
}

export async function logoutUser() {
    localStorage.removeItem('cartpool_token');
    localStorage.removeItem('email');
}

function createHeaders(key, value) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "*/*");
    headers.append("Accept-Encoding", "gzip, deflate, br");

    return headers;
}
