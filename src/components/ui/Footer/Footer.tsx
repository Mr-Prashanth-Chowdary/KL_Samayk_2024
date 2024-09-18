import logo from "../../../assets/samyaklogo.png"
import insta from "../../../assets/insta.png"
import fb from "../../../assets/fb.png"
import yt from "../../../assets/yt.png"

export function Footer(){
    return(
        <>
<div className=" py-10 dark:bg-neutral-900 px-5">
<div className="flex justify-between ">
    <div className="">
        <img className="samyaklogo inline-block h-30 w-20" src={logo} alt="Samyak logo" />
        <p className="inline-block text-white">SAMYAK</p>
        <div className="px-5 flex gap-5 pt-5">
            <a href="https://www.instagram.com/kl.samyak"  target="_blank"><img className="md:h-5 w-5" src={insta} alt="insta logo" /></a>
            <a href="https://www.facebook.com/kl.samyak/"  target="_blank"><img className="md:h-5 w-5" src={fb} alt="fb logo" /></a>
            <a href="https://www.youtube.com/channel/UCPrOyzURgK0t6qVVeKWUcaQ"  target="_blank"><img className="md:h-5 w-5" src={yt} alt="yt logo" /></a>
        </div>
    </div>
   
    <div className="text-white ">
        <ul className="md:flex gap-3 md:text-base">
            <a href="/"><li>home</li></a>
            <a href="/About"><li>about</li></a>
            <a href="https://www.kluniversity.in/contact.aspx" target="_blank"><li>help</li></a>
            <a href="https://www.kluniversity.in/satu.aspx" target="_blank"><li>Compliance</li></a>
            <li>Sponsors</li>
            <li>profile</li>
        </ul> 
        </div>
        </div>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <div>
            <p className="dark:text-neutral-600 text-center sm:text-sm">Copyright &#x24D2; 2024, All Right Reserved SAMYAK</p>
        </div>
        </div>
        </>
        )
}