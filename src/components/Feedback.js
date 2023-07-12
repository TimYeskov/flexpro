import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const FeedBack = () => {
  const form = useRef();

  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const requiredInputs = form.current.querySelectorAll("input[required]");
    let isFormValid = true;

    requiredInputs.forEach((input) => {
      if (input.value.trim() === "") {
        isFormValid = false;
      }
    });

    const emailInput = form.current.querySelector('input[name="user_mail"]');
    if (isFormValid && !validateEmail(emailInput.value)) {
      isFormValid = false;
    }

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
            setPopupContent("Письмо доставлено!");
            setShowPopup(true);
          },
          (error) => {
            console.log(error.text);
            setPopupContent("Произошла ошибка при отправке письма.");
            setShowPopup(true);
          }
        );

      e.target.reset();
    } else {
      setPopupContent("Пожалуйста, заполните все обязательные поля корректно!");
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
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

      {showPopup && (
        <div className={`popup ${showPopup ? "" : "hidden"}`}>
          <div className="popup-content">
            <p
              style={{
                color:
                  popupContent === "Письмо доставлено!"
                    ? "green"
                    : "rgb(221, 46, 46)",
              }}
            >
              {popupContent}
            </p>
            <button onClick={closePopup}>OK</button>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedBack;
