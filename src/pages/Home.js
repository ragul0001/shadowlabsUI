import React from 'react'
import image1 from '../assests/background/image1.jpg'
import backgroundImage from '../assests/background/app-development-bg.jpg'
import appimg from '../assests/background/app-img.png'
function Home() {
  return (
    <div className='bg-[#0c0e1a]'>
        <div className='container inset-0 flex items-center justify-center min-h-screen mx-auto max-w-7xl lg:px-8'>
             <section className=''>
                <div className='flex justify-center '>
                 <div className='grid grid-cols-1 md:grid-cols-2 gap-2 items-center px-4 md:px-0 py-5'>
                      <div  className='' >
                         <img src={image1} alt='the content image' />
                      </div>
                      <div className='mx-0 md:mx-5'>
                           <div>
                               <h1 className='text-[30px] text-white font-regular'>Welcome to shadow Labs</h1>
                                <p className='text-[14px] text-white font-light my-5'>Fusce euismod nunc eget nisl ullamcorper, in tempus nisl pretium. Nunc nec nibh diam. Etiam bibendum eros ut urna tristique, eu maximus ligula tempus. Aliquam augue nisl, fermentum sit amet ultricies ac, sodales ac justo.</p>
                                <p className='text-[14px] text-white font-light my-5'>Vestibulum vulputate massa rutrum, pharetra neque id, posuere orci. Curabitur egestas enim eu risus imperdiet, sed sollicitudin nibh aliquet.</p>                  
                                 <button className='border border-blue-600 text-white px-3 w-32 py-2 rounded-full hover:bg-[#3c66ee] hover:duration-150'>Explore</button>
                           </div>

                      </div>
                 </div>
                 </div>
             </section>


        </div>
        <section
  className='bg-cover bg-center min-h-screen flex items-center justify-center'
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
  <div className='container mx-auto max-w-7xl lg:px-8'>
    <div className='flex justify-center items-center h-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 items-center px-4 md:px-3 lg:px-0 py-5'>
        <div>
          <div>
            <h1 className='text-[30px] text-white font-regular'>App Development</h1>
            <p className='text-[16px] text-white font-light my-5 text-justify'>
              Etiam euismod convallis risus id bibendum. Sed laoreet finibus arcu eget tincidunt. Sed maximus, orci in vehicula imperdiet, ipsum leo eleifend lectus, ac elementum quam dui quis augue. Fusce at ex non ligula lacinia condimentum. Integer ultricies est rhoncus massa tincidunt, sit amet blandit eros lobortis. Donec non ex ante.
            </p>
            <button className='border border-blue-600 text-white px-3 w-32 py-2 rounded-full hover:bg-[#3c66ee] hover:duration-150'>
              Explore
            </button>
          </div>
        </div>

        <div className=''>
          <img src={appimg} alt='the content image' className=''   />
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Home