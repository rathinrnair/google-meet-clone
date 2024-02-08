import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

const MeetingScreen = () => {
  const { meetingid: meetingId } = useParams()
  const localVideoRef = useRef()
  const remoteVideoRef = useRef()
  const [localStream, setLocalStream] = useState(null)
  const [remoteStream, setRemoteStream] = useState(null)
  const [peerConnection, setPeerConnection] = useState(null)

  useEffect(() => {
    // Initialize peer connection
    const initPeerConnection = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      })
      setLocalStream(stream)
      localVideoRef.current.srcObject = stream

      // Create peer connection
      const pc = new RTCPeerConnection()
      pc.addStream(stream)
      pc.ontrack = (event) => {
        setRemoteStream(event.streams[0])
        remoteVideoRef.current.srcObject = event.streams[0]
      }
      setPeerConnection(pc)
    }

    initPeerConnection()

    return () => {
      // Cleanup
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop())
      }
      if (peerConnection) {
        peerConnection.close()
      }
    }
  }, [])
  return (
    <div className='max-containe bg-black bg-opacity-85 h-screen relative'>
      <div className=' flex justify-center items-center absolute right-5 top-5 w-7 h-7 rounded-full bg-g-blue'>
        <i className='material-icons text-white p-2'>more_horiz</i>
      </div>
      <div className='w-full flex justify-center p-3'>
        <video
          ref={localVideoRef}
          autoPlay
          muted
          playsInline
          className=' h-[80%] w-[58%]'
          style={{ objectFit: 'contain' }}
        />
        {/* Add more video elements if needed */}
      </div>

      <div className=' flex items-center w-full absolute p-8 bottom-10 justify-between '>
        <h3 className=' text-white font-opensans text-sm font-semibold tracking-[1px]'>
          {/* user name here */}
          User Name
        </h3>
      </div>
      <div className=' flex items-center w-full absolute p-8 bottom-0 justify-between '>
        <h3 className=' text-white font-opensans  text-sm font-semibold tracking-[1px]'>
          {meetingId}
        </h3>
        <div className='flex items-center gap-3'>
          <i className='material-icons text-white bg-gray-300 bg-opacity-10 rounded-full w-10 h-10 flex items-center justify-center p-2'>
            mic
          </i>
          <i className='material-icons text-white  bg-gray-300 bg-opacity-10 rounded-full w-10 h-10 flex items-center justify-center p-2'>
            videocam_outlined
          </i>
          <i className='material-icons text-white  bg-gray-300 bg-opacity-10 rounded-full w-10 h-10 flex items-center justify-center p-2'>
            closed_caption_outlined
          </i>
          <i className='material-icons text-white  bg-gray-300 bg-opacity-10 rounded-full w-10 h-10 flex items-center justify-center p-2'>
            emoji_emotions_outlined
          </i>
          <i className='material-icons text-white  bg-gray-300 bg-opacity-10 rounded-full w-10 h-10 flex items-center justify-center p-2'>
            present_to_all_outlined
          </i>
          <i className='material-icons text-white  bg-gray-300 bg-opacity-10 rounded-full w-10 h-10 flex items-center justify-center p-2'>
            back_hand_outlined
          </i>
          <i className='material-icons text-white  bg-gray-300 bg-opacity-10 rounded-full w-10 h-10 flex items-center justify-center p-2'>
            more_vert_outlined
          </i>
          <i className='material-icons text-white  bg-gray-300 bg-opacity-10 rounded-full w-10 h-10 flex items-center justify-center p-2'>
            call_end_outlined
          </i>
        </div>
        <div className='flex items-center gap-3'>
          <i className='material-icons text-white  bg-gray-300 bg-opacity-10 rounded-full w-10 h-10 flex items-center justify-center p-2'>
            error_outline_outlined
          </i>
          <i className='material-icons text-white  bg-gray-300 bg-opacity-10 rounded-full w-10 h-10 flex items-center justify-center p-2'>
            people_outline_outlined
          </i>
          <i className='material-icons text-white  bg-gray-300 bg-opacity-10 rounded-full w-10 h-10 flex items-center justify-center p-2'>
            message_outlined
          </i>
          <i className='material-icons text-white  bg-gray-300 bg-opacity-10 rounded-full w-10 h-10 flex items-center justify-center p-2'>
            category_outlined
          </i>
          <i className='material-icons text-white  bg-gray-300 bg-opacity-10 rounded-full w-10 h-10 flex items-center justify-center p-2'>
            lock_person_outlined
          </i>
        </div>
      </div>
    </div>
  )
}

export default MeetingScreen
