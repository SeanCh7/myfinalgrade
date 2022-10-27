import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div id="HeaderBox">

          <h1>MyFinalGrade</h1>

        </div>

      </header>


      <div id="appbody">

        <div id="searchbox" className="panel">

          <div id="searchbycourse">
            <h2>Course code:</h2>
            <input type="text" id="coursecode" name="coursecode" placeholder="Course code" />
          </div>

          <div id="searchbyname">
            <h2>Course name:</h2>
            <input type="text" id="coursename" name="coursename" placeholder="Course name" />
          </div>

        </div>

        <div id="classpanels" className="panel">
          
          <div id="classpanelEnglish" className="classpanelEnglish panel2">
            <h2>English</h2>
            <ul>
              <li>9th Grade</li>
              <li>10th Grade</li>
              <li>11th Grade</li>
              <li>AP Language</li>
              <li>Creative Writing</li>
              <li>Mythology</li>
              <li>Film Study</li>
              <li>AP Literature</li>
              <li>Public Speaking</li>
              <li>Sci Fict and Fantasy</li>
            </ul>
          </div>

          <div id="classpanelMath" className="classpanelMath panel2">
            <h2>Math</h2>
            <ul>
              <li>Intermediate Algebra</li>
              <li>Geometry</li>
              <li>Algebra 2</li>
              <li>Pre-Calculus</li>
              <li>Calculus</li>
              <li>AP Calculus</li>
              <li>AP Statistics</li>
              <li>AP Computer Science</li>
              <li>Math</li>
            </ul>
          </div>

          <div id="classpanelPhyed" className="classpanelPhyed panel2">
            <h2>Phy Ed</h2>
            <ul>
              <li>Freshman Team Activity</li>
              <li>Fall Team Activities</li>
              <li>Winter Team Activities</li>
              <li>Spring Team Activities</li>
              <li>Lifetime Sports</li>
              <li>Racquet Sports</li>
              <li>Racquest Sports 2</li>
              <li>First Aid</li>
              <li>Volleyball</li>
              <li>Volleyball 2</li>
              <li>Advanced Basketball</li>
              <li>Indoor Soccer</li>
              <li>Indoor Soccer 2</li>
              <li>Strength Training 1</li>
              <li>Strength Training 2</li>
              <li>Strength Training 3</li>
              <li>SPARQ Fall</li>
              <li>Aerobics 1</li>
              <li>Aerobics 2</li>
              <li>Unified PhyEd</li>
              <li>Strength Training for Women</li>
              <li>Physical Activity</li>
            </ul>
          </div>

          <div id="classpanelScience" className="classpanelScience panel2">
            <h2>Science</h2>
            <ul>
              <li>Physical Earth Science</li>
              <li>Biology</li>
              <li>Chemistry</li>
              <li>Physics</li>
              <li>General Science</li>
              <li>Astronomy</li>
              <li>Meteorology</li>
              <li>AP Biology</li>
              <li>AP Chemistry</li>
              <li>AP Physics</li>
              <li>Biology of Minnesota</li>
              <li>Environmental Science</li>
              <li>CIS Human Phys</li>
              <li>Chemistry Fundamentals</li>
            </ul>
          </div>

          <div id="classpanelSocial" className="classpanelSocial panel2">
            <h2>Social Studies</h2>
            <ul>
              <li>Civics</li>
              <li>US History</li>
              <li>World History</li>
              <li>AP US History</li>
              <li>AP European History</li>
              <li>Economics</li>
              <li>Psychology</li>
              <li>AP Psychology</li>
              <li>AP Economics</li>
              <li>Developmental Psych</li>
              <li>Social Science</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
