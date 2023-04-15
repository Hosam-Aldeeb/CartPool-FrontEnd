export async function listActiveShoppers(token) {
    let headers = createHeaders(token);

    let requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    fetch("/listActiveShoppers", requestOptions)
        .then(response=> response.json())
        .then(result=>{
            result.data.forEach(row=>{
                console.log(row)
                
            });
        })
         .catch(error => console.log('error', error));
}

export async function makeActiveShopper(token, email) {
    let headers = createHeaders(token);

    let body = JSON.stringify({
        "email": email
    });

    let requestOptions = {
        method: 'POST',
        headers: headers,
        body: body,
        redirect: 'follow'
    };

    fetch("/makeActiveShopper", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function createHeaders(token) {
    let headers = new Headers();
    let bearer_token = "Bearer " + token.toString();
    headers.append("Authorization", bearer_token);
    headers.append("Content-Type", "application/json");
    
    return headers;
}
