import { useState } from "react";

function App() {
  return (
    <>
      <InputLayout />
    </>
  );
}





function InputLayout() {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");


  function resetHandler() {

    setFirstName('')
    setLastName('')
    setContact('')
    setEmail('')
    setGender('')
  }

  function submitHandler() {

    console.log(firstName,
      lastname,
      email,
      contact,
      gender
    )

  }



  return (
    <div className="formInput">
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <input
          type="text"
          placeholder="Contact"
          onChange={(e) => {
            setContact(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <label htmlFor="gender">Gender: </label> <br />
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="Other"
          checked={gender === "Other"}
          onChange={(e) => setGender(e.target.value)}
        />
        Other


        <br />
      </form>

      <button onClick={submitHandler}>Submit</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}




export default App;
