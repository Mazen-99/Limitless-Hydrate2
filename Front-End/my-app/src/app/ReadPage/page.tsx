import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {
    return (
        <div className=' pt-[70px] lg:pt-[90px]'>
            <Navbar />
            <div className='w-full lg:h-100 h-50 lg:w-[900px] bg-white mx-auto lg:rounded-lg mb-5'>
                <img src="./HeroReadPage.jpg" alt="" className='w-[900px] lg:h-100 h-50 lg:rounded-lg object-cover object-[center_35%]' />
            </div>

            <div className='w-full h-max lg:w-[900px] bg-white mx-auto lg:rounded-lg'>
                <div className='pl-5 pt-5 pb-5'>
                    <h1 className='text-2xl font-semibold pb-5'>Stay Energized as Temperatures Drop</h1>
                    <p className='text-md'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make <br /> a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining <br /> essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum <br /> passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem <br /> Ipsum. <br /> <br />

                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its <br /> layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using <br /> 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page <br /> editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites <br /> still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose <br /> (injected humour and the like). <br /> <br />

                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature <br /> from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in <br /> Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going <br /> through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from <br /> sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 <br /> BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, <br /> "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. <br /> <br />

                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 <br /> and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, <br /> accompanied by English versions from the 1914 translation by H. Rackham. <br /> <br />

                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some <br /> form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a <br /> passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the <br /> Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true <br /> generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence <br /> structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free <br /> from repetition, injected humour, or non-characteristic words etc.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page
