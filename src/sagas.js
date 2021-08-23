import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'



const getUserName = async ()=>{
 const res = await fetch("https://newsapi.org/v2/everything?q=apple&from=2021-08-20&to=2021-08-20&sortBy=popularity&apiKey=1763d7bdfce1454db7ea85dd26cef3d4")
 const result = await res.json()
 var num = Math.floor(Math.random())
 return(
    result.articles[num].description
   //  +" 👉👉👉 Read the full article: - "+result.articles[num].url
    )
}

function* fetchUser() {
   try {
      const userName = yield getUserName();
      yield put({type: "USER_FETCH_SUCCEEDED", payload: userName});
   } catch (e) {
      console.log(e)
   }
}

function* userSaga() {
  yield takeLatest("UPDATE_NAME", fetchUser);
  
}


export default userSaga;