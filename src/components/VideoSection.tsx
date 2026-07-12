/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Volume2, VolumeX, Maximize2, Shield, Sparkles } from 'lucide-react';

export interface VideoData {
  id: string;
  title: string;
  description: string;
  duration: string;
  videoUrl: string;
  youtubeId: string;
  thumbnailUrl: string;
}

const DEFAULT_VIDEOS: VideoData[] = [
  {
    id: '1',
    title: 'QPP Sterile Ear Piercing System',
    description: 'Discover safest pressure-based manual piercing technology with zero nickel risk.',
    duration: '0:15',
    videoUrl: '/videos/video1.mp4',
    youtubeId: '26v33gtn2Ok',
    thumbnailUrl: 'https://img.youtube.com/vi/26v33gtn2Ok/hqdefault.jpg',
  },
  {
    id: '2',
    title: 'Advanced Sterile Piercing Demo',
    description: 'Clinical demonstration of the QPP contact-free single-use sterile capsule system.',
    duration: '0:14',
    videoUrl: '/videos/video2.mp4',
    youtubeId: 'wwmKN2epERk',
    thumbnailUrl: 'https://img.youtube.com/vi/wwmKN2epERk/hqdefault.jpg',
  },
  {
    id: '3',
    title: 'Safety & Hygiene Protocols',
    description: 'A comprehensive walkthrough of QPP’s CE & ISO 13485 hygiene and sterilization standards.',
    duration: '0:14',
    videoUrl: '/videos/video3.mp4',
    youtubeId: 'bfDzEyjjGHE',
    thumbnailUrl: 'https://img.youtube.com/vi/bfDzEyjjGHE/hqdefault.jpg',
  },
  {
    id: '4',
    title: 'Traditional how to install',
    description: 'Step-by-step instruction on how to correctly prepare, cock, and install the adapter on the traditional piercing gun.',
    duration: '0:24',
    videoUrl: 'https://raw.githubusercontent.com/mritunjay8896/images/main/Traditional%20how%20to%20install.mp4',
    youtubeId: '',
    thumbnailUrl: '/src/assets/images/traditional_install_1783869311319.jpg',
  },
  {
    id: '5',
    title: 'Traditional - how to remove',
    description: 'Safety instructions on how to properly remove the single-use adapter from the piercing gun after use.',
    duration: '0:16',
    videoUrl: 'https://raw.githubusercontent.com/mritunjay8896/images/main/Traditional%20-%20how%20to%20remove.mp4',
    youtubeId: '',
    thumbnailUrl: '/src/assets/images/traditional_remove_1783869326346.jpg',
  },
];

interface VideoPlaylistItemProps {
  video: VideoData;
  isActive: boolean;
  onClick: () => void;
  key?: React.Key;
}

export function VideoPlaylistItem({ video, isActive, onClick }: VideoPlaylistItemProps) {
  return (
    <div
      onClick={onClick}
      className={`group relative flex flex-col gap-1.5 sm:gap-2 p-1.5 lg:p-2 rounded-xl cursor-pointer transition-all duration-300 border-l-2 sm:border-l-4 flex-shrink-0 w-[120px] sm:w-[150px] lg:w-full min-w-0 justify-between ${
        isActive
          ? 'bg-white border-l-[#FB8964] shadow-md lg:scale-[1.01]'
          : 'bg-gray-50/60 border-l-transparent hover:bg-white hover:shadow-sm hover:border-l-gray-300'
      }`}
    >
      {/* Thumbnail Container */}
      <div className="relative w-full aspect-[4/3] lg:aspect-video rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0 bg-slate-100 border border-gray-100">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Play Icon Overlay */}
        <div className={`absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors duration-300`}>
          <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
            isActive ? 'bg-[#FB8964] text-white' : 'bg-white/90 text-brand-heading'
          }`}>
            <Play className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current ml-0.5" />
          </div>
        </div>
        {/* Duration Badge */}
        <span className="absolute bottom-1 right-1 bg-black/75 text-white font-mono text-[7px] sm:text-[8px] px-1 sm:px-1.5 py-0.5 rounded-sm sm:rounded-md">
          {video.duration}
        </span>
      </div>

      {/* Text Container */}
      <div className="flex flex-col min-w-0 px-0.5 pb-0.5 lg:pb-0">
        <h4 className={`text-[10px] sm:text-xs lg:text-[11px] font-extrabold line-clamp-2 leading-tight transition-colors duration-300 ${
          isActive ? 'text-[#FB8964]' : 'text-brand-heading group-hover:text-[#FB8964]'
        }`}>
          {video.title}
        </h4>
        
      </div>
    </div>
  );
}

interface VideoPlaylistProps {
  videos: VideoData[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export function VideoPlaylist({ videos, activeIndex, onSelect }: VideoPlaylistProps) {
  return (
    <div className="flex flex-row lg:flex-col gap-1.5 sm:gap-3 h-full overflow-x-auto lg:overflow-y-auto pb-1 lg:pb-0 scrollbar-none justify-start">
      {videos.map((video, index) => (
        <VideoPlaylistItem
          key={video.id}
          video={video}
          isActive={index === activeIndex}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
}

interface VideoPlayerProps {
  video: VideoData;
  key?: React.Key;
}

export function VideoPlayer({ video }: VideoPlayerProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Keep DOM muted property in sync with React state for native video
  React.useEffect(() => {
    if (!video.youtubeId && videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted, video.youtubeId]);

  // Handle video changes: reset states
  React.useEffect(() => {
    setIsLoading(false);
    setIsPlaying(false);
  }, [video.id]);

  const handlePlayPause = () => {
    if (video.youtubeId) {
      if (isPlaying) {
        setIsPlaying(false);
        setIsLoading(false);
      } else {
        setIsLoading(true);
        setIsPlaying(true);
      }
    } else {
      const videoEl = videoRef.current;
      if (videoEl) {
        if (isPlaying) {
          videoEl.pause();
          setIsPlaying(false);
        } else {
          setIsLoading(true);
          videoEl.play()
            .then(() => {
              setIsPlaying(true);
              setIsLoading(false);
            })
            .catch((err) => {
              const errorMsg = err instanceof Error ? err.message : String(err);
              console.error("Play interaction failed:", errorMsg);
              setIsLoading(false);
            });
        }
      }
    }
  };

  const handleMuteUnmute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newMuted = !isMuted;
    setIsMuted(newMuted);

    if (!video.youtubeId) {
      const videoEl = videoRef.current;
      if (videoEl) {
        videoEl.muted = newMuted;
      }
    }
  };

  return (
    <div 
      className="relative w-full aspect-video rounded-3xl lg:rounded-[40px] overflow-hidden bg-slate-950 border border-slate-900 group shadow-2xl cursor-pointer"
      onClick={handlePlayPause}
    >
      {video.youtubeId ? (
        isPlaying ? (
          <iframe
            key={`${video.youtubeId}-${isMuted}`}
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&rel=0&showinfo=0&modestbranding=1&loop=1&playlist=${video.youtubeId}&playsinline=1&enablejsapi=1`}
            title={video.title}
            className="w-full h-full border-0 scale-[1.35] pointer-events-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            onLoad={() => setIsLoading(false)}
          />
        ) : (
          <div className="relative w-full h-full">
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Dark premium overlay */}
            <div className="absolute inset-0 bg-black/20" />
          </div>
        )
      ) : (
        <video
          key={video.id}
          ref={videoRef}
          src={video.videoUrl}
          className="w-full h-full object-cover"
          loop
          muted={isMuted}
          playsInline
          autoPlay
          preload="auto"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onCanPlay={() => setIsLoading(false)}
          onWaiting={() => {
            if (isPlaying) {
              setIsLoading(true);
            }
          }}
          onPlaying={() => {
            setIsLoading(false);
            setIsPlaying(true);
          }}
          onError={() => {
            const errorMsg = videoRef.current?.error?.message || "Unknown video loading error";
            console.error("Error playing native video source:", errorMsg);
            setIsLoading(false);
          }}
        />
      )}

      {/* Modern Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Elegant Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm pointer-events-none z-10">
          <div className="flex flex-col items-center gap-3 animate-pulse">
            <div className="w-12 h-12 rounded-full border-4 border-white/20 border-t-[#FB8964] animate-spin" />
            <span className="text-white text-xs font-semibold tracking-wide">Loading video...</span>
          </div>
        </div>
      )}

      {/* Floating Center Play Button */}
      <AnimatePresence>
        {!isPlaying && !isLoading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 flex items-center justify-center bg-black/10 pointer-events-none"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FB8964] text-white flex items-center justify-center shadow-lg shadow-[#FB8964]/20 scale-100 hover:scale-105 transition-transform duration-300">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Beautiful Bottom Controls Bar */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between pointer-events-auto z-20">
        <div className="flex items-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePlayPause();
            }}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-colors duration-200"
          >
            {isPlaying ? (
              <div className="flex gap-1.5 items-center justify-center">
                <span className="w-1 h-3.5 bg-current rounded-sm" />
                <span className="w-1 h-3.5 bg-current rounded-sm" />
              </div>
            ) : (
              <Play className="w-4 h-4 fill-current ml-0.5" />
            )}
          </button>

          <button
            onClick={handleMuteUnmute}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-colors duration-200"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>

          <div className="text-white text-xs font-semibold px-3 py-2 rounded-full bg-black/40 backdrop-blur-sm hidden sm:block">
            {video.title}
          </div>
        </div>


      </div>
    </div>
  );
}

export default function VideoSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeVideo = DEFAULT_VIDEOS[activeIndex];

  return (
    <section id="qpp-video-showcase" className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#FB8964] bg-[#FB8964]/10 px-4 py-2 rounded-full mb-4 inline-block">
          VIDEOS
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-heading tracking-tight">
          See QPP in Action
        </h2>
        <p className="text-sm sm:text-base text-brand-paragraph mt-3 leading-relaxed">
          Watch how our premium ear piercing systems combine certified medical safety with elegant user design.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 w-full items-stretch">
        {/* Playlist: Left (10% width on desktop) */}
        <div className="w-full lg:w-[11%] flex-shrink-0 flex flex-col justify-stretch">
          <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-3xl p-3 shadow-sm overflow-x-auto lg:overflow-hidden h-full">
            <VideoPlaylist
              videos={DEFAULT_VIDEOS}
              activeIndex={activeIndex}
              onSelect={(index) => setActiveIndex(index)}
            />
          </div>
        </div>

        {/* Video Player: Right (90% width on desktop) */}
        <div className="w-full lg:w-[91%] flex-grow-0 flex-shrink-0">
          <div className="h-full flex flex-col justify-between">
            <VideoPlayer key={activeVideo.id} video={activeVideo} />
          </div>
        </div>
      </div>
    </section>
  );
}
