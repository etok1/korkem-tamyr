import { Link, useParams } from 'react-router-dom';

import { useRef, useState } from 'react';
import { ArrowLeft, Pause, Play, RotateCcw, Volume, Volume1, Volume2 } from 'lucide-react';
// import MyModal from '../components/Modal';
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
   <div className="h-full bg-gradient-to-br from-lavenderBlue to-skyBlue/50 flex flex-col items-center justify-start py-8 px-4" style={{ fontFamily: "Balsamiq Sans, sans serif" }}>
    <div className='max-w-4xl w-full mx-auto flex flex-col items-center justify-center'>
      <div className="self-start mb-6">
        <Link to="/podcasts" className='text-nightBlue hover:text-indigo-600 flex items-center transition-colors duration-200 font-medium'>
          <ArrowLeft className="mr-1 w-5 h-5"/> All episodes
        </Link>
      </div>            
      
      {/* Podcast content */}
      <div className="bg-white rounded-2xl shadow-lg p-5 md:p-8 w-full">
        <div className='flex flex-col md:flex-row items-start gap-5 md:gap-8'>
          <div className="flex-shrink-0">
            <img 
              src={podcast?.image} 
              alt={podcast?.name}
              className=' md:w-64 md:h-64 rounded-xl object-cover shadow-md'
            />
          </div>
          <div className="flex-1 text-left ">
            <h2 className="text-lg lg:text-3xl font-bold text-nightBlue mb-4">{podcast?.name}</h2>
            <p className='text-gray-700 text-xs lg:text-lg leading-relaxed capitalize border-l-4 border-nightBlue/60 pl-4 pb-2'>
              {podcast?.text}
            </p>
          </div>
        </div>
        
        {/* Audio player */}
        <div className='w-full flex flex-col items-center mt-10'>
          <audio 
            ref={audioRef} 
            src={podcast?.audio} 
            onTimeUpdate={handleCurrentTime} 
            onLoadedMetadata={handleLoadedMetadata} 
            onEnded={() => setIsPlaying(false)} 
            onPause={() => setIsPlaying(false)}
          ></audio>
          
          {/* Progress bar */}
          <div className='flex items-center gap-3 w-full mb-6'>
            <span className='text-gray-600 text-xs font-medium text-right'>{formatTime(currentTime)}</span>
            <input 
              type="range" 
              min="0" 
              max={duration || 0} 
              value={currentTime} 
              onChange={handleSeekTime}  
              className="flex-1 h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #1E3A8A 0%, #1E3A8A ${(currentTime / duration) * 100}%, #E0E7FF ${(currentTime / duration) * 100}%, #E0E7FF 100%)`,
                WebkitAppearance: 'none'
              }}
            />
            <span className='text-gray-600 text-xs font-medium '>{formatTime(duration)}</span>
          </div>
          
          {/* Controls */}
          <div className='flex flex-col items-center justify-between w-full'>
            {/* Playback controls */}
            <div className='flex items-center justify-center gap-4'>
              <button 
                onClick={() => handleSkipChange(-15)}
                className="p-2 rounded-full bg-indigo-100 hover:bg-indigo-200 transition-colors duration-200 h-fit flex items-center justify-center"
                aria-label="Rewind 15 seconds"
              >
                <RotateCcw  strokeWidth={2} color='#1E3A8A' className='w-3 h-3'/>
              </button>
              
              <button 
                onClick={togglePlayPause}
                className="bg-nightBlue flex justify-center p-4 h-fit rounded-full hover:bg-indigo-700 transition-colors duration-200 items-center gap-1 shadow-md"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause strokeWidth={2} color='white'  className='w-4 h-4'/>
                ) : (
                  <Play strokeWidth={2} color='white'  className='w-4 h-4'/>
                )}
              </button>
              
              <button 
                onClick={() => handleSkipChange(15)}
                className="p-2 rounded-full bg-indigo-100 hover:bg-indigo-200 transition-colors duration-200 flex items-center justify-center scale-x-[-1]"
                aria-label="Forward 15 seconds"
              >
                <RotateCcw strokeWidth={2} color='#1E3A8A'  className='w-3 h-3'/>
              </button>
            </div>
            
            {/* Volume control */}
            <div className='flex items-center justify-center gap-3 mt-5'>
              <div className="w-6">
                {volume < 0.1 && <Volume strokeWidth={2} color='#1E3A8A' onClick={handleVolumeUp}/>}
                {(volume > 0.1 && volume < 0.6) && <Volume1 strokeWidth={2} color='#1E3A8A' onClick={handleSilence}/>}
                {volume > 0.6 && <Volume2 strokeWidth={2} color='#1E3A8A' onClick={handleSilence}/>}
              </div>
              <input 
                type="range" 
                min="0" 
                max="1" 
                value={volume} 
                step={0.01} 
                onChange={handleVolumeChange}  
                className="w-24 h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #1E3A8A 0%, #1E3A8A ${volume * 100}%, #E0E7FF ${volume * 100}%, #E0E7FF 100%)`,
                  WebkitAppearance: 'none'
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