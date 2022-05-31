import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { TeamType } from "../../types";
import { setAllTeams } from "../slices/teamSlice";

function* getTeams() {
  const teamsResp: Response = yield call(() =>
    fetch(
      "https://my-json-server.typicode.com/OmarFaruk-0x01/Team-Management/teams"
    )
  );
  const teamsData: TeamType[] = yield teamsResp.json();

  yield put(setAllTeams(teamsData));
}

function* addNewTeamSaga() {
  const data = null;
}

function* teamSaga() {
  yield takeLatest("teams/getAllTeams", getTeams);
}

export default teamSaga;
