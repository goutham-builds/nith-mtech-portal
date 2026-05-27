import React from 'react';
import { CheckCircle, Clock, Target, TrendingUp, Award, Code } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { 
      icon: Code, 
      label: 'Projects Built', 
      value: '0/2', 
      color: 'from-blue-500 to-cyan-500',
      target: '2 advanced AI projects'
    },
    { 
      icon: TrendingUp, 
      label: 'DSA Problems', 
      value: '0/500', 
      color: 'from-green-500 to-emerald-500',
      target: '500 LeetCode problems'
    },
    { 
      icon: Clock, 
      label: 'Study Hours', 
      value: '0/300', 
      color: 'from-purple-500 to-pink-500',
      target: '300 hours total'
    }
  ];

  const strengths = [
    { icon: '📊', text: 'CGPA: 8.17 (Strong academics)' },
    { icon: '🤖', text: 'AI + IoT project experience' },
    { icon: '💻', text: 'Java + Python + JavaScript knowledge' },
    { icon: '🏆', text: 'Hackathon exposure & awards' },
    { icon: '🌐', text: 'Full-stack web development skills' },
    { icon: '📚', text: 'Strong interest in research' }
  ];

  const timeline = [
    { month: 'May–June 2026', phase: 'Applications & Profile', status: 'upcoming' },
    { month: 'July 2026', phase: 'Interview & Written Test', status: 'upcoming' },
    { month: 'August 2026', phase: 'Walk-in Admission Rounds', status: 'upcoming' }
  ];

  const dailyRoutine = [
    { time: '6:00 - 8:00 AM', activity: 'DSA Practice', color: 'bg-green-500/20' },
    { time: '8:00 - 10:00 AM', activity: 'Core Subjects (DBMS/OS/CN)', color: 'bg-blue-500/20' },
    { time: '10:00 - 12:00 PM', activity: 'Project Development', color: 'bg-purple-500/20' },
    { time: '12:00 - 1:00 PM', activity: 'Lunch Break', color: 'bg-gray-500/20' },
    { time: '1:00 - 4:00 PM', activity: 'Coding & GitHub Updates', color: 'bg-pink-500/20' },
    { time: '4:00 - 6:00 PM', activity: 'Interview Prep & Mock Interviews', color: 'bg-yellow-500/20' },
    { time: '6:00 - 8:00 PM', activity: 'Advanced Topics & Research Papers', color: 'bg-indigo-500/20' }
  ];

  return (
    <div className="fade-in">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-4 gradient-text">
          NIT Hamirpur M.Tech 2026
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Personalized preparation dashboard for Goutham Bandarapu<br/>
          Securing M.Tech admission at NIT Hamirpur (Self-Sponsored)
        </p>
      </div>

      {/* Progress Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 border border-gray-800 card-hover backdrop-blur-sm`}>
              <div className="flex items-start justify-between mb-4">
                <Icon className="text-white" size={32} />
                <span className="text-xs bg-white/20 px-3 py-1 rounded-full text-white">{stat.target}</span>
              </div>
              <p className="text-gray-200 text-sm mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* Profile Overview */}
        <div className="lg:col-span-2 bg-gray-900 rounded-2xl p-8 border border-gray-800">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Award size={24} className="text-blue-400" />
            Profile Overview
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {strengths.map((strength, idx) => (
              <div key={idx} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-blue-600 transition">
                <p className="text-lg mb-2">{strength.icon}</p>
                <p className="text-gray-300">{strength.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
          <h2 className="text-2xl font-semibold mb-6">Quick Stats</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-400 mb-1">Current CGPA</p>
              <div className="bg-gray-800 rounded-lg h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-full" style={{width: '85%'}}></div>
              </div>
              <p className="text-xs text-gray-400 mt-1">8.17/10</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Projects Count</p>
              <div className="bg-gray-800 rounded-lg h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full" style={{width: '40%'}}></div>
              </div>
              <p className="text-xs text-gray-400 mt-1">4/10 Target</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">GitHub Commits</p>
              <div className="bg-gray-800 rounded-lg h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full" style={{width: '60%'}}></div>
              </div>
              <p className="text-xs text-gray-400 mt-1">Daily Streak: 15 days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 mb-12">
        <h2 className="text-2xl font-semibold mb-6">Target Timeline</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative">
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <p className="text-blue-400 font-semibold text-sm">{item.month}</p>
                </div>
                <p className="text-gray-300 font-semibold">{item.phase}</p>
              </div>
              {idx < timeline.length - 1 && (
                <div className="hidden md:block absolute left-full top-1/2 transform -translate-y-1/2 w-6 h-1 bg-gradient-to-r from-blue-400 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Daily Routine */}
      <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
        <h2 className="text-2xl font-semibold mb-6">Daily Routine (Recommended)</h2>
        <div className="space-y-3">
          {dailyRoutine.map((routine, idx) => (
            <div key={idx} className={`${routine.color} rounded-lg p-4 border border-gray-700 flex items-center justify-between`}>
              <div>
                <p className="font-semibold text-gray-300">{routine.activity}</p>
                <p className="text-sm text-gray-400">{routine.time}</p>
              </div>
              <span className="text-2xl">→</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-6">Total: 14 hours/day of focused preparation</p>
      </div>
    </div>
  );
}
