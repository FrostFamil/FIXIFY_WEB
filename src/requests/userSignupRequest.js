import axios from 'axios';

const userSignupRequest = (email, password, firstName, lastName, phone) => {
    return axios({
    method: 'put',
    url: 'http://192.168.0.88:8080/auth/signup',
    data: {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
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

export default userSignupRequest;