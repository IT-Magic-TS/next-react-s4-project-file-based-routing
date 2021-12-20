import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

export default function HomePage() {
  const feauturedEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Home Page</h1>
      <EventList items={feauturedEvents} />
    </div>
  );
}
