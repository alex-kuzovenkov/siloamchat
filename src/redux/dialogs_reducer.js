const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
    messages: [
        { id: 2, message: 'HI' },
        { id: 1, message: 'How are you' },
        { id: 3, message: 'yo' },
        { id: 4, message: 'ggg' },
        { id: 5, message: 'Hello' },
        { id: 6, message: 'Buy' },
    ],
    dialogs: [
        { id: 1, name: 'Dimich' },
        { id: 2, name: 'Kolia' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Dima' },
        { id: 5, name: 'Vasia' },
        { id: 6, name: 'Oleg' },
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: [action.body]
            }

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 7, message: body }]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer;