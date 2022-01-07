import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';

export default function UserForm({ label = 'Authenticate', onSubmit }) {
  const [loading, setLoading] = useState(false);
  const { formState, formError, handleFormChange, setFormError } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formState;

    try {
      if (!email || password.length < 8)
        setFormError(
          'An email address and a password consisting of 8+ characters are required.'
        );
      setLoading(true);
      await onSubmit(email, password);
    } catch (error) {
      setLoading(false);
      setFormError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>{label}</legend>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formState.email}
          onChange={handleFormChange}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formState.password}
          onChange={handleFormChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Authenticating...' : label}
        </button>
        {formError && <p>{formError}</p>}
      </fieldset>
    </form>
  );
}
