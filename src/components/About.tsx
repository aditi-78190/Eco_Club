import { Eye, Target, Cpu, Users, TreePine, Recycle, Compass, Sparkles } from 'lucide-react';

export default function About() {
  const objectives = [
    {
      icon: Eye,
      title: 'Promote Environmental Awareness',
      description: 'Educate the campus community on regional climate realities, carbon emissions, and biodiversity conservation.',
    },
    {
      icon: Recycle,
      title: 'Encourage Sustainable Habits',
      description: 'Inspire mindful consumption, zero-waste lunching, single-use plastic elimination, and water preservation in daily life.',
    },
    {
      icon: TreePine,
      title: 'Organise Plantation & Cleanliness Drives',
      description: 'Conduct hands-on sapling plantations, seasonal soil conditioning, and campus waste cleanup sweeps.',
    },
    {
      icon: Cpu,
      title: 'Integrate Technology With Green Solutions',
      description: 'Harness IoT sensors, web dashboards, automated irrigation, and engineering innovations to solve ecological bottlenecks.',
    },
    {
      icon: Users,
      title: 'Build a Responsible Student Community',
      description: 'Foster an inclusive network of active student environmental advocates, volunteer leaders, and peer mentors.',
    },
    {
      icon: Sparkles,
      title: 'Encourage Teamwork & Innovation',
      description: 'Cultivate collaborative problem-solving across engineering departments, uniting code, design, and field activism.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#F7F8F2] relative overflow-hidden">
      {/* Subtle organic background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DCEBDD]/60 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DCEBDD]/40 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#123D2A] text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-[#1F8A55]" />
            <span>About The Organization</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#123D2A] tracking-tight mb-4">
            More Than a Club. A Movement.
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Rooted in ABES Engineering College, Ghaziabad, we bridge passionate environmental activism with modern technical ingenuity.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#1F8A55] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#1F8A55] font-semibold block mb-2">
              Our Long-Term North Star
            </span>
            <h3 className="font-serif text-2xl font-semibold text-[#123D2A] mb-4">
              Our Vision
            </h3>
            <p className="text-stone-600 leading-relaxed text-base sm:text-lg">
              &ldquo;To create an environmentally conscious campus and inspire a generation that actively contributes towards a sustainable future.&rdquo;
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-[#123D2A] text-white rounded-3xl p-8 sm:p-10 shadow-lg shadow-emerald-950/20 relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#1F8A55]/30 rounded-full blur-2xl pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-white/10 text-emerald-300 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold block mb-2">
              Everyday Action Protocol
            </span>
            <h3 className="font-serif text-2xl font-semibold text-white mb-4">
              Our Mission
            </h3>
            <p className="text-stone-200 leading-relaxed text-base sm:text-lg">
              &ldquo;To encourage environmental responsibility through awareness campaigns, sustainable initiatives, technology-driven solutions, and community participation.&rdquo;
            </p>
          </div>
        </div>

        {/* Motto Banner */}
        <div className="bg-gradient-to-r from-[#123D2A] via-[#1b5139] to-[#123D2A] rounded-2xl p-6 sm:p-8 text-center text-white mb-20 shadow-md">
          <span className="text-xs uppercase tracking-[0.25em] text-emerald-300 font-medium block mb-2">
            The Eco Club Philosophy
          </span>
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-white">
            &ldquo;THINK. ACT. CODE. WORK GREENER.&rdquo;
          </p>
        </div>

        {/* Core Objectives Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#123D2A] mb-3">
              Strategic Objectives
            </h3>
            <p className="text-stone-600 text-sm sm:text-base">
              Clear commitments that guide every drive, hackathon, and student assembly we host.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((obj, idx) => {
              const Icon = obj.icon;
              return (
                <div
                  key={obj.title}
                  className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all group flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#DCEBDD]/60 text-[#123D2A] flex items-center justify-center group-hover:bg-[#123D2A] group-hover:text-emerald-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-serif font-bold text-stone-300 text-sm">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="font-semibold text-[#123D2A] text-lg mb-2">
                    {obj.title}
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed mt-auto">
                    {obj.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Campus Narrative Split */}
        <div className="mt-20 bg-stone-100/70 rounded-3xl p-8 sm:p-12 border border-stone-200/60 flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-md">
            <img
              src="/src/assets/images/eco_green_campus_1793624155927.jpg"
              alt="ABES Engineering College Green Campus"
              referrerPolicy="no-referrer"
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-xs uppercase tracking-widest text-[#1F8A55] font-semibold block mb-2">
              Campus Stewardship
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#123D2A] mb-4">
              Engineering with an Ecological Conscience
            </h3>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
              At ABES Engineering College, we believe technical training reaches its highest purpose when applied to preserve our shared planet. The Eco Club unites students from Computer Science, Electronics, Mechanical, and Allied branches into an active civic force.
            </p>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
              From reducing campus single-use disposables to deploying IoT soil monitoring systems, our members practice what they preach every single day.
            </p>
            <a
              href="#initiatives"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#123D2A] hover:text-[#1F8A55] transition-colors"
            >
              <span>Explore our active initiatives</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
