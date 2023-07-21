import person from '../../assets/images/All Images/person.png'

const Banner = () => {
    return (
        <div className='lg:flex'>
            <div className='w-1/2 lg:mt-36'>
                <h2 className="text-[80px] text-[#1A1919] font-bold leading-[100px]">One Step <br /> Closer To Your <br /> <span className="text-[#6C83FE]"> Dream Job</span></h2>

                <p className='text-[#757575] font-medium leading-7'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>

                <button className='py-[19px] mt-8 px-[28px] text-white font-normal bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg'>Get started</button>
            </div>
            <div className='w-1/2'>
                <img className='lg:w-full lg:h-[700px] md:w-full' src={person} alt="" />
            </div>
        </div>
    );
};

export default Banner;