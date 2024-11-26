import { combineReducers, PayloadAction } from "@reduxjs/toolkit"

import { configureStore } from "@reduxjs/toolkit"

import { State } from "./store"
import properties from "./slices/properties"

const HYDRATE_ACTION_TYPE = "HYDRATE"

const rootReducer = combineReducers({
  properties,
})

const reducer = (state: State | undefined, action: PayloadAction<State>) => {
  if (action.type === HYDRATE_ACTION_TYPE) {
    return {
      ...state,
      ...action.payload,
    }
  }
  return rootReducer(state, action)
}

const devTools = process.env.NODE_ENV !== "production"

export const store = configureStore({ reducer, devTools })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
