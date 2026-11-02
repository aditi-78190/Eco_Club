import { useState, useMemo } from 'react';
import {
  FACULTY_COUNSELORS,
  CORE_LEADERSHIP,
  DIVISION_MEMBERS,
  DIVISIONS,
  TeamMember,
} from '../data/teamData';
import TeamCard from './TeamCard';
import {
  Users,
  Search,
  Cpu,
  CalendarCheck,
  Share2,
  Globe,
  Palette,
  UserCheck,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

export default function Team() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDivision, setSelectedDivision] = useState<string>('all');

  const allMembers: TeamMember[] = useMemo(() => {
    return [...FACULTY_COUNSELORS, ...CORE_LEADERSHIP, ...DIVISION_MEMBERS];
  }, []);

  const filteredMembers = useMemo(() => {
    return allMembers.filter((m) => {
      const matchesSearch =
        m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (m.division && m.division.toLowerCase().includes(searchTerm.toLowerCase()));

      if (!matchesSearch) return false;

      if (selectedDivision === 'all') return true;
      if (selectedDivision === 'faculty') return m.category === 'faculty';
      if (selectedDivision === 'leadership') return m.category === 'leadership';
      return m.division === selectedDivision;
    });
  }, [allMembers, searchTerm, selectedDivision]);

  // Icon mapping for divisions
  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'tech-project':
        return Cpu;
      case 'event-management':
        return CalendarCheck;
      case 'social-content':
        return Share2;
      case 'pr-outreach':
        return Globe;
      case 'creative-decor':
        return Palette;
      case 'registration':
        return UserCheck;
      default:
        return Users;
    }
  };

  const isFiltered = searchTerm.trim().length > 0 || selectedDivision !== 'all';

  return (
    <section id="team" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-[#123D2A] text-xs font-semibold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-[#1F8A55]" />
            <span>Official Core Team Directory</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#123D2A] tracking-tight mb-4">
            Passionate Leaders Driving Campus Change
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Meet the faculty mentors, core leadership, and dedicated student divisions powering the Eco Club at ABES Engineering College.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-[#F7F8F2] rounded-3xl p-5 sm:p-6 mb-16 border border-stone-200/80 shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search member or role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A55] text-stone-800 placeholder-stone-400"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Division Filter Badges */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              <button
                type="button"
                onClick={() => setSelectedDivision('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedDivision === 'all'
                    ? 'bg-[#123D2A] text-white shadow-xs'
                    : 'bg-white text-stone-600 hover:text-[#123D2A]'
                }`}
              >
                All Members
              </button>
              <button
                type="button"
                onClick={() => setSelectedDivision('faculty')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedDivision === 'faculty'
                    ? 'bg-[#123D2A] text-white shadow-xs'
                    : 'bg-white text-stone-600 hover:text-[#123D2A]'
                }`}
              >
                Faculty
              </button>
              <button
                type="button"
                onClick={() => setSelectedDivision('leadership')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedDivision === 'leadership'
                    ? 'bg-[#123D2A] text-white shadow-xs'
                    : 'bg-white text-stone-600 hover:text-[#123D2A]'
                }`}
              >
                Leadership
              </button>
              {DIVISIONS.map((div) => (
                <button
                  key={div.id}
                  type="button"
                  onClick={() => setSelectedDivision(div.name)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedDivision === div.name
                      ? 'bg-[#123D2A] text-white shadow-xs'
                      : 'bg-white text-stone-600 hover:text-[#123D2A]'
                  }`}
                >
                  {div.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FILTERED VIEW */}
        {isFiltered ? (
          <div>
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-stone-200">
              <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
                Search Results ({filteredMembers.length})
              </span>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDivision('all');
                }}
                className="text-xs text-[#1F8A55] hover:underline font-medium"
              >
                Reset filters
              </button>
            </div>

            {filteredMembers.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMembers.map((member) => (
                  <TeamCard
                    key={member.id}
                    member={member}
                    highlight={member.category === 'leadership'}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-stone-50 rounded-2xl border border-dashed border-stone-300">
                <Users className="w-10 h-10 text-stone-400 mx-auto mb-3" />
                <h4 className="font-serif text-lg font-semibold text-stone-800 mb-1">
                  No team members found
                </h4>
                <p className="text-stone-500 text-sm max-w-sm mx-auto mb-4">
                  We couldn&apos;t find anyone matching &ldquo;{searchTerm}&rdquo; in the selected filter.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedDivision('all');
                  }}
                  className="px-4 py-2 text-xs font-semibold bg-[#123D2A] text-white rounded-lg hover:bg-[#1F8A55] transition-colors"
                >
                  View All Members
                </button>
              </div>
            )}
          </div>
        ) : (
          /* STANDARD FULL ORGANIZATIONAL STRUCTURE VIEW */
          <div className="space-y-24">
            {/* 1. FACULTY COUNSELORS */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#123D2A] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#123D2A]">
                    Faculty Counselors
                  </h3>
                  <p className="text-stone-500 text-xs sm:text-sm">
                    Guiding mentors steering environmental vision, institutional compliance, and youth mentorship.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {FACULTY_COUNSELORS.map((counselor) => (
                  <TeamCard key={counselor.id} member={counselor} />
                ))}
              </div>
            </div>

            {/* 2. CORE LEADERSHIP */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#123D2A] flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#123D2A]">
                    Core Leadership
                  </h3>
                  <p className="text-stone-500 text-xs sm:text-sm">
                    Executive council spearheading cross-functional drives, operations, and fiscal governance.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {CORE_LEADERSHIP.map((leader) => (
                  <TeamCard key={leader.id} member={leader} highlight={true} />
                ))}
              </div>
            </div>

            {/* 3. SIX DIVISION-WISE SECTIONS */}
            <div>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="text-xs uppercase tracking-widest text-[#1F8A55] font-semibold block mb-2">
                  Specialized Wings
                </span>
                <h3 className="font-serif text-3xl font-semibold text-[#123D2A]">
                  Six Operating Divisions
                </h3>
                <p className="text-stone-500 text-sm mt-2">
                  Each division handles dedicated operational pillars to ensure campus environmental excellence.
                </p>
              </div>

              <div className="space-y-16">
                {DIVISIONS.map((division) => {
                  const members = DIVISION_MEMBERS.filter(
                    (m) => m.division === division.name
                  );
                  const Icon = getDivisionIcon(division.id);

                  return (
                    <div
                      key={division.id}
                      className="bg-[#F7F8F2] rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-xs"
                    >
                      {/* Division Heading Banner */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-stone-200">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-[#123D2A] text-emerald-300 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-serif text-xl sm:text-2xl font-semibold text-[#123D2A]">
                                {division.name}
                              </h4>
                              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#123D2A] font-medium">
                                {members.length} Members
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm font-medium text-[#1F8A55] mt-0.5">
                              {division.tagline}
                            </p>
                          </div>
                        </div>
                        <p className="text-stone-600 text-xs sm:text-sm max-w-md leading-relaxed">
                          {division.description}
                        </p>
                      </div>

                      {/* Division Members Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {members.map((member) => (
                          <TeamCard key={member.id} member={member} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
