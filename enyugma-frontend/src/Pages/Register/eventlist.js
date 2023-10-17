import technicalEvent from "../TechnicalEvent/technicalEvent.js";
import culturalEvent from "../CulturalEvent/list.js";
import workshopEvent from "../WorkshopEvent/list.js";

const events = [...technicalEvent, ...culturalEvent, ...workshopEvent].map(
    (x) => ({
        id: x.id,
        name: x.name,
    })
);

export default events;
