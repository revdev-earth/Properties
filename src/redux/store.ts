import { PropertyInformation } from "@prisma/client";

export const initialState = {
  property: {
    propertyInformation: undefined as PropertyInformation | undefined,
  },
};

export type InitialState = typeof initialState;
export type State = InitialState;
