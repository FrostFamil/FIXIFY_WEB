import axios from 'axios';

const userRequests = (creator) => {
    return axios({
    method: 'post',
    url: 'http://localhost:8080/requests/getNotAcceptedRequest',
    data: {
        creator: creator
    }
    })
    .then(response => {
        return response.data;
    }, error => {
        console.log(error);
    });
}

const getAllPendingRequests = (creator) => {
    return axios({
    method: 'post',
    url: 'http://localhost:8080/requests/getPendingRequest',
    data: {
        creator: creator
    }
    })
    .then(response => {
        return response.data;
    }, error => {
        console.log(error);
    });
}

const getAllAcceptedRequests = (creator) => {
    return axios({
    method: 'post',
    url: 'http://localhost:8080/requests/getAcceptedRequest',
    data: {
        creator: creator
    }
    })
    .then(response => {
        return response.data;
    }, error => {
        console.log(error);
    });
}

const getAllFinishedRequests = (creator) => {
    return axios({
    method: 'post',
    url: 'http://localhost:8080/requests/getFinishedRequest',
    data: {
        creator: creator
    }
    })
    .then(response => {
        return response.data;
    }, error => {
        console.log(error);
    });
}

export {
    userRequests,
    getAllAcceptedRequests,
    getAllPendingRequests,
    getAllFinishedRequests
};