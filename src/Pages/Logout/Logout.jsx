import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../../redux/token";
import { getFirstName } from "../../redux/firstNameReducer"
import { getLastName } from "../../redux/lastNameReducer"



function Logout() {

      const dispatch = useDispatch()

      useEffect(() => {
            dispatch(getToken(0))
            dispatch(getFirstName(""))
            dispatch(getLastName(""))
            localStorage.removeItem("token");
      })

      return(
            <Navigate to="/" />
      )




}

export default Logout;