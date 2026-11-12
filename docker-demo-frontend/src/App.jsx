

import { useState } from 'react'
import './App.css'


function App() {
  const [clickCount, setClickCount] = useState(0)


  return (
    <div className="app">


      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <span>🐳</span> DockerDemo
        </div>


        <div className="nav-links">
          <a href="#concepts">Concepts</a>
          <a href="#workflow">Workflow</a>
          <a href="#demo">Demo</a>
        </div>


        <span className="nav-badge">React + Vite</span>
      </nav>


      {/* Hero Section */}
      <main className="container">


        <section className="hero">
          <div className="tag">
            DOCKER FUNDAMENTALS
          </div>


          <h1>
            Build Once.
            <br />
            <span>Run Anywhere.</span>
          </h1>


          <p>
            Understand Docker images and containers through
            a simple interactive application.
          </p>


          <a href="#concepts" className="primary-btn">
            Explore Docker ↓
          </a>
        </section>


        {/* Concepts */}
        <section id="concepts" className="section">
          <div className="section-heading">
            <p className="tag">CORE CONCEPTS</p>
            <h2>Image vs Container</h2>
            <p>Understand the two fundamental building blocks of Docker.</p>
          </div>


          <div className="cards">


            <div className="card">
              <div className="card-icon">📦</div>


              <span className="card-label">01 / TEMPLATE</span>


              <h3>Docker Image</h3>


              <p>
                A Docker image is a read-only template that
                contains everything needed to run an application,
                including code, dependencies and configuration.
              </p>


              <div className="card-footer">
                <span className="dot yellow"></span>
                Read-only template
              </div>
            </div>


            <div className="card">
              <div className="card-icon">🚀</div>


              <span className="card-label">02 / INSTANCE</span>


              <h3>Docker Container</h3>


              <p>
                A container is an isolated, runnable instance
                of a Docker image. It provides an environment
                in which your application executes.
              </p>


              <div className="card-footer">
                <span className="dot green"></span>
                Runnable instance
              </div>
            </div>


          </div>
        </section>


        {/* Workflow */}
        <section id="workflow" className="section">
          <div className="section-heading">
            <p className="tag">HOW IT WORKS</p>
            <h2>Docker Workflow</h2>
            <p>From writing code to running your application.</p>
          </div>


          <div className="workflow">


            <div className="workflow-step">
              <div className="workflow-icon">💻</div>
              <h3>Source Code</h3>
              <p>Write your application</p>
            </div>


            <div className="arrow">→</div>


            <div className="workflow-step">
              <div className="workflow-icon">📦</div>
              <h3>Docker Image</h3>
              <p>Build an image</p>
            </div>


            <div className="arrow">→</div>


            <div className="workflow-step">
              <div className="workflow-icon">🚀</div>
              <h3>Container</h3>
              <p>Run the application</p>
            </div>


          </div>
        </section>


        {/* Interactive Demo */}
        <section id="demo" className="demo-section">


          <div className="demo-content">
            <p className="tag">INTERACTIVE DEMO</p>


            <h2>Your Application Is Running!</h2>


            <p>
              This React application is ready to be
              containerized using Docker.
            </p>


            <button
              className="demo-btn"
              onClick={() => setClickCount(clickCount + 1)}
            >
              Test Application
            </button>


            <div className="counter">
              Button clicked: <strong>{clickCount}</strong> times
            </div>
          </div>


          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span>terminal</span>
            </div>


            <div className="terminal-body">
              <p><span className="green-text">$</span> npm run dev</p>
              <p className="terminal-muted">VITE ready in 300 ms</p>
              <p className="green-text">✓ Local: http://localhost:5173/</p>
              <br />
              <p><span className="green-text">$</span> docker build -t my-app .</p>
              <p className="terminal-muted">Building Docker image...</p>
              <p className="green-text">✓ Image built successfully</p>
              <br />
              <p><span className="green-text">$</span> docker run -p 8080:80 my-app</p>
              <p className="green-text">✓ Container started</p>
            </div>
          </div>


        </section>


      </main>


      {/* Footer */}
      <footer>
        <div className="logo">🐳 DockerDemo</div>
        <p>Learning Docker, One Container at a Time.</p>
        <p className="copyright">
          Built with React + Vite
        </p>
      </footer>


    </div>
  )
}


export default App