import React, { useState } from 'react';
import { BookOpen, ExternalLink, CheckCircle, Video, FileText } from 'lucide-react';

export default function Subjects() {
  const subjectsData = [
    {
      id: 1,
      name: "Data Structures & Algorithms",
      level: "🔴 Critical",
      color: "from-red-500 to-orange-500",
      chapters: [
        { name: "Arrays & Strings", problems: 25 },
        { name: "Linked Lists", problems: 20 },
        { name: "Stacks & Queues", problems: 18 },
        { name: "Trees & Graphs", problems: 30 },
        { name: "Dynamic Programming", problems: 25 },
        { name: "Sorting & Searching", problems: 15 }
      ],
      resources: [
        { type: "📚 Course", name: "DSA Mastery - Udemy", url: "https://www.udemy.com/course/data-structures-algorithms-python/" },
        { type: "💻 Platform", name: "LeetCode - Top Interview Q", url: "https://leetcode.com/explore/interview/card/top-interview-questions/" },
        { type: "📖 Book", name: "CLRS Algorithms", url: "https://mitpress.mit.edu/" },
        { type: "▶️ Videos", name: "Abdul Bari DSA (150+ hrs)", url: "https://www.youtube.com/watch?v=0IAPZzGSbME&list=PLDN4rrl48XKpZknJB94u6B6f05r2oBFxX" },
        { type: "⚡ Practice", name: "HackerRank DSA", url: "https://www.hackerrank.com/domains/data-structures" },
        { type: "▶️ Videos", name: "Love Babbar DSA (120 hrs)", url: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA" }
      ],
      studyTips: [
        "Solve 10-15 problems daily from LeetCode",
        "Focus on pattern recognition (sliding window, two pointers, etc)",
        "Practice medium level problems first before hard",
        "Understand time & space complexity analysis deeply",
        "Implement from scratch without looking at solutions"
      ],
      goals: "500+ LeetCode problems, Master all patterns"
    },
    {
      id: 2,
      name: "Database Management Systems (DBMS)",
      level: "🔴 Critical",
      color: "from-blue-500 to-cyan-500",
      chapters: [
        { name: "Normalization (1NF-BCNF)", problems: 15 },
        { name: "Transactions & ACID", problems: 12 },
        { name: "Indexing & Query Optimization", problems: 10 },
        { name: "Concurrency Control", problems: 8 },
        { name: "SQL (Advanced)", problems: 20 }
      ],
      resources: [
        { type: "▶️ Videos", name: "DBMS by Gate Smashers", url: "https://www.youtube.com/watch?v=kBdlM2aBDBA&list=PLxCzCOWd7aiEKtKSi6GTVlHJmzVvhlMmJ" },
        { type: "📚 Tutorial", name: "SQL W3Schools", url: "https://www.w3schools.com/sql/" },
        { type: "📖 Book", name: "Silberschatz DBMS", url: "https://www.db-book.com/" },
        { type: "▶️ Videos", name: "Jenny's DBMS Lectures", url: "https://www.youtube.com/playlist?list=PLdo5W4Nhv31aCfjHY9x_-sDmhI2B7zfPO" },
        { type: "💻 Practice", name: "SQL LeetCode", url: "https://leetcode.com/problems/?topicSlugs=database" }
      ],
      studyTips: [
        "Learn normalization deeply (1NF to BCNF with examples)",
        "Practice SQL queries regularly (50+ queries minimum)",
        "Understand transaction isolation levels (Read Uncommitted, etc)",
        "Study indexing strategies (B-tree, Hash, etc)",
        "Know JOINS deeply (Inner, Outer, Cross, Self)"
      ],
      goals: "Master all normalization forms, 50+ SQL queries, ACID properties"
    },
    {
      id: 3,
      name: "Operating Systems (OS)",
      level: "🔴 Critical",
      color: "from-purple-500 to-pink-500",
      chapters: [
        { name: "Process Management & Scheduling", problems: 15 },
        { name: "Memory Management (Paging, Segmentation)", problems: 18 },
        { name: "File Systems & I/O Management", problems: 10 },
        { name: "Concurrency & Synchronization", problems: 20 },
        { name: "Deadlock Detection & Prevention", problems: 8 }
      ],
      resources: [
        { type: "▶️ Videos", name: "DBMS by Gate Smashers", url: "https://www.youtube.com/watch?v=fDQkJBk2hKQ&list=PLxCzCOWd7aiGz9donHRriNOe7KTXiBLm7" },
        { type: "📖 Book", name: "Galvin OS Concepts", url: "https://www.os-book.com/" },
        { type: "▶️ Videos", name: "Neso Academy OS", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyojICP1xQoLMHrp_E9r8ZNHVM" },
        { type: "🎓 Course", name: "MIT OS Engineering", url: "https://ocw.mit.edu/courses/6-828-operating-system-engineering-fall-2012/" },
        { type: "▶️ Videos", name: "Jenny's OS Lectures", url: "https://www.youtube.com/playlist?list=PLdo5W4Nhv31a5dhWyiYGk0L52LVGJaLBr" }
      ],
      studyTips: [
        "Master process scheduling algorithms (FCFS, SJF, RR, Priority)",
        "Understand page replacement algorithms (FIFO, LRU, Optimal)",
        "Study deadlock detection and prevention methods",
        "Learn semaphores and mutexes deeply",
        "Practice numerical problems on each topic"
      ],
      goals: "Master scheduling, paging, deadlock concepts"
    },
    {
      id: 4,
      name: "Computer Networks (CN)",
      level: "🔴 Critical",
      color: "from-green-500 to-emerald-500",
      chapters: [
        { name: "OSI & TCP/IP Model", problems: 12 },
        { name: "Routing Protocols (RIP, OSPF, BGP)", problems: 10 },
        { name: "TCP/UDP & Transport Layer", problems: 14 },
        { name: "DNS, HTTP, HTTPS", problems: 8 },
        { name: "Network Security & Encryption", problems: 10 }
      ],
      resources: [
        { type: "▶️ Videos", name: "CN by Gate Smashers", url: "https://www.youtube.com/watch?v=bV7F8OMO-6s&list=PLxCzCOWd7aiFCC4OB9r78znVIVqNQFgul" },
        { type: "📖 Book", name: "Kurose & Ross", url: "https://gaia.cs.umass.edu/kurose_ross/" },
        { type: "🛠️ Tool", name: "Cisco Packet Tracer", url: "https://www.netacad.com/" },
        { type: "▶️ Videos", name: "Jenny's CN Lectures", url: "https://www.youtube.com/playlist?list=PLdo5W4Nhv31cTUcp8sKoEQoFNrHt2tqeR" },
        { type: "📚 Tutorial", name: "GeeksforGeeks CN", url: "https://www.geeksforgeeks.org/computer-network-tutorials/" }
      ],
      studyTips: [
        "Understand OSI model layers and their functions deeply",
        "Master IP addressing and subnetting (CIDR notation)",
        "Study routing algorithms (Dijkstra, Bellman-Ford)",
        "Learn TCP 3-way handshake and connection states",
        "Know DNS resolution process and HTTP request-response cycle"
      ],
      goals: "OSI model mastery, IP subnetting, routing protocols"
    },
    {
      id: 5,
      name: "Object-Oriented Programming (OOPs)",
      level: "🟡 High",
      color: "from-yellow-500 to-orange-500",
      chapters: [
        { name: "Classes, Objects & Constructors", problems: 10 },
        { name: "Inheritance & Method Overriding", problems: 12 },
        { name: "Polymorphism (Compile & Runtime)", problems: 12 },
        { name: "Encapsulation & Access Modifiers", problems: 8 },
        { name: "Abstraction & Design Patterns", problems: 8 }
      ],
      resources: [
        { type: "📚 Course", name: "OOPs in Java", url: "https://www.udemy.com/course/java-the-complete-java-developer-course/" },
        { type: "📚 Tutorial", name: "W3Schools OOPs", url: "https://www.w3schools.com/java/java_oop.asp" },
        { type: "📖 Book", name: "Head First Design Patterns", url: "https://www.oreilly.com/library/view/head-first-design/0596007124/" },
        { type: "▶️ Videos", name: "OOPs Concepts in Java", url: "https://www.youtube.com/results?search_query=java+oops+concepts" }
      ],
      studyTips: [
        "Practice implementing classes with proper encapsulation",
        "Study design patterns (Singleton, Factory, Observer, etc)",
        "Understand access modifiers and their use cases",
        "Learn method overriding and overloading differences",
        "Study interface vs abstract classes with real examples"
      ],
      goals: "Master all 4 OOP pillars, 5+ design patterns"
    },
    {
      id: 6,
      name: "Machine Learning & AI",
      level: "🟡 High",
      color: "from-indigo-500 to-purple-500",
      chapters: [
        { name: "Supervised Learning (Regression & Classification)", projects: 3 },
        { name: "Unsupervised Learning (Clustering)", projects: 3 },
        { name: "Neural Networks & Deep Learning", projects: 4 },
        { name: "Model Evaluation & Validation", projects: 2 },
        { name: "Feature Engineering & Preprocessing", projects: 3 }
      ],
      resources: [
        { type: "📚 Course", name: "ML Specialization - Coursera", url: "https://www.coursera.org/specializations/machine-learning-introduction" },
        { type: "📚 Course", name: "Fast.ai (Practical DL)", url: "https://www.fast.ai/" },
        { type: "📖 Book", name: "Hands-On ML with Sklearn & TF", url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/" },
        { type: "📚 Tutorial", name: "Scikit-learn Documentation", url: "https://scikit-learn.org/" },
        { type: "▶️ Videos", name: "StatQuest with Josh Starmer", url: "https://www.youtube.com/c/joshstarmer" }
      ],
      studyTips: [
        "Build 5+ projects on real datasets (Kaggle)",
        "Understand model evaluation metrics (Accuracy, Precision, Recall, F1)",
        "Practice feature engineering techniques",
        "Learn hyperparameter tuning (Grid Search, Random Search)",
        "Study regularization (L1, L2, Dropout)"
      ],
      goals: "3+ deployed ML projects, Kaggle competitions"
    }
  ];

  const [expandedSubject, setExpandedSubject] = useState(null);

  return (
    <div className="fade-in">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4 gradient-text">Core Subjects & Resources</h1>
        <p className="text-gray-400 text-lg">Complete study materials, video lectures, and practice problems for all core CS subjects</p>
      </div>

      <div className="space-y-4">
        {subjectsData.map((subject) => (
          <div key={subject.id} className="border border-gray-800 rounded-2xl overflow-hidden">
            <button
              onClick={() => setExpandedSubject(expandedSubject === subject.id ? null : subject.id)}
              className={`w-full bg-gradient-to-r ${subject.color} bg-opacity-10 p-6 flex justify-between items-center hover:bg-opacity-20 transition border-b border-gray-800`}
            >
              <div className="flex items-center gap-4 flex-1 text-left">
                <BookOpen size={28} className="text-blue-400" />
                <div>
                  <h2 className="text-2xl font-bold">{subject.name}</h2>
                  <p className="text-sm text-gray-400">Level: {subject.level}</p>
                </div>
              </div>
              <span className="text-3xl text-blue-400">{expandedSubject === subject.id ? '−' : '+'}</span>
            </button>

            {expandedSubject === subject.id && (
              <div className="bg-gray-800/50 p-8 space-y-8 border-t border-gray-800">
                {/* Chapters */}
                <div>
                  <h3 className="font-bold text-blue-400 mb-4 text-lg">📚 Topics & Practice Problems</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {subject.chapters.map((chapter, idx) => (
                      <div key={idx} className="bg-gray-900 rounded-lg p-3 border border-gray-700 flex justify-between items-center">
                        <span className="font-semibold text-gray-300">{chapter.name}</span>
                        <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded text-sm">{chapter.problems || chapter.projects}+ Q</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div>
                  <h3 className="font-bold text-blue-400 mb-4 text-lg">🎓 Learning Resources</h3>
                  <div className="space-y-3">
                    {subject.resources.map((resource, idx) => (
                      <a
                        key={idx}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-gray-900 rounded-lg hover:bg-gray-850 transition border border-gray-700 hover:border-blue-600 group"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <ExternalLink size={20} className="text-blue-400 group-hover:text-blue-300" />
                          <div>
                            <p className="font-semibold text-blue-400 group-hover:text-blue-300">{resource.name}</p>
                            <p className="text-xs text-gray-400">{resource.type}</p>
                          </div>
                        </div>
                        <span className="text-xl text-gray-600 group-hover:text-blue-400">→</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Study Tips */}
                <div>
                  <h3 className="font-bold text-green-400 mb-4 text-lg">💡 Study Tips & Strategies</h3>
                  <div className="space-y-2">
                    {subject.studyTips.map((tip, idx) => (
                      <div key={idx} className="flex gap-3 p-3 bg-gray-900 rounded-lg border border-gray-700">
                        <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Goals */}
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg p-4 border border-green-800">
                  <p className="text-green-300">
                    <span className="font-bold">🎯 Your Goal:</span> {subject.goals}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Study Schedule */}
      <div className="mt-12 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-gray-800">
        <h2 className="text-2xl font-bold mb-6">📅 Recommended Study Schedule</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <p className="font-bold text-blue-400 mb-2">Week 1-2: DSA Foundation</p>
            <p className="text-sm text-gray-300">Arrays, Strings, Linked Lists (Abdul Bari)</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <p className="font-bold text-blue-400 mb-2">Week 3-4: DBMS Concepts</p>
            <p className="text-sm text-gray-300">Normalization, ACID, SQL (Gate Smashers)</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <p className="font-bold text-blue-400 mb-2">Week 5-6: OS Fundamentals</p>
            <p className="text-sm text-gray-300">Processes, Memory, Scheduling (Galvin)</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <p className="font-bold text-blue-400 mb-2">Week 7-8: Networks & OOPs</p>
            <p className="text-sm text-gray-300">OSI Model, Routing, Design Patterns</p>
          </div>
        </div>
      </div>
    </div>
  );
}
