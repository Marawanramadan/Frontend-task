import React, { useState } from "react";
import { FormControl, Input, InputLabel } from "@mui/material";
import NavigationButtons from "./NavigationButtons";
import SuccessModal from "./SuccessModal";


export default function PersonalData({ handleChange }) {
  
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const submit = () => {
    if (name === "" || mobile === "" || email === "") {
      setError("Please fill in the required fields");
    } else {
      setError("");
      setShow(true);
      console.log("suucess");
    }
    console.log(email);
    console.log(name);
    console.log(mobile);
  };

  const handleField = (e, setFunction) => {
    setFunction(e.target.value);
  };

  
  return (
    <div>
      <form className="personal-form">
        <FormControl required error={name === "" && error !== ""}>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input id="name" onChange={(e) => handleField(e, setName)} />
        </FormControl>
        <FormControl required error={email === "" && error !== ""}>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input
            id="email"
            type="email"
            onChange={(e) => handleField(e, setEmail)}
          />
        </FormControl>
        <FormControl required error={mobile === "" && error !== ""}>
          <InputLabel htmlFor="mobile">Mobile</InputLabel>
          <Input
            id="mobile"
            type="number"
            onChange={(e) => handleField(e, setMobile)}
          />
        </FormControl>
        <p className="error">{error}</p>
      </form>
      <NavigationButtons
        prevDisabled={false}
        nextDisabled={false}
        handleChange={handleChange}
        value={3}
        submit={submit}
      />
     
      <SuccessModal show={show} setShow={setShow} handleChange={handleChange} /> 
    </div>
  );
}
