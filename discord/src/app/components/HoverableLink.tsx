import { useState } from 'react';
import  Link from 'next/link';

const HoverableLink = ({ icon, text, href }: { icon: JSX.Element, text: string, href: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link 
            className="hover:cursor-pointer hover:brightness-75 relative" 
            href={href}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            {icon}
            {isHovered ? (
                <p className="text-xl p-2 bg-slate-900 rounded-md text-white absolute top-0 left-full mt-2 ml-2">
                    {text}
                </p>
            ): null}
        </Link>
    );
};

export default HoverableLink;