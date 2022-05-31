import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TeamType } from "../../types";

type InitialStateType = {
  teams: TeamType[];
  loading: boolean;
};

const teamSlice = createSlice({
  name: "teams",
  initialState: {
    loading: false,
    teams: [],
  } as InitialStateType,
  reducers: {
    getAllTeams: (state) => {
      state.loading = true;
    },
    setAllTeams: (state, action: PayloadAction<TeamType[]>) => {
      state.teams = action.payload;
      state.loading = false;
    },
    addNewTeam: (state, action: PayloadAction<TeamType>) => {
      const newTeamID = state.teams.length + 1;
      state.teams = [
        ...state.teams,
        {
          ...action.payload,
          id: newTeamID,
        },
      ];
    },
  },
});

export const { addNewTeam, getAllTeams, setAllTeams } = teamSlice.actions;
export default teamSlice.reducer;
