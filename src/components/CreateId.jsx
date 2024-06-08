import React, { useEffect, useState } from "react";
import img1 from "./imges/portrait-beautiful-young-woman-standing-grey-wall.jpg";
import Joi from "joi";
function CreateId() {
  let [data, setdata] = useState({
    name: "",
    college: "",
    myLocation: "",
    gender: "",
  });

  let [finalData, setfinalData] = useState({});

  let [errorlist, seterrorlist] = useState([]);
  let myData;
  let getData = (e) => {
    myData = { ...data };
    myData[e.target.name] = e.target.value;
    console.log(myData);
    setdata(myData);
  };

  let getValues = () => {
    console.log(data);
    setfinalData(data);
    // console.log(data);
    var validateResponse = validat();
    console.log(validateResponse.error);
    // console.log(validateResponse.error.details);
    if (validateResponse.error) {
      seterrorlist(validateResponse.error.details);
    } else {
      seterrorlist([]);
    }
  };
  let validat = () => {
    const schema = Joi.object({
      name: Joi.string().min(4).required(),
      college: Joi.string().min(5).required(),
      myLocation: Joi.string(),
      gender: Joi.required(),
    });
    return schema.validate(data, { abortEarly: false });
  };

  return (
    <div className="container mt-5 ">
      <h2 className="text-center ">ID Card Generator</h2>
      <div className="cardsection d-flex">
        <div className="container border-end border-dark  rounded-start bg-secondary text-white justify-content-center  d-flex">
          <section className="form text-center">
            <h2>Input Form</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className=" data my-2 justify-content-center d-flex ">
                <label className="w-75 mx-2" htmlFor=" name">
                  Enter Name :
                </label>
                <input
                  onChange={getData}
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="data my-2 justify-content-center d-flex">
                <label className="w-75 mx-2" htmlFor="college">
                  College Name :
                </label>
                <input
                  onChange={getData}
                  className="form-control"
                  type="text"
                  name="college"
                  id="college"
                />
              </div>
              <div className="data my-2 justify-content-center d-flex">
                <label className="w-75 mx-2" htmlFor="location">
                  Enter Location :
                </label>
                <input
                  onChange={getData}
                  className="form-control"
                  type="text"
                  name="myLocation"
                  id="location"
                />
              </div>
              <div className="data my-2 justify-content-evenly d-flex">
                <div className="d-flex justify-content-center align-items-center">
                  <label className="p-1" htmlFor="male">
                    Male
                  </label>
                  <input
                    onChange={getData}
                    type="radio"
                    name="gender"
                    value={"Male"}
                    id="male"
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <label className="p-1" htmlFor="female">
                    Female
                  </label>
                  <input
                    onChange={getData}
                    type="radio"
                    name="gender"
                    value={"Female"}
                    id="female"
                  />
                </div>
              </div>
              <button
                onClick={getValues}
                className="btn rounded  btn-outline-dark text-white"
                type="submit"
              >
                Generate
              </button>
              {errorlist.map((error, index) => (
                <div key={index} className="alert alert-danger p-2">
                  {error.message}
                </div>
              ))}
            </form>
          </section>
        </div>
        <div className="container p-3 rounded-end bg-secondary text-white justify-content-center">
          <h2>Generated Card</h2>
          <div className="container border border-light border-4 d-flex">
            {/* <div className="img"> */}
            <img className="w-50 start" src={img1} alt="my img" />
            {/* </div> */}
            <div className="text">
              <p>Name: {finalData.name}</p>
              <p>College Name: {finalData.college}</p>
              <p>Location: {finalData.myLocation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateId;
