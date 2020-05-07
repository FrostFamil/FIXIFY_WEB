import axios from 'axios';

const fixerSignupRequest = (email, password, firstName, lastName,status, phone) => {
    return axios({
    method: 'put',
    url: 'http://localhost:8080/auth/fixerSignup',
    data: {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        status: status,
        phone: phone
    }
    })
    .then(response => {
        if (response.data.userId){
            return response.data.userId;
        }
    }, error => {
        console.log(error);
    });
}

export default fixerSignupRequest;