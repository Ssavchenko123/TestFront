import { takeEvery } from "redux-saga/effects";
import { postActions } from "../types/posts";

function* watchRequestPost(){
 yield takeEvery(postActions.postsSuccess, fetchPostAsync)
}
function* fetchPostAsync(){

}