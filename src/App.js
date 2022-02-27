import { useState } from "react";
import "./App.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { data } from "./slotsData";

function App() {
  const [toggleSidenav, setToggleSidenav] = useState(true);
  const [availableSlots, setAvailableSlots] = useState([]);

  const handleAvailableSlots = (arr) => {
    let a = [];

    for (let i = arr[0].hour; i <= arr[1].hour; i++) {
      a.push(`${i - 1} PM - ${i} PM`);
    }
    a.shift();
    setAvailableSlots(a);
  };

  return (
    <div className="App">
      <header>
        <button
          id="sidenavToggleBtn"
          onClick={() => setToggleSidenav(!toggleSidenav)}
        >
          {toggleSidenav ? (
            <AiOutlineMenu size={26} />
          ) : (
            <AiOutlineArrowLeft size={26} />
          )}
        </button>
        <h1>
          Mentor<span style={{ color: "crimson" }}>Plus</span>
        </h1>
      </header>

      <main>
        <div className={`sidenav-container ${toggleSidenav ? "hidden" : null}`}>
          <section className="sidenav-content">
            <article>
              <button>Home</button>
            </article>
            <article>
              <button>Profile</button>
            </article>
          </section>
        </div>
        <div
          className={`demo-container ${toggleSidenav ? null : "demo-hidden"}`}
        >
          <h2>Book Demo Session Slot</h2>
          <section className="slots-date-container">
            <h4>Select Date</h4>
            <article className="dateBtns">
              {data.map((slot) => {
                return (
                  <button
                    id="dateBtn"
                    key={slot.date}
                    onClick={() => handleAvailableSlots(slot.available)}
                  >
                    {new Date(slot.date).toDateString()}
                  </button>
                );
              })}
            </article>
          </section>

          <section className="slots-container">
            <h4>Select Slot</h4>
            <article>
              {availableSlots.map((slot, index) => {
                return (
                  <button id="slotBtn" key={index}>
                    {slot}
                  </button>
                );
              })}
            </article>
          </section>

          <button id="paymentBtn">Proceed to pay</button>
        </div>
      </main>
    </div>
  );
}

export default App;
