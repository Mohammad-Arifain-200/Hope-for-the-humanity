'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { appendToStorage } from '@/lib/storage';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  function submit(e) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return toast.error('Please enter a valid email address.');
    appendToStorage('hope_newsletter_subscriptions', { email });
    toast.success('Thank you for subscribing!');
    setEmail('');
  }
  return (
    <section className="bg-cream py-10">
      <div className="container-site flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div><h3 className="text-3xl font-bold">Stay Updated</h3><p className="mt-2 max-w-xl text-sm leading-6 text-black/60">Subscribe to our newsletter for the latest updates, heartwarming stories and ways to get involved.</p></div>
        <form onSubmit={submit} className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
          <input className="input-field flex-1" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your email address" aria-label="Email address"/>
          <button className="btn-primary" type="submit">Subscribe →</button>
        </form>
      </div>
    </section>
  );
}
