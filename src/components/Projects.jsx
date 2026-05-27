import React, { useState } from 'react';
import { ExternalLink, Clock, Zap, Github, BookOpen } from 'lucide-react';

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "AI-Powered Campus Surveillance System",
      stack: "Python, OpenCV, YOLO v8, Flask, React",
      level: "Advanced",
      impact: "Strong for AI + Security + Research profile",
      description: "Real-time object detection system for campus monitoring with threat detection",
      tags: ["AI", "Computer Vision", "Security", "Deep Learning"],
      timeline: "6-8 weeks",
      difficulty: "⭐⭐⭐⭐⭐",
      resources: [
        { type: "Tutorial", url: "https://youtube.com/results?search_query=YOLO+object+detection", name: "YOLO Tutorial" },
        { type: "GitHub", url: "https://github.com/ultralytics/yolov8", name: "YOLOv8 Repo" },
        { type: "Course", url: "https://www.coursera.org/learn/convolutional-neural-networks", name: "CNN Course" }
      ],
      learnings: ["YOLO architecture", "Real-time processing", "Model optimization", "Deployment strategies"]
    },
    {
      id: 2,
      title: "Smart Healthcare IoT Monitoring System",
      stack: "ESP8266, React, Firebase, Python, Arduino",
      level: "Advanced",
      impact: "Excellent for Embedded Systems + IoT + AI",
      description: "IoT-based health monitoring system with cloud integration and ML-based alerts",
      tags: ["IoT", "Healthcare", "Cloud", "Embedded Systems"],
      timeline: "8-10 weeks",
      difficulty: "⭐⭐⭐⭐⭐",
      resources: [
        { type: "Guide", url: "https://www.arduino.cc/en/Guide", name: "Arduino Guide" },
        { type: "Docs", url: "https://firebase.google.com/docs", name: "Firebase Docs" },
        { type: "Course", url: "https://www.edx.org/course/internet-of-things-iot-fundamentals", name: "IoT Fundamentals" }
      ],
      learnings: ["Hardware programming", "Cloud integration", "Real-time databases", "Data visualization"]
    },
    {
      id: 3,
      title: "Resume Analyzer using NLP",
      stack: "BERT, Transformers, Flask, React, PostgreSQL",
      level: "Intermediate",
      impact: "Good for NLP specialization and practical ML",
      description: "Advanced resume parsing and analysis using state-of-the-art NLP models",
      tags: ["NLP", "Machine Learning", "Web Development"],
      timeline: "4-6 weeks",
      difficulty: "⭐⭐⭐⭐",
      resources: [
        { type: "Docs", url: "https://huggingface.co/docs/transformers", name: "Hugging Face" },
        { type: "Course", url: "https://www.coursera.org/learn/natural-language-processing", name: "NLP Course" },
        { type: "Paper", url: "https://arxiv.org/abs/1810.04805", name: "BERT Paper" }
      ],
      learnings: ["Transformer models", "Text preprocessing", "Named Entity Recognition", "Model fine-tuning"]
    },
    {
      id: 4,
      title: "AI Attendance System",
      stack: "Face Recognition, OpenCV, Python, Flask",
      level: "Intermediate",
      impact: "Real-world implementation + practical AI",
      description: "Automated attendance using facial recognition with 98%+ accuracy",
      tags: ["Computer Vision", "AI", "Biometric"],
      timeline: "5-7 weeks",
      difficulty: "⭐⭐⭐⭐",
      resources: [
        { type: "GitHub", url: "https://github.com/ageitgey/face_recognition", name: "Face Recognition" },
        { type: "Tutorial", url: "https://youtube.com/results?search_query=face+recognition+opencv", name: "OpenCV Tutorial" }
      ],
      learnings: ["Face detection algorithms", "Face embedding", "Database management", "Real-time processing"]
    },
    {
      id: 5,
      title: "Research Paper Summarizer",
      stack: "Transformers, Python, Streamlit, PDFplumber",
      level: "Advanced",
      impact: "Excellent for research-oriented profile",
      description: "Automatic AI-powered summarization of research papers using state-of-the-art transformers",
      tags: ["NLP", "Research", "AI", "Document Processing"],
      timeline: "6-8 weeks",
      difficulty: "⭐⭐⭐⭐⭐",
      resources: [
        { type: "Model", url: "https://huggingface.co/facebook/bart-large-cnn", name: "BART Model" },
        { type: "Tutorial", url: "https://streamlit.io/", name: "Streamlit Docs" },
        { type: "Paper", url: "https://arxiv.org/abs/1910.13461", name: "BART Paper" }
      ],
      learnings: ["Text summarization", "Document parsing", "Web deployment", "API development"]
    },
    {
      id: 6,
      title: "Quantum Computing Learning Simulator",
      stack: "Qiskit, Python, Streamlit, NumPy",
      level: "Advanced",
      impact: "Perfect for quantum computing interest + research",
      description: "Interactive quantum circuit simulator with visualization and educational tutorials",
      tags: ["Quantum Computing", "Physics", "Simulation", "Education"],
      timeline: "8-10 weeks",
      difficulty: "⭐⭐⭐⭐⭐",
      resources: [
        { type: "Docs", url: "https://qiskit.org/", name: "Qiskit Docs" },
        { type: "Course", url: "https://www.coursera.org/learn/quantum-computing-applications", name: "Quantum Course" },
        { type: "Tutorial", url: "https://youtube.com/results?search_query=qiskit+tutorial", name: "Qiskit Tutorials" }
      ],
      learnings: ["Quantum gates", "Circuit design", "Quantum algorithms", "Quantum visualization"]
    },
    {
      id: 7,
      title: "AI Mock Interview Platform",
      stack: "React, Node.js, Google Gemini API, MongoDB",
      level: "Advanced",
      impact: "Excellent full-stack + AI showcase",
      description: "AI-powered mock interview platform with real-time feedback and skill assessment",
      tags: ["Full-Stack", "AI", "Web Development", "Real-time"],
      timeline: "7-9 weeks",
      difficulty: "⭐⭐⭐⭐⭐",
      resources: [
        { type: "API", url: "https://ai.google.dev/", name: "Google AI API" },
        { type: "Framework", url: "https://nextjs.org/docs", name: "Next.js Docs" },
        { type: "Tutorial", url: "https://www.mongodb.com/docs/", name: "MongoDB Docs" }
      ],
      learnings: ["Full-stack development", "Real-time communication", "AI integration", "User authentication"]
    },
    {
      id: 8,
      title: "Stock Market AI Predictor",
      stack: "LSTM, TensorFlow, Python, Flask, React",
      level: "Advanced",
      impact: "Excellent finance + AI combination",
      description: "Time-series forecasting for stock market prediction with 75%+ accuracy",
      tags: ["Deep Learning", "Finance", "Time Series", "ML"],
      timeline: "7-8 weeks",
      difficulty: "⭐⭐⭐⭐⭐",
      resources: [
        { type: "Tutorial", url: "https://www.tensorflow.org/tutorials", name: "TensorFlow Tutorials" },
        { type: "Paper", url: "https://arxiv.org/abs/1506.02640", name: "LSTM Paper" },
        { type: "Data", url: "https://finance.yahoo.com/", name: "Yahoo Finance API" }
      ],
      learnings: ["LSTM networks", "Time-series analysis", "Technical indicators", "Model evaluation"]
    },
    {
      id: 9,
      title: "AI-Based Medical Report Analyzer",
      stack: "Tesseract OCR, NLP, Python, Flask",
      level: "Advanced",
      impact: "Research-oriented healthcare AI project",
      description: "Intelligent medical report parser with disease prediction and insights",
      tags: ["Healthcare", "OCR", "NLP", "AI"],
      timeline: "7-9 weeks",
      difficulty: "⭐⭐⭐⭐⭐",
      resources: [
        { type: "Library", url: "https://github.com/UB-Mannheim/tesseract/wiki", name: "Tesseract OCR" },
        { type: "Course", url: "https://www.coursera.org/learn/ai-healthcare", name: "AI in Healthcare" }
      ],
      learnings: ["OCR technology", "Medical NLP", "Data extraction", "Clinical AI"]
    },
    {
      id: 10,
      title: "Cloud-Based Study Tracker",
      stack: "React, Firebase, Tailwind, Redux",
      level: "Intermediate",
      impact: "Shows scalable product development skills",
      description: "Full-featured study tracking app with analytics and progress visualization",
      tags: ["Web Development", "Cloud", "Product Design"],
      timeline: "5-6 weeks",
      difficulty: "⭐⭐⭐",
      resources: [
        { type: "Framework", url: "https://firebase.google.com/", name: "Firebase" },
        { type: "Library", url: "https://redux.js.org/", name: "Redux" }
      ],
      learnings: ["State management", "Cloud databases", "Real-time updates", "UI/UX design"]
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [filterLevel, setFilterLevel] = useState('all');

  const filteredProjects = filterLevel === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.level === filterLevel);

  return (
    <div className="fade-in">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4 gradient-text">High-Impact Projects</h1>
        <p className="text-gray-400 text-lg mb-6">12 carefully curated projects designed to strengthen your profile for NITH M.Tech admission</p>

        {/* Filter Buttons */}
        <div className="flex gap-3 flex-wrap">
          {['all', 'Intermediate', 'Advanced'].map((level) => (
            <button
              key={level}
              onClick={() => setFilterLevel(level)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                filterLevel === level
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {level === 'all' ? 'All Projects' : level}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredProjects.map((project) => (
          <button
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="bg-gray-900 rounded-2xl p-6 border border-gray-800 card-hover text-left transition-all hover:border-blue-500"
          >
            <div className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold flex-1">{project.title}</h3>
                <span className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded ml-2">{project.id}/10</span>
              </div>
              <p className="text-sm text-gray-400 line-clamp-2">{project.stack}</p>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <Zap size={16} className="text-yellow-400" />
              <span className="text-sm text-yellow-400">{project.level}</span>
              <span className="text-sm text-gray-500">• {project.difficulty}</span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <Clock size={16} className="text-blue-400" />
              <span className="text-sm text-blue-400">{project.timeline}</span>
            </div>

            <p className="text-gray-400 text-sm mb-4">{project.impact}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
              {project.tags.length > 2 && (
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                  +{project.tags.length - 2}
                </span>
              )}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-xs text-blue-400 hover:text-blue-300">Click to view details →</p>
            </div>
          </button>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-3xl w-full border border-gray-800 my-12">
            <button
              onClick={() => setSelectedProject(null)}
              className="text-gray-400 hover:text-white mb-6 text-2xl"
            >
              ✕
            </button>

            <div className="mb-6">
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-4xl font-bold gradient-text">{selectedProject.title}</h2>
                <span className="text-3xl">{selectedProject.difficulty}</span>
              </div>
              <p className="text-gray-400 text-lg">{selectedProject.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-blue-400 mb-3">Tech Stack</h3>
                <p className="text-gray-300 bg-gray-800 rounded-lg p-3">{selectedProject.stack}</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-400 mb-3">Timeline & Level</h3>
                <div className="space-y-2">
                  <p className="text-gray-300 bg-gray-800 rounded-lg p-3">{selectedProject.timeline}</p>
                  <p className="text-gray-300 bg-gray-800 rounded-lg p-3">{selectedProject.level}</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-blue-400 mb-3">Key Learnings</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {selectedProject.learnings.map((learning, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-300 bg-gray-800 rounded-lg p-3">
                    <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                    {learning}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-blue-400 mb-3">Resources & Learning Materials</h3>
              <div className="space-y-2">
                {selectedProject.resources.map((resource, idx) => (
                  <a
                    key={idx}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition border border-gray-700 hover:border-blue-600"
                  >
                    <div className="flex items-center gap-3">
                      <ExternalLink size={18} className="text-blue-400" />
                      <div>
                        <p className="font-semibold text-blue-400">{resource.name}</p>
                        <p className="text-xs text-gray-400">{resource.type}</p>
                      </div>
                    </div>
                    <span className="text-xl">→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-4">
              <p className="text-blue-300 text-sm">
                <strong>Pro Tip:</strong> Deploy this project on GitHub, Vercel, or Hugging Face Spaces to showcase it in your NITH admission interview. Include detailed documentation and README.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { CheckCircle } from 'lucide-react';
