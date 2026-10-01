'use client';

import PageHero from '@/components/PageHero';
import { MapPin, Mail, Phone, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { appendToStorage } from '@/lib/storage';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  function submit(e) {
    e.preventDefault();
    if (!form.name || !/^\S+@\S+\.\S+$/.test(form.email) || !form.subject || !form.message) {
      return toast.error('Please complete all fields with a valid email.');
    }
    appendToStorage('hope_contact_submissions', form);
    toast.success('Your message has been sent successfully!');
    setForm({ name: '', email: '', subject: '', message: '' });
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Questions, partnership ideas or something you want to share? We would love to hear from you."
        image="https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?auto=format&fit=crop&w=1800&q=85"
      />

      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="text-[10px] font-bold tracking-[.25em] text-black/40">GET IN TOUCH</p>
            <h2 className="mt-3 text-4xl font-bold">We’re here to help.</h2>
            <div className="mt-7 space-y-5 text-sm text-black/65">
              <p className="flex gap-3"><MapPin className="text-gold" />123 Hope Street, Dhaka, Bangladesh</p>
              <p className="flex gap-3"><Mail className="text-gold" />hello@thehopeproject.org</p>
              <p className="flex gap-3"><Phone className="text-gold" />+880 123 456 789</p>
              <p className="flex gap-3"><Clock className="text-gold" />Mon–Fri, 9:00 AM – 6:00 PM</p>
            </div>
            <div className="mt-8 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, index) => (
                <a
                  href="#"
                  key={index}
                  aria-label="Social media"
                  className="grid h-10 w-10 place-items-center bg-forest text-white transition hover:bg-gold hover:text-forest"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={submit} className="grid gap-4 bg-cream p-7 md:grid-cols-2">
            <input className="input-field" name="name" value={form.name} onChange={change} placeholder="Name *" />
            <input className="input-field" name="email" value={form.email} onChange={change} placeholder="Email *" />
            <input className="input-field md:col-span-2" name="subject" value={form.subject} onChange={change} placeholder="Subject *" />
            <textarea className="input-field min-h-40 md:col-span-2" name="message" value={form.message} onChange={change} placeholder="Message *" />
            <button className="btn-primary md:col-span-2" type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-site">
          <div className="mb-7 text-center">
            <p className="text-[10px] font-bold tracking-[.25em] text-black/40">FIND US</p>
            <h2 className="mt-3 text-4xl font-bold">Our Office Location</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-black/60">
              Explore the map below to view our location in Dhaka, Bangladesh.
            </p>
          </div>
          <div className="overflow-hidden border border-black/10 bg-white shadow-soft">
            <iframe
              src="https://www.google.com/maps?q=Dhaka%2C%20Bangladesh&z=13&output=embed"
              width="100%"
              height="460"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Hope Project office location in Dhaka, Bangladesh"
              className="block min-h-[340px] w-full md:min-h-[460px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
