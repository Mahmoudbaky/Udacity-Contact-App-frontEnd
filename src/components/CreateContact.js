import React from "react";
import { Link } from "react-router-dom";
import ImageInput from "./ImageInput";
import serializeForm from "form-serialize";

const CreateContact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div>
      <Link className="close-create-contact" to="/">
        Close
      </Link>
      <form onSubmit={handleSubmit} className="create-contact-form">
        <ImageInput
          className="create-contact-avatar-input"
          name="avaterURL"
          maxHeight={64}
        />
        <div className="create-contact-details">
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="handle" placeholder="Handle" />
          <button>Add Contact</button>
        </div>
      </form>
    </div>
  );
};

export default CreateContact;
