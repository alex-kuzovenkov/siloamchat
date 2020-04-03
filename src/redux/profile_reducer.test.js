import profileReducer, { addPostActionCreator, deletePost} from "./profile_reducer";

let state = {
    posts: [
        { id: 1, message: 'hello', likesCount: 15 },
        { id: 2, message: 'it is me', likesCount: 10 },
        { id: 3, message: 'it is we', likesCount: 15 },
        { id: 4, message: 'it is myoue', likesCount: 1 }
    ]
}


it('message of new post should be correct', () => {
    let action = addPostActionCreator("nnn")

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(5)
});

it('new post should be added', () => {
    let action = addPostActionCreator("nnn")

    let newState = profileReducer(state, action)

    expect(newState.posts[4].message).toBe("nnn")
  });
  
it('after deleteling length of message should be decrement', () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
  });

it('id element must be correct', () => {
    let action = deletePost(1000)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)
  });


