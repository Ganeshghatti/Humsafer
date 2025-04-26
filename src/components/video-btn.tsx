import React, { useState } from 'react';
import { FiVideo } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss'

export default function VideoBtn() {
    let [isOpen, setOpen] = useState<boolean>(false);
  return (
    <>
        <div className="mt-6">
            <Link to="" className="py-1.5 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-white text-slate-900 rounded-md">Download Now</Link>
            <Link to="#!" onClick={() => setOpen(true)} className="size-9 inline-flex items-center justify-center align-middle rounded-full bg-white text-slate-900 m-1 lightbox"><FiVideo className="size-4"/></Link><span className="font-semibold text-white ms-1 align-middle">Watch Now</span>
        </div>
        <ModalVideo
            channel="youtube"
            youtube={{ mute: 0, autoplay: 0 }}
            isOpen={isOpen}
            videoId="S_CGed6E610"
            onClose={() => setOpen(false)} 
        />
    </>
  )
}
