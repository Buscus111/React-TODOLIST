import React from 'react'
import './Error.css'
import { useSelector } from 'react-redux';

  function Error() {
  const error = useSelector(state => state.error)
  return (
    <div className="error">
      <div className="back">
      </div>
      <div className="error-status-wrapper">
        <div className="error-status">
          <h1 className="error-status-text">404</h1>
          <div className="error-message">
            <p>{error.errorMessage}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error
