import React from 'react';
import { CheckCircle, Calendar, Target } from 'lucide-react';

export default function Roadmap() {
  const roadmapData = [
    {
      phase: "Phase 1 — Admission Preparation",
      timeline: "May - June 2026",
      icon: "📋",
      color: "from-blue-500 to-cyan-500",
      tasks: [
        "Track NIT Hamirpur notifications daily",
        "Prepare all scanned documents (Aadhaar, PAN, etc)",
        "Create strong Statement of Purpose (SOP)",
        "Update Resume with latest projects",
        "Prepare technical interview notes",
        "Practice project explanations",
        "Collect all certificates"
      ]
    },
    {
      phase: "Phase 2 — Technical Strengthening",
      timeline: "June - July 2026",
      icon: "💻",
      color: "from-purple-500 to-pink-500",
      tasks: [
        "Revise DBMS, OS, CN, OOPs (30 days each)",
        "Practice DSA daily on LeetCode (500+ problems)",
        "Build 2 strong AI/ML projects with deployment",
        "Improve GitHub profile with README and documentation",
        "Prepare LinkedIn profile professionally",
        "Read 5 research papers",
        "Complete online certifications"
      ]
    },
    {
      phase: "Phase 3 — Research & Career Growth",
      timeline: "July - August 2026",
      icon: "🚀",
      color: "from-green-500 to-emerald-500",
      tasks: [
        "Connect with professors via email outreach",
        "Read research papers on specialization",
        "Explore quantum computing basics",
        "Prepare for placement and internship opportunities",
        "Build publication-ready projects",
        "Mock interviews with mentors",
        "Final document submission"
      ]
    }
  ];

  return (
    <div className="fade-in">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 gradient-text">Preparation Roadmap</h1>
        <p className="text-gray-400 text-lg">Complete 3-phase structured timeline to secure NITH M.Tech admission</p>
      </div>

      <div className="space-y-8">
        {roadmapData.map((phase, idx) => (
          <div key={idx} className="relative">
            {/* Timeline Line */}
            {idx !== roadmapData.length - 1 && (
              <div className="absolute left-8 top-20 w-1 h-32 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30"></div>
            )}

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 card-hover">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center text-3xl border-4 border-gray-800`}>
                    {phase.icon}
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-3xl font-bold">{phase.phase}</h2>
                  </div>
                  <div className="flex items-center gap-2 mb-6 text-blue-400">
                    <Calendar size={18} />
                    <span className="font-semibold">{phase.timeline}</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {phase.tasks.map((task, i) => (
                      <div key={i} className="flex gap-3 text-gray-300 bg-gray-800/50 rounded-lg p-3">
                        <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Key Milestones */}
      <div className="mt-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-gray-800">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Target className="text-yellow-400" />
          Key Milestones & Deadlines
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <p className="text-yellow-400 font-bold mb-2">📅 May 1, 2026</p>
            <p className="text-gray-300 text-sm">Application window opens - Apply immediately</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <p className="text-blue-400 font-bold mb-2">📅 June 30, 2026</p>
            <p className="text-gray-300 text-sm">Application deadline - All documents ready</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <p className="text-purple-400 font-bold mb-2">📅 July 15, 2026</p>
            <p className="text-gray-300 text-sm">Written test & interviews commence</p>
          </div>
        </div>
      </div>
    </div>
  );
}
