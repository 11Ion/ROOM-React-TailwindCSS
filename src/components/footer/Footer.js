import logo from "../../resources/img/logo-white.svg";
import facebook from "../../resources/img/fb.svg";
import instagram from "../../resources/img/inst.svg";
import linkedin from "../../resources/img/linkedin.svg";
import pinterest from "../../resources/img/printerest.svg";
import { Link } from "react-router-dom";

const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const Footer = () => {
    return (  
        <footer className="Footer bg-[#2B2B2B] overflow-hidden flex justify-between">
            <div className="px-6 w-full max-w-6xl mx-auto pt-24 pb-24">
                <div className="grid grid-cols-1 gap-6 lg:gap-0 lg:grid-cols-4 ">
                    <div>
                        <img className="w-[87px] h-[87px]" src={logo} alt="Logo" />
                    </div>
                    <div className="flex flex-col ssm:grid gap-5 md:gap-0 grid-rows-2 md:grid-rows-1 justify-center lg:justify-normal lg:grid-rows-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-2 text-white font-roboto text-sm max-w-full lg:max-w-[310px]">
                        <ul>
                            <li className="pb-[17px]">
                                <Link
                                    to="/About"
                                    className="hover:opacity-80"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Compare"
                                    className="hover:opacity-80"
                                >
                                    Compare
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Reviews"
                                    className="hover:opacity-80"
                                >
                                    Reviews
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Risk-Free-Trial"
                                    className="hover:opacity-80"
                                >
                                    Risk-Free Trial
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Careers"
                                    className="hover:opacity-80"
                                >
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Press"
                                    className="hover:opacity-80"
                                >
                                    Press
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Podcast"
                                    className="hover:opacity-80"
                                >
                                    Podcast
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Blog"
                                    className="hover:opacity-80"
                                >
                                    Blog
                                </Link>
                            </li> 
                        </ul>
                        
                        <ul>
                            <li className="pb-[17px]">
                                <Link
                                    to="/Support"
                                    className="hover:opacity-80"
                                >
                                    Support   
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/FAQ"
                                    className="hover:opacity-80"
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Booth-Assembly"
                                    className="hover:opacity-80"
                                >
                                    Booth Assembly
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Delivery"
                                    className="hover:opacity-80"
                                >
                                    Delivery
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Room-Service"
                                    className="hover:opacity-80"
                                >
                                    Room Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Warranty"
                                    className="hover:opacity-80"
                                >
                                    Warranty
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Terms-of-Use"
                                    className="hover:opacity-80"
                                >
                                    Terms of Use
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Privacy-Policy"
                                    className="hover:opacity-80"
                                >
                                    Privacy Policy
                                </Link>
                            </li> 
                            <li>
                                <Link
                                    to="/Copyright"
                                    className="hover:opacity-80"
                                >
                                    Copyright
                                </Link>
                            </li> 
                        </ul>
                        <ul>
                            <li className="pb-[17px]">
                                <Link
                                    to="/Showrooms"
                                    className="hover:opacity-80"
                                >
                                    Showrooms   
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/New-York"
                                    className="hover:opacity-80"
                                >
                                    New York
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/London"
                                    className="hover:opacity-80"
                                >
                                    London
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/San-Francisco"
                                    className="hover:opacity-80"
                                >
                                    San Francisco
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Paris"
                                    className="hover:opacity-80"
                                >
                                    Paris
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Copenhagen"
                                    className="hover:opacity-80"
                                >
                                    Copenhagen
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Zürich"
                                    className="hover:opacity-80"
                                >
                                    Zürich
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Los Angeles"
                                    className="hover:opacity-80"
                                >
                                    Los Angeles
                                </Link>
                            </li> 
                            <li>
                                <Link
                                    to="/Berlin"
                                    className="hover:opacity-80"
                                >
                                    Berlin
                                </Link>
                            </li> 
                            <li>
                                <Link
                                    to="/Belgium"
                                    className="hover:opacity-80"
                                >
                                    Belgium
                                </Link>
                            </li> 
                            <li>
                                <Link
                                    to="/Virtual-Demo"
                                    className="hover:opacity-80"
                                >
                                    Virtual Demo
                                </Link>
                            </li> 
                        </ul>
                        <ul>
                            <li className="pb-[17px]">
                                <Link
                                    to="/Office"
                                    className="hover:opacity-80"
                                >
                                    Office   
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Office"
                                    className="max-w-[125px] hover:opacity-80"
                                >
                                    599 Broadway, FL 9 New York, NY 10012   
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-white text-sm pb-[17px]">Follow us</p>
                        <ul className="flex gap-3">
                            <li>
                                <img className="w-[20px] h-[20px]" src={facebook} alt="facebook" />
                            </li>
                            <li>
                                <img className="w-[20px] h-[20px]" src={instagram} alt="instagram" />
                            </li>
                            <li>
                                <img className="w-[20px] h-[20px]" src={linkedin} alt="linkedin" />
                            </li>
                            <li>
                                <img className="w-[20px] h-[20px]" src={pinterest} alt="pinterest" />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-white text-sm ">
                            Join our mailing list
                        </p>
                        <p className="pt-[17px] pb-[30px] text-white text-sm ">
                            Be the first to hear everything about ROOM.
                        </p>
                        <form className="w-full max-[327px] flex-wrap flex justify-end" method="POST">
                            <input className="w-full bg-transparent border-[#ffffff66] border-2 outline-none text-white pl-2 h-[54px]" />
                            <input type="submit" className="hidden"/>
                            <select className=" rounded-sm outline-none max-w-[120px] mt-4 bg-transparent text-[#ffffff80] text-sm border-none">
                                <option className="text-black" value="US">
                                    United States
                                </option>
                                <option value="other-1" className="text-black">
                                    Country
                                </option>
                                <option value="other-2" className="text-black">
                                    Country
                                </option>
                                <option value="other-3" className="text-black">
                                    Country
                                </option>
                            </select>
                            <div className="w-full flex items-start gap-5 pt-14">
                                <input type="checkbox" className=" bg-transparent w-[28px] h-[26px] border-[#ffffff66] border-2 "/>
                                <p className="text-[11px] uppercase text-[#ffffff66]">
                                    Yes. I would like to receive marketing communications from ROOM about product updates and special offers. Please refer to ROOM’s Privacy Policy for more information about how we process your data (including how to unsubscribe). 
                                </p>
                            </div>
                        </form>

                    <div className="pt-14 w-full flex justify-end">
                        <Link
                            to="/Sign-up"
                            className="text-white uppercase text-sm"
                        >
                            Sign Up
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-end justify-items-end pb-24">
                <button
                    onClick={scrollTop}
                    className="-rotate-90 text-white uppercase cursor-pointer text-[11px]"
                >
                    Return to the top
                </button>
            </div>
        </footer>
    );
}
 
export default Footer;