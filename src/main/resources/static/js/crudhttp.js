const URL = 'http://localhost:8080/conference';

export const get = async () => {
    const response = await fetch(URL);
    if (response.ok) {
        return response.json();
    } else {
        return response.json();
    }
};

export const post = async (conference) => {
    let response;
    try {
        response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(conference) });
    } catch (error) {
        return response.json();
    }
}

export const put = async (conference,id) => {
    let response;
    try {
         response = await fetch(URL + '/' + id, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(conference) });
    } catch (error) {
        return response.json();
    }
}

export const del = async (id) => {
    let response;
    try {
        response = await fetch(URL + '/' + id, {
            method: 'DELETE'
        });
    } catch (error) {
        return response.json();
    }
}

export function sleep(miliseconds) {
    var currentTime = new Date().getTime();

    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}