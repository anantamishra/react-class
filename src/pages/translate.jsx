import React, { useState } from "react";

export const Translate = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to handle translation
  const handleTranslate = async () => {
    if (!inputText.trim()) {
      alert("Please enter text to translate.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://api.libretranslate.com/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: inputText,
          source: "en",
          target: "ne",
          format: "text",
        }),
      });

      const data = await response.json();
      setTranslatedText(data.translatedText);
    } catch (error) {
      alert("Error translating text. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">
          English to Nepali Translator
        </h1>

        <textarea
          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="Enter English text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <button
          onClick={handleTranslate}
          className="w-full mt-4 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading ? "Translating..." : "Translate"}
        </button>

        {translatedText && (
          <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg">
            <h2 className="text-lg font-semibold">Translated Text:</h2>
            <p className="mt-2 text-gray-700">{translatedText}</p>
          </div>
        )}
      </div>
    </div>
  );
};
