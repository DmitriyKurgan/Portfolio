import axios from "axios"
import {ContactParamsType} from '../components/Contacts/Form/Form';

const baseURL = 'https://gmail-nodejs-five.vercel.app/';

export const instance = axios.create({
    baseURL,
    withCredentials:true,
    headers:{
        'Access-Control-Allow-Credentials':'true'
    }
});


export const api = {
        contactMe(formData:ContactParamsType){
            return instance.post('send-message',formData)
                .then(()=>{
                    alert('Your message has been sent!')
                })
        }
}