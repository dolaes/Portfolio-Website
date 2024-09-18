import { useState } from 'react';

import { validateEmail } from './utils/helpers';

function Form() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === 'email' && !email) {
      setErrorMessage('Email is required');
    } else if (name === 'userName' && !value) {
      setErrorMessage('Username is required');
    } else if (name === 'message' && !value) {
      setErrorMessage('Message is required');
    } else {
      setErrorMessage('');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !email) {
      setErrorMessage('Email is invalid');
      return;
    } else if (!userName) {
      setErrorMessage('Username is invalid');
      return;
    } else if (!message) {
      setErrorMessage('Message is invalid');
      return;
    }
    alert(`Thank you for the message, ${userName}!`);

    setUserName('');
    setMessage('');
    setEmail('');
    setErrorMessage('');
  };

  return (
    <div className="text-center">
      <form className="p-5 space-y-2.5 max-w-lg mx-auto" onSubmit={handleFormSubmit}>
        <input
          className="block font-mono p-2.5 w-full text-sm text-gray-900 rounded-lg border border-black focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="email"
          placeholder="email"
        />
        <input
          className="block font-mono p-2.5 w-full text-sm text-gray-900 rounded-lg border border-black focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={userName}
          name="userName"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          placeholder="username"
        />
        <textarea
          rows="4"
          className="block font-mono p-2.5 w-full text-sm text-gray-900 rounded-lg border border-black"
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          placeholder="message"
        />
        <button type="submit" className="font-mono text-black hover:text-white border border-black hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-black dark:text-black dark:hover:text-white dark:hover:bg-black">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="font-mono">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;