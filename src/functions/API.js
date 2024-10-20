import { IP } from "../ip/IP"

export const API = () => {
    return IP.protocol + '://' + 
        IP.address + ':' + 
        IP.db_port
}