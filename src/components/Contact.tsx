import { useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  ExternalLink,
  MessageSquare,
  Globe,
  Instagram,
  Linkedin,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      try {
        const stored = JSON.parse(
          localStorage.getItem('eco_club_contact_messages') || '[]'
        );
        stored.push({
          ...formData,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem(
          'eco_club_contact_messages',
          JSON.stringify(stored)
        );
      } catch {
        // fallback
      }

      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#F7F8F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#123D2A] text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#1F8A55]" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#123D2A] tracking-tight mb-4">
            Get in Touch With the Eco Club
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Have questions about an upcoming plantation drive, proposal for green tech innovation, or want to invite us for a collaborative event? We’d love to hear from you.
          </p>
        </div>

        {/* Contact Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Organization Details & Location */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#123D2A] text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold block mb-2">
                  Official Secretariat
                </span>
                <h3 className="font-serif text-2xl font-semibold text-white mb-6">
                  Eco Club · ABES EC
                </h3>

                {/* Details list */}
                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-3.5 text-stone-200">
                    <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Campus Address</strong>
                      <span>ABES Engineering College, 19th KM Stone, NH-24, Delhi-Hapur Bypass Road, Ghaziabad, Uttar Pradesh 201009, India</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 text-stone-200">
                    <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Official Email Address</strong>
                      <span className="text-emerald-200 font-mono text-xs">
                        ecoclub@abes.ac.in
                      </span>
                      <span className="text-[11px] text-stone-400 block mt-0.5">
                        (Official institutional placeholder)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 text-stone-200">
                    <Globe className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Institution Portal</strong>
                      <a
                        href="https://abes.ac.in"
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-200 hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        <span>abes.ac.in</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social placeholders */}
                <div className="mt-8 pt-6 border-t border-emerald-800/80">
                  <span className="text-xs uppercase tracking-wider text-emerald-200/80 font-medium block mb-3">
                    Connect On Social Media
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://instagram.com/ecoclub_abes"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
                      aria-label="Instagram profile placeholder"
                      title="Instagram placeholder: @ecoclub_abes"
                    >
                      <Instagram className="w-5 h-5 text-emerald-300" />
                    </a>
                    <a
                      href="https://linkedin.com/company/eco-club-abes-ec"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
                      aria-label="LinkedIn page placeholder"
                      title="LinkedIn placeholder: Eco Club ABES EC"
                    >
                      <Linkedin className="w-5 h-5 text-emerald-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Campus Photo Callout */}
            <div className="rounded-3xl overflow-hidden border border-stone-200/80 shadow-xs relative h-48">
              <img
                src="/src/assets/images/eco_plantation_drive_1793624155932.jpg"
                alt="Students taking climate action at ABES EC"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5 text-white">
                <span className="text-xs font-medium text-emerald-200">
                  Together towards a zero-waste campus environment
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-sm">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#1F8A55] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#123D2A] mb-2">
                    Message Dispatched!
                  </h3>
                  <p className="text-stone-600 text-sm max-w-md mx-auto mb-6">
                    Thank you, {formData.name}. Your inquiry has been saved to the demo inbox. Our PR & Outreach team will review it.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#123D2A] text-white text-xs font-semibold hover:bg-[#1F8A55] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#123D2A] mb-1">
                    Send a Message to the Secretariat
                  </h3>
                  <p className="text-xs text-stone-500 mb-6">
                    All correspondence is acknowledged during academic working days.
                  </p>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Verma"
                      className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A55] text-stone-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A55] text-stone-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Collaboration Proposal for Earth Day"
                      className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A55] text-stone-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note, feedback, or inquiry here..."
                      className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A55] text-stone-800"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-xl bg-[#123D2A] text-white font-semibold text-sm hover:bg-[#1F8A55] active:scale-95 transition-all shadow-sm cursor-pointer disabled:opacity-50 inline-flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
