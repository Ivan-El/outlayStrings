import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EntitiesTree } from '../../../models/EntitiesTree';
import { OutlaysState } from './OutlaysSlice.types';

const initialState: OutlaysState = {
  data: [],
  isCreating: true,
};

export const OutlaysSlice = createSlice({
  name: 'outlays',
  initialState,
  reducers: {
    setTree(state, action: PayloadAction<EntitiesTree>) {
        state.data = action.payload;
    },
  },
});

// export const { setTree } = OutlaysSlice.actions;
export default OutlaysSlice;
