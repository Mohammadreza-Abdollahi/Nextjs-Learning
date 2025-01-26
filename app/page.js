import SearchBoxes from "@/components/layout/SearchBoxes";
import ServicesPage from "./services/page";

export default function Home() {
  return (
    <>
      <div id="home" className="welcome-hero">
        <SearchBoxes />
      </div>
    </>
  );
}
