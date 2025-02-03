import React, { useState } from 'react';
import axios from 'axios';

const ApiKeySettings = () => {
  const [apiKey, setApiKey] = useState(localStorage.getItem('apiKey') || "");

  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value);
  };

  const handleApiKeySave = async () => {
    localStorage.setItem('apiKey', apiKey);  // Save API key locally

    try {
      // Send API key to backend
      const response = await axios.post('http://localhost:5000/api/ai/update-api-key', { newApiKey: apiKey });

      alert(response.data.message || "API Key updated successfully!");
    } catch (error) {
      console.error("Error updating API key:", error);
      alert("Failed to update API key. Check console for details.");
    }
  };

  return (
    <div className="api-key-settings">
      <h2>Configure API Key</h2>
      <input
        type="text"
        value={apiKey}
        onChange={handleApiKeyChange}
        placeholder="Enter your API Key"
      />
      <button onClick={handleApiKeySave}>Save API Key</button>
    </div>
  );
};

export default ApiKeySettings;
