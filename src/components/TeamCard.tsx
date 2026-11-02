import { useState } from 'react';
import { TeamMember } from '../data/teamData';
import { User, ShieldCheck, Sparkles, Award } from 'lucide-react';

interface TeamCardProps {
  member: TeamMember;
  highlight?: boolean;
}

export default function TeamCard({ member, highlight = false }: TeamCardProps) {
  const [showBioModal, setShowBioModal] = useState(false);

  // Compute clean initials
  const initials = member.name
    .split(' ')
    .filter((n) => !['Mr.', 'Dr.', 'To', 'Be', 'Announced'].includes(n))
    .slice(0, 2)
    .map((w) => w[0])
    .join('') || (member.name === 'To Be Announced' ? 'TBA' : member.name.substring(0, 2));

  return (
    <>
      <div
        onClick={() => setShowBioModal(true)}
        className={`group relative rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
          highlight
            ? 'bg-gradient-to-b from-[#123D2A] to-[#174832] text-white shadow-lg shadow-emerald-950/20 border border-emerald-700/50 hover:border-emerald-400'
            : 'bg-white text-stone-800 border border-stone-200/90 hover:border-emerald-300 hover:shadow-md'
        }`}
      >
        <div>
          <div className="flex items-start justify-between mb-4">
            {/* Initial-based Fallback Avatar with subtle gradient */}
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center font-serif text-lg font-bold tracking-wider shadow-inner group-hover:scale-105 transition-transform duration-300 ${
                highlight
                  ? 'bg-gradient-to-br from-emerald-300 to-emerald-500 text-[#123D2A]'
                  : 'bg-gradient-to-br from-[#123D2A] to-[#1F8A55] text-white'
              }`}
            >
              {initials}
            </div>

            {/* Badges */}
            {member.category === 'faculty' && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#123D2A]">
                <ShieldCheck className="w-3 h-3 text-[#1F8A55]" />
                Faculty
              </span>
            )}
            {member.isHead && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#123D2A]">
                <Award className="w-3 h-3 text-[#1F8A55]" />
                Division Head
              </span>
            )}
            {member.category === 'leadership' && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 text-emerald-200 backdrop-blur-xs">
                <Sparkles className="w-3 h-3 text-emerald-300" />
                Leadership
              </span>
            )}
          </div>

          {/* Member Name */}
          <h4
            className={`font-serif text-lg font-semibold tracking-tight transition-colors ${
              highlight
                ? 'text-white group-hover:text-emerald-200'
                : 'text-[#123D2A] group-hover:text-[#1F8A55]'
            }`}
          >
            {member.name}
          </h4>

          {/* Role / Designation */}
          <p
            className={`text-xs font-medium uppercase tracking-wider mt-1 ${
              highlight ? 'text-emerald-300' : 'text-[#1F8A55]'
            }`}
          >
            {member.role}
          </p>

          {/* Department or Division Tag */}
          {member.division && (
            <p
              className={`text-xs mt-1 ${
                highlight ? 'text-stone-300' : 'text-stone-500'
              }`}
            >
              {member.division}
            </p>
          )}

          {/* Short Bio teaser */}
          {member.bio && (
            <p
              className={`text-xs mt-3 line-clamp-2 leading-relaxed ${
                highlight ? 'text-stone-300' : 'text-stone-600'
              }`}
            >
              {member.bio}
            </p>
          )}
        </div>

        {/* View Profile Action */}
        <div className="pt-4 mt-4 border-t border-current/10 flex items-center justify-between">
          <span
            className={`text-[11px] font-medium transition-colors ${
              highlight ? 'text-emerald-300/80 group-hover:text-white' : 'text-stone-400 group-hover:text-[#123D2A]'
            }`}
          >
            Click for focus & role &rarr;
          </span>
          <User className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* Details Lightbox Modal */}
      {showBioModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setShowBioModal(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 text-stone-800 shadow-2xl border border-stone-200 relative animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#123D2A] to-[#1F8A55] text-white flex items-center justify-center font-serif text-2xl font-bold">
                {initials}
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#123D2A]">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#1F8A55]">
                  {member.role}
                </p>
                {member.division && (
                  <p className="text-xs text-stone-500">{member.division}</p>
                )}
                {member.department && (
                  <p className="text-xs text-stone-500">{member.department}</p>
                )}
              </div>
            </div>

            <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200/80 mb-6">
              <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold block mb-1">
                Role & Focus Area
              </span>
              <p className="text-stone-700 text-sm leading-relaxed">
                {member.bio ||
                  'Active team contributor driving sustainability campaigns, campus engagement, and club initiatives.'}
              </p>
            </div>

            <div className="flex items-center justify-between text-xs text-stone-500 mb-6">
              <span>Organization</span>
              <span className="font-medium text-[#123D2A]">
                Eco Club, ABES Engineering College
              </span>
            </div>

            <button
              type="button"
              onClick={() => setShowBioModal(false)}
              className="w-full py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium text-sm transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
