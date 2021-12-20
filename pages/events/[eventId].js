import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../dummy-data";

// components
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistic from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

export default function SingleEventPage() {
  const router = useRouter();
  const item = getEventById(router.query.eventId);

  if (!item) {
    return <p>No event data</p>;
  }

  return (
    <Fragment>
      <EventSummary title={item.title} />
      <EventLogistic
        date={item.date}
        address={item.location}
        image={item.image}
        imagAlt={item.title}
      />
      <EventContent>{item.description}</EventContent>
    </Fragment>
  );
}
