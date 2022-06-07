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
     <div className="text-center  w-8/12 mx-auto border rounded-2xl shadow-2xl p-6 mb-8">
       <div className="pt-2">
         <div className="flex justify-start flex-row-reverse mr-12 border-b-2 pb-2">
           <Image
             src={src}
             width={130}
             height={130}
             className="rounded"
             style={{ borderRadius: '50%' }}
           />
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
             <FaFacebook className="fa-xl hover:text-slate-800 cursor-pointer" />
           </Link>
           <Link href="https://www.linkedin.com">
             <FaLinkedin className="fa-xl hover:text-slate-800 cursor-pointer" />
           </Link>
           <Link href="https://www.intsgram.com">
             <FaInstagramSquare className="fa-xl hover:text-slate-800 cursor-pointer" />
           </Link>
           <Link href="https://www.Twitter.com">
             <FaTwitter className="fa-xl hover:text-slate-800 cursor-pointer" />
           </Link>
         </div>
       </div>
     </div>
   );
 };
export default SldirDetailes;