import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { DateTime } from "luxon";

import { RootState } from "../store";

export type Time = {
    seconds: number;
};

export type Item = {
    id: string;
    name: string;
    time: Time;
    isActive: boolean;
    snapShot: number;
};

interface ItemSliceState {
    items: Item[];
}

const initialState: ItemSliceState = {
    items: [],
};

export const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Item>) => {
            const item = {
                id: nanoid(10),
                name: action.payload.name,
                time: { seconds: 0 },
                isActive: true,
                snapShot: DateTime.now().toSeconds(),
            };

            state.items.push(item);
        },

        updateItem: (state, action: PayloadAction<Item>) => {
            state.items.map((item) => {
                if (item.id === action.payload.id) {
                    item = action.payload;
                }

                return item;
            });
        },

        deleteItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((el) => el.id !== action.payload);
        },
    },
});

export const selectItems = (state: RootState) => state.item;
export const { addItem, updateItem, deleteItem } = itemSlice.actions;

export default itemSlice.reducer;
