import { ILiveStream } from '@/types/lives';
import { CirclePlay } from 'lucide-react';
import { Clock } from 'lucide-react';
import React from 'react'
interface IProps {
    livestream: ILiveStream | undefined
}
const FlexLiveStreamItem = ({livestream}: IProps) => {
  return (
    <>
      <div className='flex items-center gap-2'>
        <span className='font-medium text-sm'>{livestream?.categories}</span>
      </div>
      <div className='flex items-center gap-2'>
        <CirclePlay className='text-subMain w-3 h-3'/>
        <span className='font-medium text-sm'>{livestream?.createdAt}</span>
      </div>
      {/* <div className='flex items-center gap-2'>
        <Clock className='text-subMain w-3 h-3'/>
        <span className='font-medium text-sm'>15 minutes ago</span>
      </div> */}
    </>
  )
}

export default FlexLiveStreamItem;
