import React from "react";
const LoginForm2 = () => {
  return (
    <form
      classNameName="h-100 col-6"
      action="#"
      method="get"
      style={{ border: "solid 3px blue" }}
    >
      <div classNameName="input-group mb-1">
        <span classNameName="input-group-text col-3" id="basic-addon1">
          Email
        </span>
        <input
          type="email"
          classNameName="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      {/* password */}
      <div classNameName="input-group mb-1">
        <span classNameName="input-group-text col-3" id="basic-addon1">
          Password
        </span>
        <input
          type="password"
          classNameName="form-control"
          placeholder="***************"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <button type="submit" classNameName="btn btn-primary">
        Primary
      </button>
    </form>
    //  <section className="d-flex justify-content-start vh-100">
    //    <div className="container-fluid">
    //      <div className="row">
    //        <div className="col-sm-6 text-black">
    //          <div className="px-5 ms-xl-4">
    //            <i
    //              className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
    //              style={{ color: "#709085" }}
    //            ></i>
    //            <span className="h1 fw-bold mb-0">
    //              <img src="./assets/Images/logo.jpg" />
    //            </span>
    //          </div>

    //          <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
    //            <form style={{ width: "23rem" }}>
    //              <h3
    //                className="fw-normal mb-3 pb-3"
    //                style={{ letterSpacing: "1px" }}
    //              >
    //                Log in
    //              </h3>

    //              <div className="form-outline mb-4">
    //                <input
    //                  type="email"
    //                  id="form2Example18"
    //                  className="form-control form-control-lg"
    //                />
    //                <label className="form-label" for="form2Example18">
    //                  Email address
    //                </label>
    //              </div>

    //              <div className="form-outline mb-4">
    //                <input
    //                  type="password"
    //                  id="form2Example28"
    //                  className="form-control form-control-lg"
    //                />
    //                <label className="form-label" for="form2Example28">
    //                  Password
    //                </label>
    //              </div>

    //              <div className="pt-1 mb-4">
    //                <button
    //                  className="btn btn-info btn-lg btn-block"
    //                  type="button"
    //                >
    //                  Login
    //                </button>
    //              </div>

    //              <p className="small mb-5 pb-lg-2">
    //                <a className="text-muted" href="#!">
    //                  Forgot password?
    //                </a>
    //              </p>
    //              <p>
    //                Don't have an account?{" "}
    //                <a href="#!" className="link-info">
    //                  Register here
    //                </a>
    //              </p>
    //            </form>
    //          </div>
    //        </div>
    //        <div className="col-sm-6 px-0 d-none d-sm-block">
    //          <img
    //            src="https://images.wallpaperscraft.com/image/single/clouds_storm_sky_176635_1400x1050.jpg"
    //            alt="Login image"
    //            className="w-100 h-100"
    //            style={{ objectFit: "cover", objectPosition: "left" }}
    //          />
    //        </div>
    //      </div>
    //    </div>
    //  </section>
  );
};

export default LoginForm2;
