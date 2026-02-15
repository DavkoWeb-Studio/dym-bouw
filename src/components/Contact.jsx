import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    service: '', 
    message: '',
    honeypot: '' 
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Naam is verplicht";
    if (!form.email.trim()) newErrors.email = "Email is verplicht";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Ongeldig emailadres";
    if (!form.message.trim()) newErrors.message = "Bericht is verplicht";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.honeypot) return;
    if (!validateForm()) return;
    
    setSending(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'f3666b26-c328-4667-b969-267cc08a3d83',
          subject: `Nieuwe aanvraag van ${form.name} - DYM Bouw`,
          from_name: 'DYM Bouw Website',
          name: form.name,
          email: form.email,
          phone: form.phone || 'Niet opgegeven',
          service: form.service || 'Niet geselecteerd',
          message: form.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSent(true);
        setForm({ name: '', email: '', phone: '', service: '', message: '', honeypot: '' });
        setTimeout(() => setSent(false), 5000);
      } else {
        alert('Er is iets misgegaan. Probeer het later opnieuw.');
      }
    } catch (err) {
      console.error("Fout bij verzenden:", err);
      alert('Fout bij het verzenden.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-transparent text-white relative">
      {/* ZMIANA 1: Zmieniłem lg:grid-cols-3 na lg:grid-cols-2. Teraz jest podział 50% na 50% */}
      {/* Zwiększyłem też gap z 10 na 16 dla lepszego odstępu */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Lewa kolumna - Info */}
        {/* ZMIANA 2: Usunąłem lg:col-span-1, teraz zajmuje połowę automatycznie */}
        <div className="rounded-[2.5rem] p-8 md:p-12 bg-black/70 backdrop-blur-md border border-white/10 h-full flex flex-col justify-center shadow-2xl">
          <div className="mb-12">
            <h3 className="font-black text-5xl text-white">DYM Bouw</h3>
            <div className="text-2xl font-bold text-primary mt-3">Professioneel Timmerman</div>
          </div>

          <div className="space-y-10">
            <ContactItem icon={<Phone />} label="Telefoon" value="+31 6 261 615 44" href="tel:+316261544" />
            {/* Poprawiłem spacje w value */}
            <ContactItem icon={<Mail />} label="Email" value="dymbouw@gmail.com" href="mailto:dymbouw@gmail.com" />
            <ContactItem icon={<MapPin />} label="Werkgebied" value="Heel Nederland" />
            
            <div className="mt-8 p-8 rounded-3xl bg-white/5 border border-white/5">
              <div className="flex items-start gap-6">
                <Clock className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Werktijden</div>
                  <div className="font-bold text-white text-2xl">Ma - Vr: 07:00 - 18:00</div>
                  <div className="text-lg font-bold text-primary mt-2">Ook beschikbaar in het weekend</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prawa kolumna - Formularz */}
        {/* ZMIANA 3: Usunąłem lg:col-span-2 */}
        <div className="bg-black/70 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">Neem contact op</h2>
          <p className="text-gray-300 mb-10 text-xl">Vraag vrijblijvend een offerte aan of stel uw vraag.</p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input type="text" name="honeypot" value={form.honeypot} onChange={handleChange('honeypot')} className="hidden" />
            
            <InputField 
              label="Naam" 
              name="name" 
              value={form.name} 
              onChange={handleChange('name')} 
              placeholder="Uw naam" 
              error={errors.name} 
            />
            
            <InputField 
              label="Email" 
              name="email" 
              type="email"
              value={form.email} 
              onChange={handleChange('email')} 
              placeholder="uw@email.nl" 
              error={errors.email} 
            />

            <InputField 
              label="Telefoonnummer (optioneel)" 
              name="phone" 
              value={form.phone} 
              onChange={handleChange('phone')} 
              placeholder="+31 6..." 
            />

            <div>
              <label className="text-lg font-bold text-gray-200 ml-2 mb-2 block">Dienst</label>
              <select 
                value={form.service} 
                name="service"
                onChange={handleChange('service')}
                className="w-full p-5 rounded-2xl border border-white/10 bg-black/50 text-white text-lg focus:border-primary focus:ring-2 focus:ring-primary outline-none transition-all appearance-none cursor-pointer font-medium"
              >
                <option value="">Maak een keuze...</option>
                <option value="nieuwbouw">Nieuwbouw</option>
                <option value="renovatie">Renovatie</option>
                <option value="onderhoud">Onderhoud</option>
                <option value="overig">Overig</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="text-lg font-bold text-gray-200 ml-2 mb-2 block">Bericht</label>
              <textarea 
                value={form.message} 
                name="message"
                onChange={handleChange('message')}
                rows={4}
                className={`w-full p-5 rounded-2xl border bg-black/50 text-white text-lg focus:ring-2 outline-none transition-all resize-none font-medium ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-primary'}`}
                placeholder="Beschrijf uw project..."
              />
              {errors.message && <p className="text-red-400 text-sm mt-2 ml-2 font-bold">{errors.message}</p>}
            </div>

            <div className="md:col-span-2 mt-4">
              <button 
                type="submit" 
                disabled={sending}
                className={`w-full md:w-auto px-10 py-5 rounded-2xl font-black text-xl text-black transition-all ${
                  sending ? 'bg-gray-600 cursor-not-allowed' : 'bg-primary hover:bg-orange-500 hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02]'
                }`}
              >
                {sending ? 'Verzenden...' : 'Bericht Versturen'}
              </button>
              {sent && <p className="text-green-400 font-bold text-lg mt-4 text-center">Bedankt! Uw bericht is verzonden.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

const ContactItem = ({ icon, label, value, href }) => (
  <div className="flex items-start gap-6">
    <div className="p-4 rounded-xl bg-white/5 text-primary shadow-sm border border-white/5">
      {React.cloneElement(icon, { size: 32 })}
    </div>
    <div>
      <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">{label}</div>
      {href ? (
        // Usunąłem break-all, bo teraz kolumna jest szeroka i nie trzeba łamać słów na siłę
        <a href={href} className="font-bold text-white text-xl md:text-3xl hover:text-primary transition-colors block">{value}</a>
      ) : (
        <div className="font-bold text-white text-xl md:text-3xl">{value}</div>
      )}
    </div>
  </div>
);

const InputField = ({ label, name, value, onChange, placeholder, type = "text", error }) => (
  <div>
    <label className="text-lg font-bold text-gray-200 ml-2 mb-2 block">{label}</label>
    <input 
      type={type}
      name={name}
      value={value} 
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full p-5 rounded-2xl border bg-black/50 text-white text-lg font-medium focus:ring-2 outline-none transition-all ${error ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-primary'}`}
    />
    {error && <p className="text-red-400 text-sm mt-2 ml-2 font-bold">{error}</p>}
  </div>
);