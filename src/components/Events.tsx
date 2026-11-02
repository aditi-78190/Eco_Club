import { useState, useEffect } from 'react';
import { EVENTS_DATA, ClubEvent } from '../data/eventsData';
import {
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  X,
  Ticket,
  ArrowRight,
  Info,
} from 'lucide-react';

export default function Events() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'ongoing' | 'past'>('upcoming');
  const [registeringEvent, setRegisteringEvent] = useState<ClubEvent | null>(null);
  const [registeredIds, setRegisteredIds] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rollNo: '',
    branchYear: '',
    notes: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lastRefId, setLastRefId] = useState('');

  // Load existing registrations from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('eco_club_event_registrations');
      if (stored) {
        const parsed = JSON.parse(stored);
        setRegisteredIds(parsed.map((item: { eventId: string }) => item.eventId));
      }
    } catch {
      // ignore
    }
  }, []);

  const filteredEvents = EVENTS_DATA.filter((e) => e.tab === activeTab);

  const handleOpenRegister = (event: ClubEvent) => {
    setRegisteringEvent(event);
    setFormSubmitted(false);
    setFormData({
      name: '',
      email: '',
      rollNo: '',
      branchYear: '',
      notes: '',
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.rollNo) return;

    const ref = `ECO-REG-${Math.floor(100000 + Math.random() * 900000)}`;
    setLastRefId(ref);

    try {
      const existing = JSON.parse(localStorage.getItem('eco_club_event_registrations') || '[]');
      const newEntry = {
        ...formData,
        eventId: registeringEvent?.id,
        eventTitle: registeringEvent?.title,
        registeredAt: new Date().toISOString(),
        refId: ref,
      };
      existing.push(newEntry);
      localStorage.setItem('eco_club_event_registrations', JSON.stringify(existing));
      if (registeringEvent) {
        setRegisteredIds((prev) => [...prev, registeringEvent.id]);
      }
    } catch {
      // LocalStorage fallback
    }

    setFormSubmitted(true);
  };

  return (
    <section id="events" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-[#123D2A] text-xs font-semibold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#1F8A55]" />
            <span>Campus Community Calendar</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#123D2A] tracking-tight mb-4">
            Drives, Workshops & Hackathons
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Participate in our upcoming environmental initiatives, track live campaigns, and explore recaps of past student drives.
          </p>
          <div className="inline-flex items-center gap-1.5 mt-3 text-xs text-stone-500 bg-stone-50 px-3 py-1 rounded-full border border-stone-200">
            <Info className="w-3.5 h-3.5 text-[#1F8A55]" />
            <span>Clearly marked demo event schedules for the 2026 academic calendar</span>
          </div>
        </div>

        {/* 3 Tabs */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#F7F8F2] border border-stone-200/90 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab('upcoming')}
              className={`px-5 sm:px-7 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'upcoming'
                  ? 'bg-[#123D2A] text-white shadow-sm'
                  : 'text-stone-600 hover:text-[#123D2A]'
              }`}
            >
              Upcoming Events
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('ongoing')}
              className={`px-5 sm:px-7 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'ongoing'
                  ? 'bg-[#123D2A] text-white shadow-sm'
                  : 'text-stone-600 hover:text-[#123D2A]'
              }`}
            >
              Ongoing Events
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('past')}
              className={`px-5 sm:px-7 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'past'
                  ? 'bg-[#123D2A] text-white shadow-sm'
                  : 'text-stone-600 hover:text-[#123D2A]'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => {
            const isAlreadyRegistered = registeredIds.includes(event.id);

            return (
              <div
                key={event.id}
                className="bg-[#F7F8F2] rounded-3xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                {/* Banner */}
                <div className="relative h-48 overflow-hidden bg-stone-100">
                  <img
                    src={event.image}
                    alt={event.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-3.5 left-3.5">
                    <span
                      className={`text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-xs text-white ${
                        event.tab === 'upcoming'
                          ? 'bg-[#1F8A55]'
                          : event.tab === 'ongoing'
                          ? 'bg-amber-600'
                          : 'bg-stone-600'
                      }`}
                    >
                      {event.statusLabel}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs text-emerald-200 font-medium">
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#123D2A] mb-3 group-hover:text-[#1F8A55] transition-colors">
                      {event.title}
                    </h3>

                    {/* Metadata items */}
                    <div className="space-y-2 mb-4 text-xs text-stone-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#1F8A55] shrink-0" />
                        <span className="font-medium text-stone-800">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#1F8A55] shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#1F8A55] shrink-0" />
                        <span className="line-clamp-1">{event.venue}</span>
                      </div>
                    </div>

                    <p className="text-stone-600 text-sm leading-relaxed mb-6">
                      {event.shortDesc}
                    </p>
                  </div>

                  {/* Button Action */}
                  <div className="pt-4 border-t border-stone-200/60 flex items-center justify-between">
                    {event.tab === 'past' ? (
                      <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                        Event Concluded
                      </span>
                    ) : isAlreadyRegistered ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F8A55]">
                        <CheckCircle className="w-4 h-4" />
                        Registered
                      </span>
                    ) : (
                      <span className="text-xs text-stone-500">
                        {event.registeredCount} Students Enrolled
                      </span>
                    )}

                    {event.registrationOpen ? (
                      <button
                        type="button"
                        onClick={() => handleOpenRegister(event)}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          isAlreadyRegistered
                            ? 'bg-emerald-100 text-[#123D2A] hover:bg-emerald-200'
                            : 'bg-[#123D2A] text-white hover:bg-[#1F8A55] shadow-xs'
                        }`}
                      >
                        <Ticket className="w-3.5 h-3.5" />
                        <span>{isAlreadyRegistered ? 'View Pass' : 'Register Now'}</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleOpenRegister(event)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-stone-600 hover:text-[#123D2A] cursor-pointer"
                      >
                        <span>View Recap</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Registration & Event Detail Modal */}
      {registeringEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setRegisteringEvent(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 text-stone-800 shadow-2xl border border-stone-200 max-h-[92vh] overflow-y-auto animate-in zoom-in-95 duration-150 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setRegisteringEvent(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              /* Success State */
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#1F8A55] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#123D2A] mb-2">
                  Registration Confirmed!
                </h3>
                <p className="text-sm text-stone-600 mb-6">
                  You are confirmed for <strong className="text-stone-900">{registeringEvent.title}</strong>.
                </p>

                <div className="bg-[#F7F8F2] rounded-2xl p-5 border border-stone-200 mb-6 text-left space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-500">Registration Pass ID:</span>
                    <span className="font-mono font-bold text-[#123D2A]">{lastRefId}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-500">Attendee:</span>
                    <span className="font-medium text-stone-800">{formData.name}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-500">Date & Time:</span>
                    <span className="font-medium text-stone-800">{registeringEvent.date}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-500">Venue:</span>
                    <span className="font-medium text-stone-800">{registeringEvent.venue}</span>
                  </div>
                </div>

                <p className="text-xs text-stone-400 italic mb-6">
                  Demo notice: This pass has been recorded to your browser storage. Present this pass or Roll Number at the Registration Desk on event day.
                </p>

                <button
                  type="button"
                  onClick={() => setRegisteringEvent(null)}
                  className="w-full py-2.5 rounded-xl bg-[#123D2A] text-white font-semibold text-sm hover:bg-[#1F8A55] transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              /* Event Overview & Form */
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#1F8A55] block mb-1">
                  {registeringEvent.category} · {registeringEvent.statusLabel}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#123D2A] mb-3">
                  {registeringEvent.title}
                </h3>

                <div className="bg-[#F7F8F2] rounded-xl p-3.5 mb-5 space-y-1.5 text-xs text-stone-600 border border-stone-200">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#1F8A55]" />
                    <span>{registeringEvent.date} ({registeringEvent.time})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#1F8A55]" />
                    <span>{registeringEvent.venue}</span>
                  </div>
                </div>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-5">
                  {registeringEvent.fullDesc}
                </p>

                {registeringEvent.registrationOpen ? (
                  <form onSubmit={handleFormSubmit} className="space-y-4 pt-4 border-t border-stone-200">
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#123D2A]">
                      Participant Registration Form
                    </h4>

                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Aditi Sharma"
                        className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A55]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-stone-700 mb-1">
                          College Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="student@abes.ac.in"
                          className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A55]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-700 mb-1">
                          Roll / Admission No. <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.rollNo}
                          onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
                          placeholder="e.g. 2100320100012"
                          className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A55]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        Branch & Year (e.g. CSE - 2nd Year)
                      </label>
                      <input
                        type="text"
                        value={formData.branchYear}
                        onChange={(e) => setFormData({ ...formData, branchYear: e.target.value })}
                        placeholder="e.g. ECE 3rd Year"
                        className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A55]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-[#123D2A] text-white font-semibold text-sm hover:bg-[#1F8A55] transition-colors shadow-sm"
                      >
                        Confirm Event Registration
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="pt-4 border-t border-stone-200">
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#123D2A] mb-2">
                      Key Event Highlights
                    </h4>
                    <ul className="space-y-1.5 mb-6 text-xs text-stone-600">
                      {registeringEvent.keyTakeaways.map((k, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#1F8A55]" />
                          <span>{k}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={() => setRegisteringEvent(null)}
                      className="w-full py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium text-sm transition-colors"
                    >
                      Close Summary
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
