import React, { useState, useRef } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
const FeedBack = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y4o068m",
        "template_rb2m20s",
        form.current,
        "0uTPywpgxTcDNoSmA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" placeholder="Your Name" name="user_name" />
      <input type="text" placeholder="Email" name="user_mail" />
      <select name="user_select">
        <option value="" disabled>
          Reason for Contacting*
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <input type="number" placeholder="Phone" name="user_phone" />
      <input type="text" placeholder="Message" id="message" name="message" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedBack;
