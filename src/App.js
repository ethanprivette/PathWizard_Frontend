import './App.css';

function handleClick() {
  console.log("cliked!")
}

function App() {
  return (
    <div class="sidenav">
      <ul class="baseul">
        <input id="check01" type="checkbox" name="menu" />
          <label for="check01">Waypoints</label>
          <ul class="submenu">
            <ul class="dropdowns">Start Point</ul>
            <ul class ="dropdowns">End Point</ul>
          </ul>
      </ul>
      <button class="sideButton"onClick={handleClick}><label>Global Constraints</label></button>
      <button class="sideButton"onClick={handleClick}><label>End Velocity</label></button>
      <ul class="baseul">
        <input id="check02" type="checkbox" name="menu" />
          <label for="check02">Event Markers</label>
          <ul class="submenu">
            <ul class="dropdowns">test 1</ul>
            <ul class="dropdowns">test 2</ul>
          </ul>
      </ul>
    </div>
  );
}

export default App;