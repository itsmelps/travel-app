import React from 'react'
import Map from "../components/Map"
import Announcement from '../components/Announcement'
import Description from '../components/Description'

const Package = () => {
  return (
    <div className="flex flex-col items-start w-full p-8">
      <div className="w-full max-w-6xl flex flex-col space-y-8">
        {/* All components take 2/3 width and are left-aligned */}
        <div className="w-2/3">
          <Description />
        </div>
        <div className="w-2/3">
          <Map />
        </div>
        <div className="w-2/3">
          <Announcement />
        </div>
      </div>
    </div>
  )
}

export default Package
