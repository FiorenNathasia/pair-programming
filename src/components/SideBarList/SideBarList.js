import FlippableCard from "../FllippableCard/FlippableCard";
import "./SideBarList.scss";

export default function SideBarList() {
  return (
    <>
      <div className="sidebarlist">
        <FlippableCard />
        <FlippableCard />
        <FlippableCard />
      </div>
    </>
  );
}
