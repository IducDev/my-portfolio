import React from 'react';
import Image from 'next/image';
import whatsapp from '../../public/WhatsApp.svg.png';
import Link from 'next/link';

const WhatsAppBottom = () => {
  return (
    <div className='fixed bottom-4 right-4 z-[9999]'>
        <button 
          type="button" 
          aria-label="Contactar por WhatsApp"
          className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl shadow-lg'
        >
          <Link href="https://wa.me/584260381809" target='_blank' rel="noopener noreferrer">
            <Image src={whatsapp} width={60} height={60} alt="boton de whatsapp" />
          </Link>
        </button>
        
    </div>
  )
}

export default WhatsAppBottom;