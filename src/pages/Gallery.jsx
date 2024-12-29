import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const images = [
    {
      id: 'boat-on-logo',
      src: 'https://firebasestorage.googleapis.com/v0/b/showcase-dashboard-4e8a5.appspot.com/o/boat-on-logo.png?alt=media',
      alt: 'Boat On Beach Club Logo',
      title: 'Logo Boat On'
    },
    {
      id: 'vbweb-logo',
      src: 'https://firebasestorage.googleapis.com/v0/b/showcase-dashboard-4e8a5.appspot.com/o/vbweb-caraibes.png?alt=media',
      alt: 'VB Web Caraibes Logo',
      title: 'VB Web Caraibes'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-white mb-8">Galerie</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div key={image.id} className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
