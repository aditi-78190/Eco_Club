import { useState, useEffect } from 'react';
import { DIVISIONS } from '../data/teamData';
import { UserPlus, CheckCircle2, Sparkles, Send, RefreshCw, AlertCircle } from 'lucide-react';

export default function JoinUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    collegeEmail: '',
    admissionRollNo: '',
    courseYear: '',
    branch: '',
    preferredDivision: 'Tech & Project',
    whyJoin: '',
    skillsInterests: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [existingCount, setExistingCount] = useState(0);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('eco_club_membership_applications');
      if (stored) {
        const parsed = JSON.parse(stored);
        setExistingCount(parsed.length);
      }
    } catch {
      // ignore
    }
  }, [submitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.fullName.trim() ||
      !formData.collegeEmail.trim() ||
      !formData.admissionRollNo.trim() ||
      !formData.courseYear.trim() ||
      !formData.branch.trim() ||
      !formData.whyJoin.trim()
    ) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const appRef = `ECO-APP-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionId(appRef);

      try {
        const stored = JSON.parse(
          localStorage.getItem('eco_club_membership_applications') || '[]'
        );
        stored.push({
          ...formData,
          applicationRef: appRef,
          appliedAt: new Date().toISOString(),
        });
        localStorage.setItem(
          'eco_club_membership_applications',
          JSON.stringify(stored)
        );
      } catch {
        // LocalStorage fallback
      }

      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      collegeEmail: '',
      admissionRollNo: '',
      courseYear: '',
      branch: '',
      preferredDivision: 'Tech & Project',
      whyJoin: '',
      skillsInterests: '',
    });
  };

  return (
    <section id="join" className="py-24 bg-[#F7F8F2] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#123D2A] text-xs font-semibold uppercase tracking-wider mb-3">
            <UserPlus className="w-3.5 h-3.5 text-[#1F8A55]" />
            <span>Join The Club</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#123D2A] tracking-tight mb-4">
            Be the Change. Join the Green Movement.
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Have ideas for a greener campus? Bring your passion, creativity, and energy to the Eco Club of ABES Engineering College.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-sm relative overflow-hidden">
          {/* Subtle green organic flair */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

          {submitted ? (
            /* Success confirmation */
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#1F8A55] flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1F8A55] block mb-2">
                Application Received Successfully
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#123D2A] mb-3">
                Welcome to the Green Movement, {formData.fullName.split(' ')[0]}!
              </h3>
              <p className="text-stone-600 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
                Your membership interest for the <strong className="text-[#123D2A]">{formData.preferredDivision}</strong> division has been recorded for the upcoming recruitment orientation.
              </p>

              <div className="max-w-md mx-auto bg-[#F7F8F2] rounded-2xl p-6 border border-stone-200 mb-8 text-left space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-stone-500">Application Reference:</span>
                  <span className="font-mono font-bold text-[#123D2A]">{submissionId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Applicant:</span>
                  <span className="font-medium text-stone-800">{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">College Email:</span>
                  <span className="font-medium text-stone-800">{formData.collegeEmail}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Roll Number:</span>
                  <span className="font-medium text-stone-800">{formData.admissionRollNo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Selected Wing:</span>
                  <span className="font-semibold text-[#1F8A55]">{formData.preferredDivision}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs max-w-md mx-auto mb-8 flex items-start gap-2.5 text-left">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
                <span>
                  Demo Mode Note: Data is saved to your browser&apos;s local storage. In a live campus environment, an email confirmation will be sent to your student portal.
                </span>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#123D2A] text-white text-xs font-semibold hover:bg-[#1F8A55] transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Submit Another Application</span>
              </button>
            </div>
          ) : (
            /* Registration Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#123D2A]">
                    Student Membership Application
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Fields marked with <span className="text-red-500 font-bold">*</span> are required.
                  </p>
                </div>
                {existingCount > 0 && (
                  <span className="text-xs text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {existingCount} Local App{existingCount === 1 ? '' : 's'} Logged
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A55] text-stone-800"
                  />
                </div>

                {/* College Email */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    College Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.collegeEmail}
                    onChange={(e) => setFormData({ ...formData, collegeEmail: e.target.value })}
                    placeholder="e.g. priya.22bcs102@abes.ac.in"
                    className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A55] text-stone-800"
                  />
                </div>

                {/* Admission/Roll Number */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Admission / Roll Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.admissionRollNo}
                    onChange={(e) => setFormData({ ...formData, admissionRollNo: e.target.value })}
                    placeholder="e.g. 2200320100145"
                    className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A55] text-stone-800"
                  />
                </div>

                {/* Course and Year */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Course & Year <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.courseYear}
                    onChange={(e) => setFormData({ ...formData, courseYear: e.target.value })}
                    placeholder="e.g. B.Tech 2nd Year (2024–28)"
                    className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A55] text-stone-800"
                  />
                </div>

                {/* Branch */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Branch <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    placeholder="e.g. CSE, IT, ECE, ME, Civil, AIML"
                    className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A55] text-stone-800"
                  />
                </div>

                {/* Preferred Division (All 6 divisions) */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Preferred Division <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.preferredDivision}
                    onChange={(e) => setFormData({ ...formData, preferredDivision: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A55] text-stone-800"
                  >
                    {DIVISIONS.map((div) => (
                      <option key={div.id} value={div.name}>
                        {div.name} – {div.tagline}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Why do you want to join */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Why do you want to join the Eco Club? <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.whyJoin}
                  onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
                  placeholder="Tell us what motivates you to contribute to a greener ABES EC campus..."
                  className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A55] text-stone-800"
                />
              </div>

              {/* Skills or Interests */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Skills, Hobbies, or Technical Interests
                </label>
                <input
                  type="text"
                  value={formData.skillsInterests}
                  onChange={(e) => setFormData({ ...formData, skillsInterests: e.target.value })}
                  placeholder="e.g. Web Development, Photography, Public Speaking, Gardening, Graphic Design"
                  className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A55] text-stone-800"
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-stone-500 text-center sm:text-left">
                  Demo notice: Applications are safely saved locally to your client session.
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-[#123D2A] text-white hover:bg-[#1F8A55] active:scale-95 transition-all shadow-md cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Membership Application</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
