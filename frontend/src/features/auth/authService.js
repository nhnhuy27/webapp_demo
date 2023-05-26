import axios from 'axios'

const API_URL = '/api/users'

//log user in
const login = async(userData) => {
    const response = await axios.post(API_URL + '/login', userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}   

//register user
const register = async(userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}   

//log user out
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {login, register, logout}

export default authService  