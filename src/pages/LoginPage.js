import React, { useState } from "react";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/requestMethod";
import axios from "axios";
import { useSnackbar } from "notistack";

function LoginAdmin() {
  let formObj = { password: "", email: "" };
  const [formValues, setFormValues] = useState(formObj);
  const [error, setError] = useState("");
  const [Error, setErrors] = useState(formObj);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [authLogin, setAuthLogin] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post(`${BASE_URL}/user/login`, formValues)
    try {
      console.log(data)
      if(data){
        enqueueSnackbar("login successfully!")
        navigate('/masterpage')
      }
    } catch (error) {
      enqueueSnackbar("some error occured!")
    }
  };
  const handleSubmitAuth = async(e)=>{
    e.preventDefault();
    const data = await axios.post(`${BASE_URL}/authorize/login`, formValues)
    try {
      console.log(data)
      if(data){
        enqueueSnackbar("login successfully!")
        navigate('/authorize')
      }
    } catch (error) {
      enqueueSnackbar("some error occured!")
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  return (
    <>
      <div class="">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              position: "fixed",
              bottom: "16px",
              left: "16px",
              right: "16px",
              backgroundColor: "#333",
              color: "#fff",
              padding: "12px 16px",
              borderRadius: "4px",
              zIndex: 1,
            }}
          >
            {error}
          </div>
          {/* <img style={{ margin: 15 }} src={logo} alt="Logo" /> */}
          <p style={{ margin: 15 }}>
            New to xyz?
            <u
              onClick={() => navigate("/signup")}
              style={{
                color: "lightskyblue",
                cursor: "pointer",
                textDecoration: "none",
                marginLeft: "5px",
              }}
            >
              Sign up
            </u>
          </p>
        </div>

        <div class="">
          <div class="">
            <div class="" style={{ display: "flex" }}>
              <div
                class="col-md-6 contents "
                style={{ padding: "20px 0px 50px 50px" }}
              >
                <div class="">
                  <div
                    class="col-md-8"
                    // style={{ padding: '20px 90px 20px 90px' }}
                  >
                    <div class="mb-4">
                      <h3>Sign In</h3>
                      <p class="mb-4">
                        Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                        consectetur adipisicing.
                      </p>
                    </div>
                    <form action="#" method="post">
                      <div class="form-group first">
                        <input
                          type="email"
                          value={formValues.email}
                          onChange={handleChange}
                          class="form-control"
                          placeholder="email"
                          name="email"
                          focused
                          required
                        />
                      </div>
                      {/* {Error?.email && <ErrorPara>{Error.email}</ErrorPara>} */}
                      <div class="form-group last mb-4">
                        <input
                          type="password"
                          value={formValues.password}
                          onChange={handleChange}
                          class="form-control"
                          placeholder={authLogin ? "mPassword": "password"}
                          name="password"
                          focused
                          required
                        />
                        {/* {Error?.password && <ErrorPara>{Error.password}</ErrorPara>} */}
                      </div>
                      {/* {error && <ErrorPara>{error}</ErrorPara>} */}

                      {authLogin ? <input
                        type="button"
                        value="Log In"
                        onClick={handleSubmitAuth}
                        class="btn btn-block btn-primary"
                      /> : <input
                        type="button"
                        value="Log In"
                        onClick={handleSubmit}
                        class="btn btn-block btn-primary"
                      />}
                    </form>
                    <p style={{ margin: 15 }}>
            login with?
            <u
              onClick={() => setAuthLogin(!authLogin)}
              style={{
                color: "lightskyblue",
                cursor: "pointer",
                textDecoration: "none",
                marginLeft: "5px",
              }}
            >
            {!authLogin ? "Auth Login" : "AdminLogin"}
            </u>
          </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginAdmin;
