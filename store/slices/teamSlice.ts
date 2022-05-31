import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TeamType } from "../../types";

type InitialStateType = {
  teams: TeamType[];
};

const teamSlice = createSlice({
  name: "team",
  initialState: {
    teams: [],
  } as InitialStateType,
  reducers: {
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
