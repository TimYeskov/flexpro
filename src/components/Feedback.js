import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const FeedBack = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const requiredInputs = form.current.querySelectorAll("input[required]");
    let isFormValid = true;

    requiredInputs.forEach((input) => {
      if (input.value.trim() === "") {
        isFormValid = false;
      }
    });

    if (isFormValid) {
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
            alert("Письмо доставлено!");
          },
          (error) => {
            console.log(error.text);
          }
        );

      e.target.reset();
    } else {
      alert("Пожалуйста, заполните все обязательные поля!");
    }
  };

  return (
    <div className="App">
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Your Name" name="user_name" required />
        <input type="text" placeholder="Email" name="user_mail" required />
        <select name="user_select" required>
          <option value="" disabled>
            Reason for Contacting*
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <input type="number" placeholder="Phone" name="user_phone" />
        <input
          type="text"
          placeholder="Message"
          id="message"
          name="message"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedBack;
