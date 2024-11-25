import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";
import _18 from "../assets/18.mp4"; //

import _16 from "../assets/16.mp4"; //

import _2 from "../assets/2.mp4"; //
import _17 from "../assets/17.mp4"; //

import _4 from "../assets/4.mp4"; //
import _6 from "../assets/6.mp4"; //

import _19 from "../assets/19.mp4"; // 
import _7 from "../assets/7.mp4"; //

import _3 from "../assets/3.mp4";
import _8 from "../assets/8.mp4";
import _11 from "../assets/11.mp4";
import _20 from "../assets/20.mp4";
import _21 from "../assets/21.mp4";
import { video } from "framer-motion/client";
const galleryItems = [
// 1
  { url: _18, title: "Classical Performance", style: "1 / 2 / 1 / 6" },
// 2
  { url: _16, title: "Classical Performance", style: "2 / 1 / 2 / 7" },
// 3
  { url: _2, title: "Classical Performance", style: "3 / 1 / 3 / 4" },
  { url: _17, title: "Classical Performance", style: "3 / 4 / 3 / 7" },
// 4
  { url: _4, title: "Classical Performance", style: "4 / 4 / 4 / 7" },
  { url: _6, title: "Classical Performance", style: "4 / 1 / 4 / 4" },
// 5 
  { url: _19, title: "Classical Performance", style: "5 / 1 / 5 / 4" },
  { url: _7, title: "Classical Performance", style: "5 / 4 / 5 / 7" },

  { url: _11, title: "Classical Performance", style: "6 / 4 / 6 / 7" },
  { url: _3, title: "Classical Performance", style: "6 / 1 / 6 / 4" },
  // { url: _8, title: "Classical Performance", style: "" },
  // { url: _20, title: "Classical Performance", style: "" },
  // { url: _21, title: "Classical Performance", style: "" },
];

interface VideoPlayerProps {
  url: string;
  thumbnail: string;
  title: string;
}

function VideoPlayer({ url, thumbnail, title }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const togglePlay = () => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const message = isPlaying ? '{"method":"pause"}' : '{"method":"play"}';
      iframe.contentWindow?.postMessage(message, "*");
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative aspect-video">
      {!isPlaying && (
        <img
          src={thumbnail}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <iframe
        ref={iframeRef}
        src={`${url}?background=1&autoplay=0&loop=1&byline=0&title=0`}
        className={`absolute inset-0 w-full h-full ${
          isPlaying ? "opacity-100" : "opacity-0"
        }`}
        allow="autoplay; fullscreen"
        title={title}
      />
      <button
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors"
      >
        {isPlaying ? (
          <Pause className="w-16 h-16 text-primary" />
        ) : (
          <Play className="w-16 h-16 text-primary" />
        )}
      </button>
    </div>
  );
}

export default function Gallery() {
  return (
    <section
    id="gallery"
    className="py-20 bg-zinc-800 relative overflow-hidden"
  >
    {/* Background art patterns */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3')] bg-repeat opacity-20"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <h2 className="section-heading">Gallery</h2>
      <div className="grid grid-cols-6 gap-5">

          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center relative col-span-2  overflow-hidden  transform transition-transform hover:scale-105"
          >
            <video src={_18} autoPlay muted className="w-56 rounded-lg shadow-2xl"  controls/>
          </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="h-fit relative col-span-2 rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:scale-105"
        >
          <video src={_16} autoPlay muted className="w-full"  controls/>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="h-fit relative  rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:scale-105"
        >
          <video src={_19} autoPlay muted className="w-full"  controls/>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="h-fit relative rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:scale-105"
        >
          <video src={_20} autoPlay muted className="w-full"  controls/>
        </motion.div> */}


        {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.3 }}
              style={{ gridArea: item.style }}
              // whileHover={{scale: 1.5, translateX: "50%"}}
              className="relative rounded-lg overflow-hidden shadow-2xl transform transition-transform "
            >
              <motion.span
     
              >
              <video
                src={item.url}
                title={item.title}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover "
                controls
              />
              </motion.span>
            </motion.div>
          ))}
      </div>
    </div>
  </section>
  );
}
