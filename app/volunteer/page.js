'use client';

import PageHero from '@/components/PageHero';
import VolunteerCard from '@/components/VolunteerCard';
import { HeartHandshake, GraduationCap, Megaphone, CalendarCheck } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { appendToStorage } from '@/lib/storage';

const options = [
  ['Education Support', GraduationCap],
  ['Community Outreach', Megaphone],
  ['Events & Fundraising', CalendarCheck],
  ['Child & Family Support', HeartHandshake],
];

const volunteers = [
  {
    name: 'Ayesha Rahman',
    role: 'Education Volunteer',
    description: 'Supports children with reading sessions, school activities and learning materials.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Tanvir Hasan',
    role: 'Community Outreach',
    description: 'Works with local families and helps coordinate community awareness activities.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Nusrat Jahan',
    role: 'Child Care Volunteer',
    description: 'Helps create safe, friendly and engaging activities for children and families.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Arif Hossain',
    role: 'Events & Fundraising',
    description: 'Assists with charity events, donor engagement and fundraising campaigns.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85',
  },
];

export default function VolunteerPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' });

  function change(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    if (!form.name || !/^\S+@\S+\.\S+$/.test(form.email) || !form.phone || !form.interest) {
      return toast.error('Please complete all required fields.');
    }
    appendToStorage('hope_volunteer_applications', form);
    toast.success('Your volunteer application has been submitted successfully!');
    setForm({ name: '', email: '', phone: '', interest: '', message: '' });
  }

  return (
    <>
      <PageHero
        title="Volunteer With Us"
        subtitle="Give your time, skills and energy to work that strengthens children and communities."
        image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1800&q=85"
      />

      <section className="section-pad">
        <div className="container-site text-center">
          <p className="text-[10px] font-bold tracking-[.25em] text-black/40">WHY VOLUNTEER</p>
          <h2 className="mt-3 text-4xl font-bold">Your time can become someone’s opportunity.</h2>
          <p className="mx-auto mt-5 max-w-3xl leading-7 text-black/60">
            Volunteer roles are designed to be practical, respectful and useful. You can support learning,
            events, outreach or family-focused activities depending on your interests and availability.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {options.map(([title, Icon]) => (
              <div key={title} className="border border-black/10 bg-white p-7 card-hover">
                <Icon className="mx-auto text-gold" size={35} />
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/55">
                  Contribute in a structured role with guidance from our program team.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-site">
          <div className="text-center">
            <p className="text-[10px] font-bold tracking-[.25em] text-black/40">MEET OUR VOLUNTEERS</p>
            <h2 className="mt-3 text-4xl font-bold">People Giving Their Time With Heart</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-black/60">
              Our volunteers contribute their skills, compassion and energy across education, outreach,
              child care and fundraising activities.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {volunteers.map((volunteer) => (
              <VolunteerCard key={volunteer.name} volunteer={volunteer} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-site grid gap-8 md:grid-cols-3">
          {[
            ['1', 'Apply', 'Tell us about your interests, skills and availability.'],
            ['2', 'Meet the team', 'We review the application and arrange a short orientation.'],
            ['3', 'Start volunteering', 'Join a suitable opportunity and receive practical guidance.'],
          ].map(([number, title, description]) => (
            <div className="bg-cream p-7" key={number}>
              <span className="text-5xl font-bold text-gold font-display">{number}</span>
              <h3 className="mt-2 text-2xl font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-black/60">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-[10px] font-bold tracking-[.25em] text-black/40">JOIN THE TEAM</p>
            <h2 className="mt-3 text-4xl font-bold">Volunteer application</h2>
            <p className="mt-4 leading-7 text-black/60">
              Complete the form and our team will contact you when a suitable opportunity is available.
            </p>
            <blockquote className="mt-8 border-l-4 border-gold bg-cream p-5 text-sm italic leading-6 text-black/60">
              “Volunteering here helped me understand how meaningful small, consistent actions can be.”
            </blockquote>
          </div>
          <form onSubmit={submit} className="grid gap-4 bg-white p-7 shadow-soft md:grid-cols-2">
            <input className="input-field" name="name" value={form.name} onChange={change} placeholder="Full Name *" />
            <input className="input-field" name="email" value={form.email} onChange={change} placeholder="Email *" />
            <input className="input-field" name="phone" value={form.phone} onChange={change} placeholder="Phone *" />
            <select className="input-field" name="interest" value={form.interest} onChange={change}>
              <option value="">Area of Interest *</option>
              {options.map(([title]) => (
                <option key={title}>{title}</option>
              ))}
            </select>
            <textarea
              className="input-field min-h-36 md:col-span-2"
              name="message"
              value={form.message}
              onChange={change}
              placeholder="Message"
            />
            <button className="btn-primary md:col-span-2" type="submit">
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
