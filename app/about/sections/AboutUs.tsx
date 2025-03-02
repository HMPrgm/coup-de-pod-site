import React from 'react'

export default function AboutUs() {
  return (
    <div className='px-4 sm:px-12 md:px-24 lg:px-36 xl:px-48 flex flex-col gap-4 text-lg sm:text-xl py-10'>
        <h2 className='text-center font-title text-5xl pb-6'>About Us</h2>
        {/* <Explainer picAlt='Temporary' picture='/UVA.jpg' swap={true} title='Our History' paragraph="Coup de'Pod was founded in [Month] of 2023 . . ."></Explainer> */}
        <p>
          Coup de&apos;Pod was formally born in the 2023 Fall semester when, after the recruitment of a select few co-hosts, episode production began. In the following months, a larger cohort of students was recruited. The group then appointed social media chairs, communications chairs, researchers, and a production crew. After receiving a slew of interest within the first month of organizational activity, we realized the grand potential of our project: <b className='font-medium italic'>to broadcast politically significant, sometimes unconventional, student thought throughout UVA Grounds and beyond.</b> This was unique, especially for a new generation who wanted to go beyond the borders of partisan thinking - a generation that, for all their lives, have been spoken for rather than heard.
        </p>
        <p>
          Over the course of the fall semester, we began to regularly release episodes, backed by the work of members actively participating in each journalistic report. In the spring semester, we once again began a recruitment cycle to grow our ever-expanding endeavor and were greeted with more eager, prospective members. Thus, that brings us to the current operation of our podcast. We continue to promote and preach <b className='font-medium italic'>the transformative power of the questioning of the status quo.</b>
        </p>
      </div>
  )
}
