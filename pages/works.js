import React from 'react';
import {useRouter} from 'next/router';
import Header from "../comps/header/Header";
import WorkDisplay from '../comps/workDisplay/WorkDisplay';

import KalmImg from './../assets/kalm/kalm-activities.png';
import RevampImg from './../assets/revamp/revamp-popular.png';
import SfImg from './../assets/sf/sf-homepage.png';

export default function Works() {
	const router = useRouter();

  return <div className="centered-cont">
  <Header 
    header='UX/UI & Development'
    description='Here are some of the UX/UI design and Front-end development projects I have worked on the past two years.'
  />
  <div>
    <WorkDisplay 
      imgPreview={KalmImg}
      figmaLink='https://www.figma.com/proto/NofvrFzll8aKm0PXDafOAb/Kalm-Project?node-id=814%3A1754&scaling=min-zoom&page-id=797%3A1587&starting-point-node-id=814%3A1614'
      githubLink='https://github.com/irenewuu/kalm-app'
      previewLink='https://kalm-app.vercel.app/auth/home/0'
      projectPage={()=>router.push('/projects/kalm')}
    
    />
    <WorkDisplay 
      imgPreview={RevampImg}
      title="reVamp"
      figmaLink=''
      githubLink=''
      previewLink=''
      description='This web application provides sustainable ways to reduce environmental impact by showing how to repurpose your clothes, where donate your old garments, or showing the impacts of fast fashion on our planet.'
      projectPage={()=>router.push('/projects/kalm')}
    />
    <WorkDisplay 
      imgPreview={SfImg}
      title="S/F Hackathon"
      figmaLink=''
      githubLink=''
      previewLink=''
      description='S/F is a shoes e-commerce store designed and built with Next.js, SASS, Mongoose, and MongoDB Atlas Search in less than one month for a hackathon hosted by MongoDB.'
      projectPage={()=>router.push('/projects/kalm')}
    />
  </div>
</div>
}
