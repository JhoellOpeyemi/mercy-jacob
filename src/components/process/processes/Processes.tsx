// components import
import ProcessCard from "./process-card/ProcessCard";
import Connector from "@/components/utils/connector/Connector";
// utils import
import { processesList } from "@/utils";
// styles import
import "./processes.css";

const Processes = () => {
  return (
    <ul className="processes__list">
      {processesList.map(
        ({ title, description }: { title: string; description: string }) => (
          <div className="process__item-container" key={title}>
            <ProcessCard title={title} description={description} />
            <Connector />
          </div>
        ),
      )}
    </ul>
  );
};

export default Processes;
