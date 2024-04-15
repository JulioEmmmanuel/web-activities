import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-gray-100">
      <header className="py-5 w-full bg-emerald-500 text-white p-4">
        <h1 className="text-3xl font-bold">My Profile</h1>
      </header>

      <main className="p-4">
        <h2 className="mb-2 text-2xl font-bold text-emerald-700">Julio Emmanuel Meza Rangel</h2>
        <p className="mb-4 text-gray-800">I am a software developer interested in building web and mobile apps with AI.</p>

        <img className='mx-auto mb-6 w-1/2 max-w-60 h-auto' src={"./photo.png"}/>

        <h2 className="mb-2 text-2xl font-bold  text-emerald-700">Skills</h2>
        <ul className="w-10/12 md:w-1/2 mx-auto list-disc list-inside text-gray-800 flex flex-col items-center">
          <li>Python (Proficient). C++, C#, Java, JavaScript, Kotlin, Swift (Intermediate). R, TypeScript (Beginner)</li>
          <li>SQL, MongoDB, Git, Jira, React, Node.js, Prisma, SwiftUI, Docker, Unity, Tensorflow, AWS, Agile</li>
          <li>Spanish (native), English (C1), German (B2)</li>
          <li>Leadership, communication, teamwork, attention to detail, achievement orientation, adaptability</li>
        </ul>

        <h2 className="mt-3 mb-3 text-2xl font-bold text-emerald-700">Projects</h2>

        <section className='flex flex-wrap justify-center items-stretch content-center gap-y-5 gap-x-5 '>

          <div className='w-10/12 md:w-5/12 pt-2 pb-5 pr-2 pl-4 rounded-lg text-white bg-emerald-500'> 
            <h3 className="my-3 text-xl font-bold">Vita - Integral Health App</h3>
            <ul className="list-disc list-inside flex flex-col items-start">
              <li>Working with health professionals and Wizeline to develop a health web app</li>
              <li>Integrating generative AI to assist users in achieving their exercise and nutrition goals</li>
            </ul>
          </div>

          <div className='w-5/12 pt-2 pb-5 pr-2 pl-4 rounded-lg text-white bg-emerald-500'>
            <h3 className="my-3 text-xl font-bold">TECuido – iOS Medical Assistant</h3>
            <ul className="list-disc list-inside flex flex-col items-start">
              <li>Developed app leveraging AI to support hearing-impaired people in medical and emergency contexts.</li>
              <li>Won first place in the software and social impact categories of showcase competition Expo Ingenierías.</li>
              <li>Collaborated with an NGO “Dilo en Señas” to publish the app to the App Store. </li>
            </ul>
          </div>
          
          <div className='w-5/12 pt-2 pb-5 pr-2 pl-4 rounded-lg text-white bg-emerald-500'>
            <h3 className="my-3 text-xl font-bold">OptiMX - Warehouse simulation system</h3>
            <ul className="list-disc list-inside flex flex-col items-start">
              <li>Implemented a multi-agent model for storage-robot coordination within a warehouse.</li>
              <li>Integrated a 3D real-time editable simulation to simplify decision-making for Elettric80 on robot sales.</li>
            </ul>
          </div>

      </section>

      </main>

      <footer className="py-5 w-full bg-emerald-500 text-white p-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold">Social Media & Contact</h2>
        <ul className="list-inside flex flex-col space-y-4 items-start mt-2 mt-5">
            <li className='flex items-center space-x-5'>
                <img width={40} height={40} src="./github.png"/> 
                <a className='hover:text-gray-200 font-semibold text-lg' href="https://github.com/JulioEmmmanuel" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li className='flex items-center space-x-5'>
                <img width={40} height={40} src="./linkedin.png"/> 
                <a className='hover:text-gray-200 font-semibold text-lg' href="https://www.linkedin.com/in/julio-emmanuel-meza-rangel-9173311b3/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li className='flex items-center space-x-5'>
                <img width={40} height={40} src="./mail.png"/> 
                <a className='hover:text-gray-200 font-semibold text-lg' href="mailto:juliomeza2510@outlook.com">Email</a>
            </li>
        </ul>
      </footer>
    </div>
  );
}

export default Profile;