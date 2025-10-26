import { Link, useParams } from 'react-router-dom';

import { useRef, useState } from 'react';
import { ArrowLeft, Pause, Play, RotateCcw, Volume, Volume1, Volume2 } from 'lucide-react';
import type { podcastProps } from '../utils/types';


interface PodcastListProps {
  podcasts: podcastProps[];
}

export default function Podcast({podcasts}: PodcastListProps) {
  const { id } = useParams(); 
  let numericId: number;
  if(id) numericId = parseInt(id, 10)
    
    
  const podcast = podcasts.find(item => item.id === numericId);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Handle play/pause
  const togglePlayPause = () => {
    if(audioRef.current){
      if (isPlaying) {
        audioRef?.current.pause();
      } else {
        audioRef?.current.play();
      }
      setIsPlaying(!isPlaying);
    }
    
    
  };

  // Update current time
  const handleCurrentTime = () => {
    if (audioRef.current) {
    setCurrentTime(audioRef.current?.currentTime)
    }
  }

  // Set duration when metadata is loaded
  const handleLoadedMetadata  = () => {
    if (audioRef.current) {
        setDuration(audioRef.current?.duration)
    }
  }

  // Handle seek
  const handleSeekTime = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const newValue = parseFloat(e.target.value)
    if (audioRef.current) {
      audioRef.current.currentTime = newValue
    }
    
    setCurrentTime(newValue)
  }

  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const newValue = parseFloat(e.target.value)
    if (audioRef.current) {
      audioRef.current.volume = newValue;
    }
    setVolume(newValue)
  }

  // Format time for display
  const formatTime = (time:number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  // Skip forward/backward
  const handleSkipChange = (time:number) =>{
    if (audioRef.current) {
      audioRef.current.currentTime += time
      setCurrentTime(audioRef.current.currentTime)
    }

  }

  // silence/volume up
  const handleSilence = () =>{
    if(audioRef.current){
      audioRef.current.volume = 0;
      setVolume(0)
    }
      
  }

  const handleVolumeUp = () =>{
    if(audioRef.current){
      audioRef.current.volume = 0.5;
      setVolume(0.5)
    }
      
  }

  return (
   <div
  className="min-h-screen bg-indigo-50 flex flex-col items-center justify-start py-10 px-4"
  style={{ fontFamily: "Balsamiq Sans, sans-serif" }}
>
  <div className="max-w-4xl w-full mx-auto flex flex-col items-center justify-center">
    {/* Back link */}
    <div className="self-start mb-6">
      <Link
        to="/podcasts"
        className="text-nightBlue hover:text-indigo-700 flex items-center transition-colors duration-200 font-medium text-sm" style={{ fontFamily: 'Montserrat Alternates, sans-serif'}}
      >
        <ArrowLeft className="mr-1 w-5 h-5" /> All episodes
      </Link>
    </div>

    {/* Main content card */}
    <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 w-full border border-gray-100">
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-auto">
          <img
            src={podcast?.image}
            alt={podcast?.name}
            className="md:w-64 md:h-64 w-full rounded-2xl object-cover shadow-md"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-left">
          <h2 className="text-2xl lg:text-3xl font-bold text-nightBlue mb-4 leading-tight" style={{ fontFamily: 'Montserrat Alternates, sans-serif'}}>
            {podcast?.name}
          </h2>
          <p className="text-gray-700 text-sm md:text-base font-medium leading-relaxed border-l-4 border-nightBlue/50 pl-4 italic" style={{ fontFamily: 'Montserrat Alternates, sans-serif'}}>
            {podcast?.text}
          </p>
        </div>
      </div>

      {/* Audio section */}
      <div className="w-full flex flex-col items-center mt-12">
        <audio
          ref={audioRef}
          src={podcast?.audio}
          onTimeUpdate={handleCurrentTime}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Progress bar */}
        <div className="flex items-center gap-3 w-full mb-6">
          <span className="text-gray-500 text-xs font-medium min-w-[40px] text-right">
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeekTime}
            className="flex-1 h-1.5 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #1e3a8a 0%, #1e3a8a ${
                (currentTime / duration) * 100
              }%, #E5E7EB ${(currentTime / duration) * 100}%, #E5E7EB 100%)`,
              WebkitAppearance: "none",
            }}
          />
          <span className="text-gray-500 text-xs font-medium min-w-[40px]">
            {formatTime(duration)}
          </span>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center justify-between w-full">
          {/* Playback */}
          <div className="flex items-center justify-center gap-5">
            <button
              onClick={() => handleSkipChange(-15)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-200"
              aria-label="Rewind 15 seconds"
            >
              <RotateCcw strokeWidth={2} color="#1e3a8a" className="w-4 h-4" />
            </button>

            <button
              onClick={togglePlayPause}
              className="bg-nightBlue hover:bg-indigo-700 p-4 rounded-full shadow-md transition duration-200 flex items-center justify-center"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause strokeWidth={2} color="white" className="w-5 h-5" />
              ) : (
                <Play strokeWidth={2} color="white" className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => handleSkipChange(15)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-200 scale-x-[-1]"
              aria-label="Forward 15 seconds"
            >
              <RotateCcw strokeWidth={2} color="#1e3a8a" className="w-4 h-4" />
            </button>
          </div>

          {/* Volume */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-6">
              {volume < 0.1 && (
                <Volume strokeWidth={2} color="#1e3a8a" onClick={handleVolumeUp} />
              )}
              {volume > 0.1 && volume < 0.6 && (
                <Volume1 strokeWidth={2} color="#1e3a8a" onClick={handleSilence} />
              )}
              {volume > 0.6 && (
                <Volume2 strokeWidth={2} color="#1e3a8a" onClick={handleSilence} />
              )}
            </div>
            <input
              type="range"
              min="0"
              max="1"
              value={volume}
              step={0.01}
              onChange={handleVolumeChange}
              className="w-24 h-1.5 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #1e3a8a 0%, #1e3a8a ${
                  volume * 100
                }%, #E5E7EB ${volume * 100}%, #E5E7EB 100%)`,
                WebkitAppearance: "none",
              }}
              aria-label="Volume control"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}