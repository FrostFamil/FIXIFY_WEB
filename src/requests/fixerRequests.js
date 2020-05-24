import axios from 'axios';

const fixerRequests = (acceptor) => {
    return axios({
    method: 'post',
    url: 'http://192.168.0.89:8080/requests/fixerGetPendingRequest',
    data: {
        acceptor: acceptor
    }
    })
    .then(response => {
        return response.data;
    }, error => {
        console.log(error);
    });
}


const fixerAddFinishedRequestToHistory = (acceptor) => {
    return axios({
    method: 'post',
    url: 'http://192.168.0.89:8080/requests/getAllHistoriesOfFixer',
    data: {
        acceptor: acceptor
    }
    })
    .then(response => {
        return response.data;
    }, error => {
        console.log(error);
    });
}

const fixerGetRelatedRequests = (serviceType) => {
    return axios({
    method: 'post',
    url: 'http://192.168.0.89:8080/requests/fixerGetAllRelatedRequest',
    data: {
        serviceType: serviceType
    }
    })
    .then(response => {
        return response.data;
    }, error => {
        console.log(error);
    });
}

export {
    fixerRequests,
    fixerAddFinishedRequestToHistory,
    fixerGetRelatedRequests
};