import { useReducer } from "react";
import { createContext } from "react";

export const UserContext = createContext();

// how and why ...Obj (spread OP) (to keep the old properties) :

// const myObj = {test: 123, greeting: "hello"}

// const newObj = {...myObj, test: 555, username: "john"}

// console.log(newObj)

export default function UserProvider({ children }) {

    const initialState = {user: null, isLoggedIn: false};
  // the action object:
  //  {type: "LOGIN", payload: {id: 555, email: example@hi, password: 123456, username: "John"} }
  //                    {type: "LOGOUT"}
  //                    {type: "UPDATE", payload: "Jo"}
  //                     NONE OF THE ABOVE
  const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        //in a real app this would be an API call
       return { ...state, user: action.payload, isLoggedIn: true };
       
      case "LOGOUT":
        return { ...state, user: null, isLoggedIn: false };

      case "UPDATE":
        //in a real app this would be an API call
        return {
          ...state,
          user: { ...state.user, username: action.payload },
        };
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>
  );
}
