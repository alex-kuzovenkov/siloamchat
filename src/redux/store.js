import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import profileReducer from "./profile_reducer";


let store = {  
     
    _state: {
        profilePage: {
            posts: [
                { id: 2, message: 'hello', likesCount: 15 },
                { id: 1, message: 'it is me', likesCount: 10 },
                { id: 1, message: 'it is we', likesCount: 15 },
                { id: 1, message: 'it is myoue', likesCount: 1 }
            ],
            newPostText: 'it',
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber () {
    },

    
    getState() {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },

    dispatch(action){

        this._state.profilePage = profileReducer (this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}



window.store = store
export default store