import { useRef, useState } from "react";
import Button from "../ui/button";
import classes from "./events-search.module.css";

export default function EventsSearch(props) {
  const [year, setYear] = useState("");
  const monthRef = useRef();
  const formHandler = e => {
    e.preventDefault();
    const month = monthRef.current.value;
    props.onSearch(year, month);
  };
  return (
    <form className={classes.form} onSubmit={formHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year"></label>
          <select name="year" id="year" onChange={e => setYear(e.target.value)}>
            <option>Select Year</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month"></label>
          <select name="month" id="month" ref={monthRef}>
            <option>Select Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button type="submit">Search</Button>
    </form>
  );
}
