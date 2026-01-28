
import React, { useState, useRef, useEffect } from 'react';
import { editImageWithGemini, generateVideoWithVeo } from '../geminiService';

const Studio: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    checkApiKey();
  }, []);

  const checkApiKey = async () => {
    if (window.aistudio?.hasSelectedApiKey) {
      const selected = await window.aistudio.hasSelectedApiKey();
      setHasApiKey(selected);
    }
  };

  const handleSelectKey = async () => {
    if (window.aistudio?.openSelectKey) {
      await window.aistudio.openSelectKey();
      setHasApiKey(true);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const onEditImage = async () => {
    if (!image || !prompt) return;
    setLoading(true);
    setError(null);
    try {
      const result = await editImageWithGemini(image, prompt, 'image/png');
      setEditedImage(result);
      setVideoUrl(null);
    } catch (err: any) {
      setError(err.message || 'Failed to edit image');
      if (err.message?.includes('Requested entity was not found')) setHasApiKey(false);
    } finally {
      setLoading(false);
    }
  };

  const onAnimateImage = async () => {
    if (!image) return;
    setLoading(true);
    setError(null);
    try {
      const result = await generateVideoWithVeo(image, prompt || 'Animate this image smoothly');
      setVideoUrl(result);
    } catch (err: any) {
      setError(err.message || 'Failed to generate video');
      if (err.message?.includes('Requested entity was not found')) setHasApiKey(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-4">Digital Studio</h2>
          <h3 className="text-4xl font-bold tracking-tight">Growth & AI Experimentation</h3>
        </div>
        {!hasApiKey && (
          <button 
            onClick={handleSelectKey}
            className="px-4 py-2 text-xs font-medium bg-zinc-100 text-zinc-950 rounded-lg hover:bg-white transition-colors"
          >
            Select API Key (Veo)
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="p-8 border-2 border-dashed border-zinc-800 rounded-2xl flex flex-col items-center justify-center min-h-[300px] bg-zinc-950/40 transition-all hover:border-zinc-700">
            {image ? (
              <img src={image} className="max-h-[300px] object-contain rounded-lg shadow-2xl" alt="Upload" />
            ) : (
              <div className="text-center">
                <p className="text-zinc-500 mb-4">Upload an image to start editing or animating</p>
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="px-6 py-3 border border-zinc-800 rounded-lg text-sm hover:bg-zinc-900 transition-colors"
                >
                  Browse Files
                </button>
              </div>
            )}
            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
          </div>

          <div className="space-y-4">
            <textarea
              placeholder="e.g., 'Add a retro filter' or 'Make this scene cinematic'..."
              className="w-full h-24 p-4 bg-zinc-900 border border-zinc-800 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-zinc-600 transition-all"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <div className="flex gap-3">
              <button
                disabled={!image || loading}
                onClick={onEditImage}
                className="flex-1 py-4 bg-zinc-800 text-zinc-200 rounded-xl font-medium disabled:opacity-50 hover:bg-zinc-700 transition-all flex items-center justify-center gap-2"
              >
                {loading ? 'Processing...' : 'Edit Image'}
              </button>
              <button
                disabled={!image || loading}
                onClick={onAnimateImage}
                className="flex-1 py-4 bg-zinc-100 text-zinc-950 rounded-xl font-medium disabled:opacity-50 hover:bg-white transition-all flex items-center justify-center gap-2"
              >
                {loading ? 'Thinking...' : 'Animate (Veo)'}
              </button>
            </div>
          </div>
          {error && <p className="text-xs text-red-400 mt-2">{error}</p>}
        </div>

        <div className="flex flex-col h-full">
          <p className="text-xs uppercase tracking-widest text-zinc-600 mb-6">Output</p>
          <div className="flex-grow glass rounded-2xl p-6 flex items-center justify-center min-h-[400px]">
            {loading ? (
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zinc-500 mx-auto mb-4"></div>
                <p className="text-xs text-zinc-500 italic">Processing creative assets...</p>
              </div>
            ) : videoUrl ? (
              <video src={videoUrl} controls autoPlay loop className="w-full rounded-lg shadow-2xl" />
            ) : editedImage ? (
              <img src={editedImage} className="max-w-full rounded-lg shadow-2xl" alt="Edited" />
            ) : (
              <div className="text-center text-zinc-700">
                <svg className="w-12 h-12 mx-auto mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Studio idle</p>
              </div>
            )}
          </div>
          { (editedImage || videoUrl) && (
            <button 
              onClick={() => { setEditedImage(null); setVideoUrl(null); }}
              className="mt-4 text-xs text-zinc-500 hover:text-zinc-200"
            >
              Clear Workspace
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Studio;
