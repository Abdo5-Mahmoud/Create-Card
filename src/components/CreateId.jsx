import React, { useEffect, useState } from "react";
import img1 from "./imges/portrait-beautiful-young-woman-standing-grey-wall.jpg";
import Joi from "joi";
function CreateId() {
  let [data, setdata] = useState({
    name: "",
    college: "",
    myLocation: "",
  });
  let getValues = () => {
    setdata({
      name: document.getElementById("name").value,
      college: document.getElementById("college").value,
      myLocation: document.getElementById("location").value,
    });

    console.log(data);
    var validateResponse = validat();
    console.log(validateResponse);
  };
  let validat = () => {
    const schema = Joi.object({
      name: Joi.string().min(4).required(),
      college: Joi.string().min(5).required(),
      myLocation: Joi.string(),
    });
    return schema.validate(data, { abortEarly: false });
  };

  //   useEffect(() => {
  //     let { name, college, location } = data;
  //     console.log(data);
  //   }, []);
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
                  className="form-control"
                  type="text"
                  name="Name"
                  id="name"
                />
              </div>
              <div className="data my-2 justify-content-center d-flex">
                <label className="w-75 mx-2" htmlFor="college">
                  College Name :
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="CollegeName"
                  id="college"
                />
              </div>
              <div className="data my-2 justify-content-center d-flex">
                <label className="w-75 mx-2" htmlFor="location">
                  Enter Location :
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="Location"
                  id="location"
                />
              </div>
              <div className="data my-2 justify-content-evenly d-flex">
                <div className="d-flex justify-content-center align-items-center">
                  <label className="p-1" htmlFor="male">
                    Male
                  </label>
                  <input type="radio" name="gender" id="male" />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <label className="p-1" htmlFor="female">
                    Female
                  </label>
                  <input type="radio" name="gender" id="female" />
                </div>
              </div>
              <button
                onClick={getValues}
                className="btn rounded  btn-outline-dark text-white"
                type="submit"
              >
                Generate
              </button>
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
              <p>Name: {data.name}</p>
              <p>College Name: {data.college}</p>
              <p>Location: {data.myLocation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateId;
