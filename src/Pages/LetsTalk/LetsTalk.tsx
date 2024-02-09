import { FaEnvelope, FaMapMarker, FaPhone } from "react-icons/fa";

const LetsTalk = () => {


    return (

        <div className="font-bold">

            <div className="container relative bg-accent py-12 px-10 mx-auto w-full flex flex-col items-center font-sans">
                <h2 className="text-black text-xl capitalize lg:text-4xl md:text-3xl ">Do you Have any Question?</h2>
                <p className="text-black text-sm capitalize lg:text-3xl md:text-2xl">Aspen Essentials Team are Ready to Answer.</p>
                <button className="bg-info z-10 absolute mt-16 md:mt-24 text-white hover:bg-secondary font-bold py-3 px-16 rounded-2xl text-md">Let's Talk</button>
            </div>



            <div className="px-5 md:px-10">
                <div className="relative bg-[#F9F9F9] overflow-hidden px-5 md:px-10 w-full text-gray-900 rounded-lg shadow-lg">
                    <img src="" alt="" className="w-32 z-10 absolute opacity-10 -top-5 -left-7" />
                    <div className="flex flex-col relative z-20 md:flex-row p-5 md:p-10 gap-7 md:gap-3 justify-between items-center w-full">
                        <div className='w-full md:w-3/6 text-left pt-7 md:pt-0 md:-mt-7'>
                            <div className="w-full md:w-2/3">
                                <p className="bg-base-100 shadow-xl border text-sm border-slate-300 rounded-xl py-3 px-2">
                                    Our company provides the best customer service for their customer. As a result, our customers will have 100% assurance of satisfaction.</p>
                                <div className='text-black space-y-2 md:space-y-0 font-bold flex flex-col mt-4 gap-8'>
                                    <a href={`tel:+`} className="px-2 py-3 w- bg-base-100  focus:outline-1 focus:shadow-outline border flex items-center gap-2 border-slate-300 rounded-xl"><span className="text-primary p-2"><FaPhone /> </span> + 01 234 567 88</a>
                                    <a href={`mailto:`} className="px-2 py-3 w- bg-base-100 shadow-xl border border-slate-300 rounded-xl flex items-center gap-2"><span className="text-primary p-2"><FaEnvelope /> </span> info@example.com</a>
                                    <a href='#!' className="px-2 py-3 w- bg-base-100 shadow-xl border border-slate-300 rounded-xl flex items-center gap-2"><span className="text-primary p-2"><FaMapMarker /></span>New York, NY 10012, US</a>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-3/6">
                            <form>
                                <div >
                                    {/* <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span> */}
                                    <input name='name' className="w-full bg-base-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline file-input file-input-bordered file-input-primary"
                                        type="text" placeholder="Name" required />
                                </div>
                                <div className="mt-8">
                                    {/* <span className="uppercase text-sm text-gray-600 font-bold">Email</span> */}
                                    <input name='email' required className="w-full bg-base-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline file-input file-input-bordered file-input-primary" placeholder='Email'
                                        type="email" />
                                </div>
                                <div className="mt-8">
                                    {/* <span className=" text-md text-gray-600 font-bold ">Send Message</span> */}
                                    <textarea name='message' placeholder='Message (please input a-z charecter only. *)' required className="w-full h-32 bg-base-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline file-input file-input-bordered file-input-primary"></textarea>
                                </div>
                                {/* <div className="w-full flex justify-center items-center mt-8">
                                    <div className="g-recaptcha" data-sitekey="6LfD1IojAAAAAM9YQghZkffaW4zEkHhJRj9COz4W"></div>
                                </div> */}
                                <div className="mt-8 text-center">
                                    <button type="submit" className="uppercase cursor-pointer text-sm font-bold tracking-wide bg-info text-base-100 p-3 rounded-md  focus:outline-none focus:shadow-outline hover:opacity-90 " >
                                        Send Message
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default LetsTalk;