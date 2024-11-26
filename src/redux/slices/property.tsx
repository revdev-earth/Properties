import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PropertiesState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const initialState: PropertiesState = {};

const properties = createSlice({
  name: "property",
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setProperty: (state, action: PayloadAction<any>) => action.payload,
    cleanproperty: () => {
      return initialState;
    },
  },
});

export const { setProperty, cleanproperty } = properties.actions;
export default properties.reducer;
