import axios from "axios";

const baseUrl = "http://localhost:5000/api/"

export const ACTION_TYPES = {
  ORDER: {
    CREATE: "OCREATE",
    UPDATE: "OUPDATE",
    DELETE: "ODELETE",
    FETCH_ALL: "OFETCH_ALL",
  },
  CLIENT: {
    CREATE: "CREATE",
    UPDATE: "UPDATE",
    DELETE: "DELETE",
    FETCH_ALL: "FETCH_ALL",
  },
};

export default {


     
    order(url = baseUrl + 'order/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    },

    client(url = baseUrl + 'client/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
}