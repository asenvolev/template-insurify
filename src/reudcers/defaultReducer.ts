import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DefaultResponse, ErrorData } from '../models';

export const getDefault = createAsyncThunk<
  DefaultResponse,
  string,
  { rejectValue: ErrorData }
>('balance/getUserBalance', async (arg1, { rejectWithValue }) => {

  const resp = await fetch(`some default url${arg1}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application',
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {

      rejectWithValue(err as ErrorData);
      
      return err;
    });
  return resp as DefaultResponse;
});

export interface DefaultState {
  data:string[];
  statusMsgCode: number;
}

const initialState: DefaultState = {
  data: [],
  statusMsgCode: 0
};

const defaultSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    setData(state,action) {
      state.data = action.payload;
    }
  },
  extraReducers: (builder) => {
    // builder.addCase(getDefault.pending, () => {});

    builder.addCase(getDefault.fulfilled, (state, action) => {
      if (!action.payload) return;
      state.data = [action.payload.default];
    });

    builder.addCase(getDefault.rejected, (state, action) => {
      state.statusMsgCode = action.payload?.statusMessageCode || 0;
    });
  },
});

export default defaultSlice.reducer;
