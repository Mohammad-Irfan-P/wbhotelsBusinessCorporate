import { useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { DateRangePicker as DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
// import "./Calendar.css";
// import { updateDateRange } from "../../Redux/Urldata/action";
// import { useDispatch, useSelector } from "react-redux";

const Calendar = () => {
//   const {from_date,to_date} = useSelector((store) => store?.urlReducer?.params_for_api || {})
//   const { parmas_for_api } = useSelector((store) => store?.urlReducer || {});
  // date state
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [range, setRange] = useState({
    startDate: today,
    endDate: tomorrow,
    key: "selection",
  });

  // open close
  const [open, setOpen] = useState(false);


  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    const formattedStartDate = format(range.startDate, "yyyy-MM-dd");
    const formattedEndDate = format(range.endDate, "yyyy-MM-dd");
    console.log(formattedStartDate, formattedEndDate);
    // 
  }, [range]);
 

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);

    return () => {
      document.removeEventListener("keydown", hideOnEscape, true);
      document.removeEventListener("click", hideOnClickOutside, true);
    };
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const handleChange = (date) => {
    setRange({
      startDate: date.selection.startDate,
      endDate: date.selection.endDate,
      key: "selection",
    });
  };

  return (
    <div className="calendarWrap">
      <div>
        <p>Choose Dates</p>
      </div>
      <div
        className="inputBox"
        onClick={() => setOpen((open) => !open)}
        style={{ cursor: "pointer" }}
      >
        {`${format(range.startDate, "EEE d MMM")} - ${format(
          range.endDate,
          "EEE d MMM"
        )}`}
      </div>

      <div ref={refOne}>
        {open && (
          <DateRange
            ranges={[range]}
            onChange={handleChange}
            minDate={new Date()}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            // showSelectionPreview={false}
            // direction="horizontal"
            // className="calendarElement"
          />
        )}
      </div>
    </div>
  );
};

export default Calendar;