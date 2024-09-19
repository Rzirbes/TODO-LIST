
import Image from 'next/image';
export default function Logo() {
    return (
        <div className='flex items-center 
            gap-2 text-xl
            text-zinc-900 font-black'
        >
            <Image
                src="/images/logo.png"
                width={36} height={36}
                alt="Logo FocalPoint"
            />
            <span>FolcaPoint</span>
        </div>
    )
}