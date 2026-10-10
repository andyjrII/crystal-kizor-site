'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { chapters } from '@/lib/brands';

const interestIds = new Set(chapters.map((c) => c.id));

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const [interest, setInterest] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.('a[data-interest]');
      if (!link) return;
      const id = link.getAttribute('data-interest') ?? '';
      if (interestIds.has(id)) setInterest(id);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          interest: data.get('interest'),
          message: data.get('message'),
        }),
      });
      if (!res.ok) throw new Error('send failed');
      setStatus('sent');
      form.reset();
      setInterest('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form id='contact' className='contact-form' onSubmit={onSubmit}>
      <h3>Send an enquiry</h3>
      <div className='field'>
        <label htmlFor='contact-name'>Your name</label>
        <input
          id='contact-name'
          name='name'
          type='text'
          autoComplete='name'
          required
          maxLength={120}
          disabled={status === 'sending'}
        />
      </div>
      <div className='field'>
        <label htmlFor='contact-email'>Email</label>
        <input
          id='contact-email'
          name='email'
          type='email'
          autoComplete='email'
          required
          maxLength={254}
          disabled={status === 'sending'}
        />
      </div>
      <div className='field'>
        <label htmlFor='contact-interest'>I&apos;m interested in</label>
        <select
          id='contact-interest'
          name='interest'
          required
          value={interest}
          onChange={(event) => setInterest(event.target.value)}
          disabled={status === 'sending'}
        >
          <option value=''>Choose a topic</option>
          {chapters.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      <div className='field'>
        <label htmlFor='contact-message'>Message</label>
        <textarea
          id='contact-message'
          name='message'
          required
          maxLength={5000}
          disabled={status === 'sending'}
        />
      </div>
      <button className='btn' type='submit' disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      {status === 'sent' && (
        <p role='status' className='form-note'>
          Thank you — your message has been sent.
        </p>
      )}
      {status === 'error' && (
        <p role='status' className='form-note'>
          Something went wrong, please try again in a moment.
        </p>
      )}
    </form>
  );
}
