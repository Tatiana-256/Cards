import {createStore, Action, combineReducers, applyMiddleware} from "redux";
import {ThunkAction} from "redux-thunk";
import thunkMiddleware from "redux-thunk"
import {loginReducer} from "./login-reduser";
import {registerReducer} from "./register-reduser";
import {forgotReducer} from "./forgot-reduser";
import {newPasswordReducer} from "./newPassword-reduser";
import {cardsPackReducer } from "./cardsRedusers/cardsPack-reduser";
import { cardsReducer } from "./cardsRedusers/cards-reduser";
import {learnReducer} from "./cardsRedusers/learnCard-reduser";


let reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    forgot: forgotReducer,
    newPass: newPasswordReducer,
    cardsPack: cardsPackReducer,
    cards: cardsReducer,
    learn: learnReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;


// ______type of state___________

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

// ______type of actions___________

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>


// ______type of thunk-creator___________

export type baseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

