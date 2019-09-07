import React, { useState, useEffect } from "react";
import "./styles/contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect } from "react-router-dom";
const { ipcRenderer } = window.require("electron");

const Contact = () => {
  document.title = "Contact Us";

  useEffect(() => {
    ipcRenderer.addListener("data", (_, data) => {
      if (data.success) setRedirect(true);
    });
    return () => {
      ipcRenderer.removeAllListeners("data");
    };
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      ipcRenderer.send("msg", { name, email, message });
    } catch (err) {
      console.log(`an error happend !! ${err}`);
    }
  };

  if (redirect) return <Redirect to="/" />;

  return (
    <div className={`w-100 contact`}>
      <div
        className={"contactImage"}
        style={{
          backgroundImage:
            'url("https://drive.google.com/uc?id=1MxufDwE0jSj0Lk0_SZhRXMbIHhilHtOO")'
        }}
      >
        <h1 className="text-center mt-6 mb-5 text-white" data-aos="zoom-in">
          Contact Us Now
        </h1>
      </div>
      <div className="container mx-auto mb-6">
        <div className="row justify-content-around mt-5">
          <form
            className="row mt-2 mb-4 justify-content-around pb-3 rounded col-lg-7"
            onSubmit={handleSubmit}
          >
            <h2
              className="text-primary col-lg-12 mt-5 text-center mb-4"
              data-aos="fade-right"
            >
              {" "}
              Send a message
            </h2>
            <div className="form-group col-lg-9 mx-2" data-aos="fade-right">
              <input
                type="text"
                className="form-control mb-3"
                id="nameForm"
                placeholder="Name"
                required
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="form-group col-lg-9 mx-2" data-aos="fade-left">
              <input
                type="email"
                className="form-control mb-3"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email Address"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group col-lg-9 mx-2" data-aos="fade-left">
              <textarea
                type="text"
                className="form-control mb-3"
                id="nameForm"
                rows="6"
                placeholder="Message ..."
                required
                style={{ resize: "none" }}
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-center  col-12">
              <button
                type="submit"
                className="btn btn-lg btn-primary"
                data-aos="flip-right"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="row col-lg-4 pt-5 info bg-white">
            <div
              className="col-12 row justify-content-around"
              data-aos="fade-up"
              style={{ height: 100 }}
            >
              <FontAwesomeIcon
                icon="phone-volume"
                className="text-primary mx-auto "
                size="3x"
              />
              <div className="text-dark d-flex flex-column col-9 ">
                <small>+963 21 4606591</small>
                <small>+963 21 4603273</small>
              </div>
            </div>
            <div
              className="col-12 row justify-content-around"
              data-aos="fade-up"
              style={{ height: 100 }}
            >
              <FontAwesomeIcon
                icon="at"
                className="text-primary mx-auto "
                size="3x"
              />
              <div className="text-dark d-flex flex-column col-9 mt-3">
                <small>info@petroasiachem.com</small>
              </div>
            </div>
            <div
              className="col-12 row justify-content-around"
              data-aos="fade-left"
              style={{ height: 100 }}
            >
              <FontAwesomeIcon
                icon="fax"
                className="text-primary mx-auto "
                size="3x"
              />
              <div className="text-dark d-flex flex-column col-9 mt-3">
                <small className="text-nowrap">+963 21 4657281</small>
              </div>
            </div>
            <div
              className="col-12 row justify-content-around"
              data-aos="fade-left"
              style={{ height: 100 }}
            >
              <FontAwesomeIcon
                icon="map-marker-alt"
                className="text-primary mx-auto "
                size="3x"
              />
              <div className="text-dark d-flex flex-column col-9">
                <small className="">
                  Syria – Aleppo Nayal Street-Infront of Catholics Church
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
