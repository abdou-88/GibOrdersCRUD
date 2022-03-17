import { ACTION_TYPES } from "./api";
import api from "./api";




export const fetchAll = () => dispatch => {
    api.client().fetchAll()
        .then(response => {
            dispatch({
              type: ACTION_TYPES.CLIENT.FETCH_ALL,
              payload: response.data,
            });
        })
        .catch(err => console.log(err))
}

export const create = (data, onSuccess) => dispatch => {
    
    api.client().create(data)
        .then(res => {
            dispatch({
              type: ACTION_TYPES.CLIENT.CREATE,
              payload: res.data,
            });
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const update = (id, data, onSuccess) => dispatch => {
    
    api.client().update(id, data)
        .then(res => {
            dispatch({
              type: ACTION_TYPES.CLIENT.UPDATE,
              payload: { id, ...data },
            });
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const Delete = (id, onSuccess) => dispatch => {
    api.client().delete(id)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.CLIENT.DELETE,
                payload: id
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}