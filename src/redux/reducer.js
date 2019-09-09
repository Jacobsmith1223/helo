

const initialState = {
    username:'',
    userid:'',
    profile_pic:''
}

// actiontype
const UPDATE_DUX = "UPDATE_DUX"

// action builder
export function updateDux(userid,username,profile_pic){
    return{
        type:UPDATE_DUX,
        payload: {userid,username,profile_pic}
    }
}

// reducer function

export default function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_DUX:
            const {userid,username,profile_pic} = action.payload
            return {userid,username,profile_pic}
        default :
        return state
    }
}