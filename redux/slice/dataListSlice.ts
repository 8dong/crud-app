import { createSlice } from '@reduxjs/toolkit';

import dataList from '../../data/dataList';

const dataListSlice = createSlice({
  name: 'dataListSlice',
  initialState: dataList,
  reducers: {
    addItem(state, action) {
      // action.payload : DataType;
      const newDataList = [action.payload, ...state];

      window.localStorage.setItem('data', JSON.stringify(newDataList));
      return newDataList;
    },
    removeItem(state, action) {
      // action.payload : DataType;
      const newDataList = state.filter((data) => data.id !== action.payload.id);

      window.localStorage.setItem('data', JSON.stringify(newDataList));
      return newDataList;
    },
    editItem(state, action) {
      // action.payload : DataType;
      const editedDataIndex = state.findIndex((data) => data.id === action.payload.id);
      const newDataList = [...state];
      newDataList[editedDataIndex] = action.payload;

      window.localStorage.setItem('data', JSON.stringify(newDataList));
      return newDataList;
    }
  }
});

export default dataListSlice;
