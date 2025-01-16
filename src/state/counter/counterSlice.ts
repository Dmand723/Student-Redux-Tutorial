import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
interface CounterState {
  value: number;
  status: string;
}
const initialState: CounterState = {
  value: 0,
  status: "",
};

const counterSlice = createSlice({
  //create slice makes the copy and replaces the state for you this is not directly mutationg the value
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      incrementAsync.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.value += action.payload;
        state.status = "";
      }
    );

    builder.addCase(decrementAsync.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(decrementAsync.rejected, (state) => {
      state.status = "Failed";
    });
    builder.addCase(incrementAsync.rejected, (state) => {
      state.status = "Failed";
    });
    builder.addCase(
      decrementAsync.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.value -= action.payload;
        state.status = "";
      }
    );
  },
});

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);
export const decrementAsync = createAsyncThunk(
  "counter/decrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
// The  createSlice  function accepts an object with three properties:
