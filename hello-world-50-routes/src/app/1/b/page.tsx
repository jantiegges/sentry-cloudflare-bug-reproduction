export const runtime = 'edge';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Hello World</h1>
      <Image
        src={'/bug-meme.jpg'}
        alt="bug-meme"
        width={420}
        height={240}
      />
    </div>
  );
}
