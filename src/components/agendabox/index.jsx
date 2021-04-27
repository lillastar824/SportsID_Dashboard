import React from "react";
import "./index.css";
import BoxContainer from "../common/containerbox";
import Image from "../common/atoms/image";
import CalendarIcon from "../../images/icons/calendar-blue.png";
import locationIcon from "../../images/icons/red-location.png";
import MapStart from "../../images/icons/map-start.png";
import MapTelNum from "../../images/icons/map-get-telnum.png";
import MapContact from "../../images/icons/map-contact.png";
import MapDummy from "../../images/map-dummy.png";

const AgendaBox = (props) => {
  const days = [
    { day: "SUN", date: "21", active: true },
    { day: "MON", date: "21", active: false },
    { day: "TUE", date: "21", active: false },
    { day: "WED", date: "21", active: false },
    { day: "THU", date: "21", active: false },
    { day: "FRI", date: "21", active: false },
    { day: "SAT", date: "21", active: false },
  ];

  const tournamentData = [
    { date: "10:00 AM", place: "Kickball Tournament" },
    { date: "4:00 PM", place: "Post-Tournament Celebration" },
    { date: "7:00 PM", place: "Dinner with teammates" },
  ];
  return (
    <BoxContainer>
      <div className="AgendaBoxContainer">
        <div className="top">Agenda</div>
        <div className="BottomWrapper">
          <div className="LeftBoxContainer">
            <div className="LeftTop">
              <Image className="CalenderIcon" src={CalendarIcon} alt="" />
              {days.map((items, index) => (
                <div key={index} className="Days">
                  <div>{items.day}</div>
                  <div className={`Dates ${items.active ? "DatesActive" : ""}`}>
                    {items.date}
                  </div>
                </div>
              ))}
            </div>
            <div className="CalendarBottom">
              <div className="Day">Sunday</div>
              <div className="MonthAndYear">December, 19th, 2020</div>
              {tournamentData.map((item, index) => (
                <div
                  className={`TournamentListBox ${
                    index === 0 ? "TournamentListBoxActive" : ""
                  }`}
                >
                  <div>{item.date}</div>
                  <div>{item.place}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="RightBoxContainer">
            <div>
              <Image className="MapImage" src={MapDummy} alt="" />
            </div>
            <div className="MapBottom">
              <div>
                <Image className="LocationIcon" src={locationIcon} alt="" />
              </div>
              <div className="MapAddress">
                Jim Jelson’s <br />
                808 Murray Stream <br />
                Atlanta, GA 30324
              </div>
              <div className="MapIconsContainer">
                <Image className="MapIcon" src={MapStart} />
                <Image className="MapIcon" src={MapTelNum} />
                <Image className="MapIcon" src={MapContact} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BoxContainer>
  );
};

export default AgendaBox;
