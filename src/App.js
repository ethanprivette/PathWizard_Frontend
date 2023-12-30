import './App.css';

function handleClick() {
  var startPoint = document.getElementById("waypoint1")
  var endPoint = document.getElementById("waypoint2")

  console.log("DWABA")

  if (!startPoint.classList.contains("show")) {
    if (!endPoint.classList.contains("show")) {
      startPoint.classList.toggle("show")
    } else {
      startPoint.classList.toggle("show")
      endPoint.classList.toggle("show")
    }
  } else {
    startPoint.classList.toggle("show")
    endPoint.classList.toggle("show")
  }
}

var estDriveTime = 2.24;

var waypointName = "Start Point";
var xPos = 6.44;
var yPos = 9.32;
var heading = 90;

function App() {
  return (
    <div class="topMenu">
      <div class="driveTime">
        <div class="estTime">Est Driving Time</div>
        <div class="estNum">{estDriveTime}</div>
      </div>
      <div class="content">
        <div id="waypoint1" class="dropdown-content">
          <div class="waypointName">
            <a>Name</a>
            <c>{waypointName}</c>
          </div>
          <div class="Xpos">
            <a>X Pose</a>
            <c>{xPos}</c>
          </div>
          <div class="Ypos">
            <a>Y Pose</a>
            <c>{yPos}</c>
          </div>
          <div class="heading">
            <a>Heading</a>
            <c>{heading}</c>
          </div>
        </div>
        <div id="waypoint2" class="dropdown-content">
          <div class="waypointName">
            <a>Name</a>
            <c>eee</c>
          </div>
          <div class="Xpos">
            <a>X Pose</a>
            <c>9572</c>
          </div>
          <div class="Ypos">
            <a>Y Pose</a>
            <c>412</c>
          </div>
          <div class="heading">
            <a>Heading</a>
            <c>180</c>
          </div>
        </div>
      </div>
      <div class="sidenav">
        <ul class="baseul">
          <input id="check01" type="checkbox" name="menu" />
          <label for="check01">Waypoints</label>
          <ul class="submenu">
            <button class="dropdowns" onClick={handleClick}>{waypointName}</button>
            <button class="dropdowns" onClick={handleClick}>End Point</button>
          </ul>
        </ul>
        <div class="dropdown">
          <button class="button2" onClick={handleClick}><label>Global Constraints</label></button>
        </div>
        <button class="sideButton" onClick={handleClick}><label>End Velocity</label></button>
        <ul class="baseul">
          <input id="check02" type="checkbox" name="menu" />
          <label for="check02">Event Markers</label>
          <ul class="submenu">
            <button class="dropdowns" onClick={handleClick}>event 1</button>
            <button class="dropdowns" onClick={handleClick}>event 2</button>
          </ul>
        </ul>
        <ul class="baseul">
          <input id="check03" type="checkbox" name="menu" />
          <label for="check03">Constraint Zones</label>
          <ul class="submenu">
            <button class="dropdowns" onClick={handleClick}>Zone 1</button>
            <button class="dropdowns" onClick={handleClick}>Zone 2</button>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default App;