export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero';
import Features from '@/components/features';
import FeaturesBlocks from '@/components/features-blocks';

import { auth } from "@/app/api/firebase/firebaseConfig";
import { currentUser } from "@/components/ui/header";


export default function Home() {

  if (currentUser != undefined){
    console.log(currentUser.displayName);
    console.log(currentUser.email);
  }

  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
    </>
  )
}
