import { Property } from "@prisma/client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface PropertiesState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

const initialState: PropertiesState = {}

const properties = createSlice({
  name: "property",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<{ key: string; value: Property }>) => {
      const { key, value } = action.payload
      state[key] = value
    },
    clean: () => {
      return initialState
    },
  },
})

export const { set, clean } = properties.actions
export default properties.reducer
