import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/results/results-title";
import Button from "../../components/ui/button";
import { getFilteredEvents } from "../../dummy-data";

export default function EventsSlugPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return (
      <Fragment>
        <p className="center">Loading....</p>
        <Button link="/events">Show All Events</Button>
      </Fragment>
    );
  }
  const dateFilter = {
    year: +router.query.slug[0],
    month: +router.query.slug[1]
  };

  const data = getFilteredEvents(dateFilter);

  const date = new Date(router.query.slug[0], router.query.slug[1] - 1);

  return (
    <Fragment>
      {data.length > 0 && (
        <>
          <ResultsTitle date={date} />
          <EventList items={data} />
        </>
      )}
      {data.length === 0 && (
        <div className="center" style={{ marginTop: "25px" }}>
          <p style={{ marginBottom: "25px" }} className="center">
            No events found....
          </p>
          <Button link="/events">Show All Events</Button>
        </div>
      )}
    </Fragment>
  );
}
