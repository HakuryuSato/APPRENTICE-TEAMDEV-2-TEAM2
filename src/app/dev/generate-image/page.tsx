'use client';

import React, { useState } from 'react';
import { fetchGenerateImage } from '@/utils/client/apiClient';

export default function GenerateImagePage() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleGenerate = async () => {
    try {
      const result = await fetchGenerateImage(prompt);
      if (result && result.url) {
        setImageUrl(result.url);
      }
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>OpenAI Image Generator</h1>
      <div>
        <input
          type="text"
          placeholder="プロンプトを入力"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          style={{ marginRight: '0.5rem' }}
        />
        <button onClick={handleGenerate}>生成</button>
      </div>

      {imageUrl && (
        <div style={{ marginTop: '1rem' }}>
          <p>生成された画像:</p>
          <img src={imageUrl} alt="Generated by OpenAI" />
        </div>
      )}
    </div>
  );
}
