import React from "react";
function Fifabody({
  bodyCard,
  playerImg,
  pStats,
  pPosition,
  country,
  playerName,
  Team,
  pac,
  sho,
  pas,
  dri,
  def,
  phy,
}) {
  return (
    <div className="Fifa-body">
      <img src={bodyCard} alt="" srcset="" width="20%" />
      <div>
        <img className="SUI" src={playerImg} alt="" srcset="" width="11%" />
        <div className="Stats1">
          <h1>{pStats}</h1>
          <h3>{pPosition}</h3>
        </div>
        <div className="Flag">
          <img src={country} alt="" srcset="" width="12.5%" />
        </div>
        <div>
          <h1 id="Ronaldo-name">{playerName}</h1>
        </div>
        <div className="Stats2">
          <h3>{pac}</h3>
          <h3>{sho}</h3>
          <h3>{pas}</h3>
        </div>
        <div className="Stats3">
          <h3>{dri}</h3>
          <h3>{def}</h3>
          <h3>{phy}</h3>
        </div>
        <div>
          <img id="Club" src={Team} alt="" srcset="" width="20.5" />
        </div>
      </div>
    </div>
  );
}

export default Fifabody;
