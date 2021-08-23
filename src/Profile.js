import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Profile() {
  const { name } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignContent:"center",
      flexDirection:"column",
      border: "2px solid black",
      padding:"20px",
      // height:"400px",s
      // width:"200px"
    }}>
      <div >{name}</div>

      <button 
          onClick={() => dispatch({ type: "UPDATE_NAME" })}
          style={{
            marginTop:"5%",
            height:"40px",
            backgroundColor:"InfoBackground"
          }}
          >
        Next story
      </button>
    </div>
  );
}

export default Profile;
