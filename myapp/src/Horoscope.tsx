import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TextBox from './TextBox';
import axios from 'axios';
// @ts-ignore
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function Horoscope() {
  const [sun, setSun] = useState("");
  const [moon, setMoon] = useState("");
  const [rising, setRising] = useState("");

  //DONE: Fill in the ? with appropriate names/values for a horoscope.
  //HINT: Look at the HoroscopeHandler's response in Main.java to choose a default useState value.
  const [horoscope, setHoroscope] = useState("");

  const requestHoroscope = () => {
    const toSend = {
        //DONE: Pass in the values for the data. Follow the format the route expects!
        sun : sun,
        moon : moon,
        rising : rising
    };

    let config = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
        }
    }

    //Install and import axios!
    //DONE: Fill in 1) location for request 2) your data 3) configuration
    axios.post("http://localhost:4567/horoscope", toSend, config)
    .then(response => {
        console.log(response.data);
        //DONE: Go to the Main.java in the server from the stencil, and find what field name you should put here.
        //Note: It is very important that you understand how this is set up and why it works!
        setHoroscope(response.data["horoscope"]);
    })
    .catch(error => {
        console.log(error);
    });
  }

  return (
    console.log("Horoscope:" + horoscope),
    <div className="Horoscope">
      <header className="Horoscope-header">
      </header>
      <br />
      <TextBox label={"Sun Sign"} change={setSun}/>
      <br />
      <TextBox label={"Moon Sign"} change={setMoon}/>
      <br />
      <TextBox label={"Rising Sign"} change={setRising}/>
      <br />
      <AwesomeButton onPress={() => {requestHoroscope()}}>Button</AwesomeButton>
      <div>
        <p>{horoscope[3]}</p>
        <p>{horoscope[4]}</p>
      </div>
    </div>
  );
}

export default Horoscope;
