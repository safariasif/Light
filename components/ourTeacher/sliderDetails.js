import Image from 'next/image'
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagramSquare,
} from 'react-icons/fa';
import Link from 'next/link'
 const SldirDetailes = ({
   name,
   lastName,
   src,
   id,
   job,
   exp,
   about,
   linkedIn,
   twitter,
   facebook,
   instagram,
 }) => {
   return (
     <div className="md:text-center  md:w-8/12 w-full mx-auto border rounded-2xl shadow-gray-200 shadow-2xl md:p-6 p-2 mb-8">
       <div className="pt-2">
         <div className="sm_lmobile:flex sm_lmobile:justify-start block  w-full text-center sm:pr-6  flex-row-reverse mr-12 border-b-2 pb-2">
           <div className="rounded-full ">
             <Image
               src={src}
               width={130}
               height={130}
               className="rounded-full"
               alt="teacherProfile"
               /* style={{ borderRadius: '50%' }} */
             />
           </div>
           <div className="mr-12 mt-4">
             <h2 className="text-3xl font-bold">
               {name} {lastName}
             </h2>
             <h2> {job} : وظیفه</h2>
             <h2>تجربه : {exp} سال</h2>
           </div>
         </div>
         <p>
           <span className="text-2xl text-neutral-900 font-bold">درباره :</span>
           <span>{about}</span>
         </p>
         <div className="pt-8  flex  justify-center space-x-5">
           <Link href="https://www.facebook.com">
             <FaFacebook className="fa-xl text-textWave hover:opacity-80 transition-all cursor-pointer" />
           </Link>
           <Link href="https://www.linkedin.com">
             <FaLinkedin className="fa-xl text-textWave hover:opacity-80 cursor-pointer" />
           </Link>
           <Link href="https://www.intsgram.com">
             <FaInstagramSquare className="fa-xl text-textWave hover:opacity-80 cursor-pointer" />
           </Link>
           <Link href="https://www.Twitter.com">
             <FaTwitter className="fa-xl text-textWave hover:opacity-80 cursor-pointer" />
           </Link>
         </div>
       </div>
     </div>
   );
 };
export default SldirDetailes;