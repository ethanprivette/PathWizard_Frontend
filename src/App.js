import './App.css';

var first = true
let prevDiv

function handleClick(id) {
  var targetDiv = document.getElementById('content' + id)

  if (targetDiv) {
    console.log("div found")

    if (first) {
      targetDiv.classList.toggle("show")
      first = false
    } else {
      prevDiv.classList.toggle("show")
      targetDiv.classList.toggle("show")
    }

    prevDiv = targetDiv
  } else {
    console.error('Div not found ' + id)
  }
}

var estDriveTime = 2.24;

var waypointName = "Start Point";
var xPos = 6.44;
var yPos = 9.32;
var heading = 90;

var maxSpeed = 2.5
var maxAccel = 3

var endSpeed = 2.75
var endRotation = 180

var zone1Name = 'testing'
var zone1StartPos = 0.5
var zone1EndPos = 0.75
var zone1MaxSpeed = 2
var zone1MaxAccel = 1.75

function App() {
  return (
    <div className="topMenu">
      <div className="driveTime">
        <div className="estTime">Est Driving Time</div>
        <div className="estNum">{estDriveTime}</div>
      </div>
      <div className="content">
        <div id="contentWaypoint1" className="dropdown-content">
          <div className="waypointName">
            <a>Name</a>
            <c><input type='text'></input></c>
          </div>
          <div className="Xpos">
            <a>X Pose</a>
            <c>{xPos}</c>
          </div>
          <div className="Ypos">
            <a>Y Pose</a>
            <c>{yPos}</c>
          </div>
          <div className="heading">
            <a>Heading</a>
            <c>{heading}</c>
          </div>
        </div>
        <div id="contentWaypoint2" className="dropdown-content">
          <div className="waypointName">
            <a>Name</a>
            <c>eee</c>
          </div>
          <div className="Xpos">
            <a>X Pose</a>
            <c>9572</c>
          </div>
          <div className="Ypos">
            <a>Y Pose</a>
            <c>412</c>
          </div>
          <div className="heading">
            <a>Heading</a>
            <c>180</c>
          </div>
        </div>
        <div className='dropdown-content' id='contentConstraints'>
          <div className='maxSpeed'>
            <a>Max Speed</a>
            <c>{maxSpeed} m/s</c>
          </div>
          <div className='maxAccel'>
            <a>Max Acceleration</a>
            <c>{maxAccel} m/s^2</c>
          </div>
        </div>
        <div className='dropdown-content' id='contentEndStates'>
          <div className='endVelocity'>
            <a>End Velocity</a>
            <c>{endSpeed} m/s</c>
          </div>
          <div className='endRotation'>
            <a>End Rotation</a>
            <c>{endRotation}</c>
          </div>
        </div>
        <div className='dropdown-content' id='contentConstraintZone1'>
          <div className='zoneName'>
            <a>Name</a>
            <c>{zone1Name}</c>
          </div>
          <div className='zoneStart'>
            <a>Start</a>
            <c>{zone1StartPos}</c>
          </div>
          <div className='zoneEnd'>
            <a>End</a>
            <c>{zone1EndPos}</c>
          </div>
          <div className='zoneMaxSpeed'>
            <a>Max Speed</a>
            <c>{zone1MaxSpeed} m/s</c>
          </div>
          <div className='zoneMaxAccel'>
            <a>Max Accel</a>
            <c>{zone1MaxAccel} m/2^2</c>
          </div>
        </div>
      </div>
      <div className="sidenav">
        <ul className="baseul">
          <input id="check01" type="checkbox" name="menu" />
          <label for="check01">Waypoints</label>
          <ul className="submenu">
            <button className="dropdowns" onClick={function(){handleClick('Waypoint1')}}>{waypointName}</button>
            <button className="dropdowns" onClick={function(){handleClick('Waypoint2')}}>End Point</button>
          </ul>
        </ul>
        <div className="dropdown">
          <button className="button2" onClick={function(){handleClick('Constraints')}}><label>Global Constraints</label></button>
        </div>
        <button className="sideButton" onClick={function(){handleClick('EndStates')}}><label>End Velocity</label></button>
        <ul className="baseul">
          <input id="check02" type="checkbox" name="menu" />
          <label for="check02">Event Markers</label>
          <ul className="submenu">
            <button className="dropdowns" onClick={function(){handleClick('')}}>event 1</button>
            <button className="dropdowns" onClick={function(){handleClick(6)}}>event 2</button>
          </ul>
        </ul>
        <ul className="baseul">
          <input id="check03" type="checkbox" name="menu" />
          <label for="check03">Constraint Zones</label>
          <ul className="submenu">
            <button className="dropdowns" onClick={function(){handleClick('ConstraintZone1')}}>Zone 1</button>
            <button className="dropdowns" onClick={function(){handleClick(8)}}>Zone 2</button>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default App;