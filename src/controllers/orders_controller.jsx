export async function createOrder(token, active_shopper_id, remote_shopper_id, order_details) {
    let headers = createHeaders(token);

    let body = JSON.stringify({
        "active_shopper_id" : active_shopper_id,
        "remote_shopper_id" : remote_shopper_id,
        "order_details" : order_details
    });

    let requestOptions = {
        method: 'POST',
        headers: headers,
        body: body,
        redirect: 'follow',
    };

    fetch("/createOrder", requestOptions)
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

export async function getOrderDetails(email, password) {
    let headers = createHeaders();

    let requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow',
    };

    fetch("/getOrderDetails?active_shopper_id=1", requestOptions)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const token = data.data.auth_token.access.token;
            localStorage.setItem('cartpool_token', JSON.stringify(token));
            console.log(token);
        })
        .catch(error => {
            console.error('There was a problem with the network request: ', error);
        });
}

function createHeaders(token) {
    let headers = new Headers();
    let bearer_token = "Bearer " + token.toString();
    headers.append("Authorization", bearer_token);
    headers.append("Content-Type", "application/json");
    
    return headers;
}

// const [orderStatus, setOrderStatus] = useState(0);

// const getOrderDetails = async event => {
//     event.preventDefault();

//     let headers = new Headers();
//     headers.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyNjUxMUBnbWFpbC5jb20iLCJpYXQiOjE2ODAxMzk1ODUsImV4cCI6MTc0MDEzOTU4NX0.Gehn81-U01zCs31lYHcYSAkhvX8Y9NmGvSPxJnfJ0f0");
//     headers.append("Content-Type", "application/json");
//     headers.append("Accept", "*/*");
//     headers.append("Accept-Encoding", "gzip, deflate, br");

//     let requestOptions = {
//         method: 'GET',
//         headers: headers,
//         redirect: 'follow',
//     };

//     fetch("/getOrderDetails?active_shopper_id=5", requestOptions)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             setOrderStatus(data.data[0]['status']);
//             console.log(orderStatus);
//         })
//         .catch(error => {
//             console.error('There was a problem with the network request:', error);
//         });
// };

// const updateOrderDetails = async event => {
//     event.preventDefault();

//     let headers = new Headers();
//     headers.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyNjUxMUBnbWFpbC5jb20iLCJpYXQiOjE2ODAxMzk1ODUsImV4cCI6MTc0MDEzOTU4NX0.Gehn81-U01zCs31lYHcYSAkhvX8Y9NmGvSPxJnfJ0f0");
//     headers.append("Content-Type", "application/json");
//     headers.append("Accept", "*/*");
//     headers.append("Accept-Encoding", "gzip, deflate, br");

//     // TODO: Update order id and status correctly
//     let body = JSON.stringify({
//         "order_id": 23,
//         "status": 4,
//         "cost": 1000
//     });

//     let requestOptions = {
//         method: 'PUT',
//         headers: headers,
//         body: body,
//         redirect: 'follow',
//     };

//     fetch("/updateOrderDetails", requestOptions)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             console.error('There was a problem with the network request:', error);
//         });
// };