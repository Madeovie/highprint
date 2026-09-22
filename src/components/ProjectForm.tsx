import { useState } from 'react';
import { ArrowUpRight, MessageCircle, Upload } from 'lucide-react';
import { RegMark, PrintLabel } from './PrintMarks';
import { useReveal } from '@/hooks/useReveal';
import { whatsappLink } from '@/lib/whatsapp';

const projectTypes = ['PRINT', 'BRANDING', 'MONOGRAM', 'PHOTOLAB', 'LARGE FORMAT', 'CUSTOM PROJECT'];

export default function ProjectForm() {
  const ref = useReveal<HTMLElement>();
  const [type, setType] = useState(projectTypes[0]);
  const [form, setForm] = useState({ name: '', phone: '', whatsapp: '', email: '', description: '', quantity: '', deadline: '' });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const buildWhatsAppMessage = () => {
    const lines = [
      "Hi, I'd like to start a project with High Prints Enterprise.",
      `Type: ${type}`,
      form.name && `Name: ${form.name}`,
      form.phone && `Phone: ${form.phone}`,
      form.whatsapp && `WhatsApp: ${form.whatsapp}`,
      form.email && `Email: ${form.email}`,
      form.quantity && `Quantity: ${form.quantity}`,
      form.deadline && `Deadline: ${form.deadline}`,
      form.description && `Details: ${form.description}`,
    ].filter(Boolean);
    return lines.join('\n');
  };

  return (
    <section id="start" ref={ref} className="relative bg-[var(--near-black)] text-[var(--ivory)] py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 halftone-white opacity-30 pointer-events-none" />
      <div className="relative px-5 md:px-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 reveal">
          <PrintLabel className="text-white/60">Section 10 · Start a Project</PrintLabel>
          <span className="flex-1 h-px bg-white/15" />
          <RegMark size={12} className="text-white/40" />
        </div>
        <h2 className="font-display uppercase leading-[0.8] tracking-[-0.03em] text-[18vw] md:text-[13vw] mb-4 reveal">
          What Are<br />You Making<span className="text-[var(--electric)]">?</span>
        </h2>
        <p className="max-w-md font-body text-sm text-white/60 mb-12 reveal">
          Tell us what you're creating. We'll respond with a quote and next steps — usually within the hour.
        </p>

        <div className="grid md:grid-cols-12 gap-10">
          {/* Form */}
          <form className="md:col-span-8 space-y-6 reveal" onSubmit={(e) => e.preventDefault()}>
            {/* Type selection */}
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mb-3">Project Type</label>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setType(p)}
                    className={`font-grotesk text-xs font-bold uppercase tracking-wide px-4 py-2.5 border transition-colors ${
                      type === p ? 'bg-[var(--electric)] text-white border-[var(--electric)]' : 'border-white/25 hover:border-white/60'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Fields */}
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" value={form.name} onChange={update('name')} placeholder="Your name" />
              <Field label="Phone" value={form.phone} onChange={update('phone')} placeholder="+234 ..." type="tel" />
              <Field label="WhatsApp" value={form.whatsapp} onChange={update('whatsapp')} placeholder="+234 ..." type="tel" />
              <Field label="Email" value={form.email} onChange={update('email')} placeholder="you@email.com" type="email" />
              <Field label="Quantity" value={form.quantity} onChange={update('quantity')} placeholder="e.g. 500" />
              <Field label="Deadline" value={form.deadline} onChange={update('deadline')} placeholder="e.g. 2 weeks" />
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2">Project Description</label>
              <textarea
                value={form.description}
                onChange={update('description')}
                rows={4}
                placeholder="Tell us about your project — what you need, sizes, colours, materials..."
                className="w-full bg-transparent border-b border-white/25 focus:border-[var(--electric)] outline-none font-body text-base py-2 resize-none placeholder:text-white/30"
              />
            </div>

            {/* File upload (visual) */}
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2">Reference File (optional)</label>
              <label className="flex items-center gap-3 border border-dashed border-white/25 px-4 py-4 cursor-pointer hover:border-white/50 transition-colors">
                <Upload size={18} className="text-white/50" />
                <span className="font-grotesk text-sm text-white/60">Click to attach artwork or reference image</span>
                <input type="file" className="hidden" />
              </label>
            </div>

            {/* Submit */}
            <a
              href={whatsappLink(buildWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-[var(--electric)] text-white px-8 py-4 font-grotesk text-sm font-bold uppercase tracking-wide hover:bg-white hover:text-[var(--near-black)] transition-colors"
            >
              Get a Quote
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </form>

          {/* WhatsApp sidebar */}
          <aside className="md:col-span-4 reveal">
            <div className="border border-white/20 p-6 md:p-8">
              <PrintLabel className="text-white/60 mb-4">Prefer to chat?</PrintLabel>
              <p className="font-body text-sm text-white/70 mb-6">
                Send us a WhatsApp message directly. We respond fast and you can share photos of what you need right away.
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-[#25D366] text-[var(--near-black)] px-6 py-4 font-grotesk text-sm font-bold uppercase tracking-wide hover:bg-white transition-colors w-full justify-center"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <div className="mt-6 pt-6 border-t border-white/15 space-y-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                <p>Mon–Fri · 8AM–6PM</p>
                <p>Sat · 9AM–4PM</p>
                <p>Sun · Closed</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, placeholder, type = 'text' }: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-white/25 focus:border-[var(--electric)] outline-none font-body text-base py-2 placeholder:text-white/30"
      />
    </div>
  );
}
