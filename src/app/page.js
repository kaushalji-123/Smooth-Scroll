import ImageList from '@/Components/ImageList'
import Image from 'next/image'
export default function Home() {
  return (
    <main className="flex flex-col w-full justify-center items-center p-24 ">
      <ImageList/>
      <button className='p-4 m-5 rounded-md bg-slate-500'>click me </button>

    </main>
  )
}
