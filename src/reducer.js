
import { createReducer } from "@reduxjs/toolkit"
const iState = {

    name:"The suspect that prompted John Wayne Airport to be placed on lockdown Friday, temporarily halting all air traffic in the area, has been arrested.  👉👉👉 Read the full article: -https://abc7.com/john-wayne-airport-orange-county-lockdown-suspect-arrested/10965253/",

}


const userReducer = createReducer(iState,(builder)=>{
    builder.addCase('USER_FETCH_SUCCEEDED',(state,action)=>{
        state.name = action.payload
    })

})





           
        

export default (userReducer);