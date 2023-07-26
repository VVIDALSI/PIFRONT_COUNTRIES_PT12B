import React from "react";
import stlMdlLOD from "./LevelOfDifficult.module.css";
import level1 from "../../images/nivel1.png";
import level2 from "../../images/nivel2.png";
import level3 from "../../images/nivel3.png";
import level4 from "../../images/nivel4.png";
import level5 from "../../images/nivel5.png";

const LevelOfDifficult = () => {
  return (
    <div className={stlMdlLOD.gnrlLOD}>
      <div className={stlMdlLOD.title}>
        <img src={level1} alt="" />
        <p>
          These activities are a walk in the park! You will be able to enjoy the
          scenery, history and time with your loved ones without exhausting
          yourself. You don't need any special training, equipment, or
          acclimatization for an "easy" hike or tour. The terrain will generally
          be flat and comfortable.
        </p>
      </div>

      <div className={stlMdlLOD.title}>
        <img src={level2} alt="" />
      </div>
      <p>
        A step up from "Easy", these tours require a little more physical
        effort, but are still 100% manageable for anyone with or without
        adventure experience. Again, you don't need special training, equipment,
        or acclimatization for a "light" hike or run. The terrain is generally
        flat but with possible slight ups and downs.
      </p>

      <div className={stlMdlLOD.title}>
        <img src={level3} alt="" />
      </div>
      <p>
        Before embarking on a "moderate" hike or tour, you should at least
        partially acclimatize to the high altitude of the Andes, as it affects
        your oxygenation, energy levels, and hydration. These trails are still
        very manageable without special training as long as you've spent a day
        or two at high altitude. The terrain often includes moderate up and down
        hiking with possible potholes or lightly traveled sections.
      </p>

      <div className={stlMdlLOD.title}>
        <img src={level4} alt="" />
      </div>
      <p>
        "Challenging" hikes or tours require you to be accustomed to the high
        altitude of the Andes before setting out, as it affects your
        oxygenation, energy levels, and hydration. Spending 2-3 days or more at
        high altitude will help you a lot, plus you will need hiking boots and
        possibly trekking poles. You must be in good physical shape, therefore
        we recommend that you train at least a little before doing this walk,
        possibly running, cycling or following the advice of videos with
        resistance exercises. The terrain is often uneven, sometimes with steep
        ascents and descents, and is normally not heavily traveled. In general,
        these walks last several hours.
      </p>

      <div className={stlMdlLOD.title}>
        <img src={level5} alt="" />
      </div>
      <p>
        These types of walks require great effort. It is necessary to be in
        perfect physical condition and you must acclimatize to the high altitude
        of the Andes before leaving, as it affects your oxygenation, energy
        levels and hydration. Spending 4-5 days or more at high altitude will
        help you a lot, plus you will need hiking boots and possibly trekking
        poles. It is important to physically train before these hikes so that
        your body is prepared for the strenuous nature of the trip. In general,
        these hikes last at least a full day in lightly traveled areas with
        uneven paths.
      </p>
    </div>
  );
};

export default LevelOfDifficult;
