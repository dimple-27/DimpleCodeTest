import { call, takeEvery, put } from "redux-saga/effects";
import { fetchData } from "../store";
import { sagaActions } from "./sagaActions";
import {useAxios} from '../apiClient';
import { Api, ApiBaseUrl } from "../utils/Constants";

let callAPI = async (data) => {
  console.log( ApiBaseUrl+"&"+data.data.query+"&"+data.data.category);
  return await useAxios({
    method:Api.GET,
    url: ApiBaseUrl+"&"+data.data.query+"&"+data.data.category,
  });
};

export function* fetchDataSaga(data) {
  try {
    let result = yield call(() =>
      callAPI(data)
    );

    yield put(fetchData(result.articles));
  } catch (e) {
    yield put({ type: "FETCH_FAILED" });
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}
