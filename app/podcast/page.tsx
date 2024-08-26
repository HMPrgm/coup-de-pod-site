import Head from 'next/head';
import Explainer from '../components/explainer';

export default function Page() {
  return (
    <main className="min-h-screen pt-16 ">
      <div className='flex flex-col text-center items-center justify-center  pt-12 pb-10'>
        <h2 className='text-black text-5xl font-title pb-10'>Recent Episode</h2>
        <iframe src="https://open.spotify.com/embed/show/4ZiJcyjqtUC9G09zIqdcVY?utm_source=generator&theme=0&t=0" width="90%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <hr />
      <Explainer picture='/UVA.jpg' picAlt='Temporary photo' title='Our Purpose' paragraph='Explain our purpose blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah. blah blah blah blah blah; blah blah blah blah blah, blah!'></Explainer>
    </main>
  );
};
