
import {Header} from "@/components";
import Image from "next/image";
import {mediaBanner} from '@/constants/assets';
export default function Login() {
  return (
    <div className="relative h-[50rem]">
    <Image 
      src={mediaBanner} 
      alt="media Banner" 
      layout="fill" 
      objectFit="cover"
    />
    <Header />
  </div>
  );
}
