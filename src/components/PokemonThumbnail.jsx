import React, { useState } from "react";
import ExpandedContent from "./ExpandedContent";

function PokemonThumbnail({
    id,
    name,
    image,
    type,
    height,
    weight,
    stat1,
    stat2,
    stat3,
    stat4,
    stat5,
    stat6,
    bs1,
    bs2,
    bs3,
    bs4,
    bs5,
    bs6,
}) {
    const style = `thumb-container ${type}`;
    const [modal2Visible, setModal2Visible] = useState(false);

    const handleModalOpen = () => {
        if (!modal2Visible) {
            setModal2Visible(true)
        }
    }

    return (
        <>
            <div className={style}>
                <div className="number">
                    <small>#{id}</small>
                </div>
                <img src={image} alt={name} />
                <div className="detail-wrapper">
                    <h3>{name.toUpperCase()}</h3>
                    <small>Type: {type}</small>
                    <button className="pokeinfo" onClick={handleModalOpen}>
                        Know more...
                    </button>
                </div>
            </div>
            {modal2Visible === true ?
                <ExpandedContent visible={modal2Visible} setvisible={setModal2Visible} image={image} type={type}
                    name={name}
                    weight={weight}
                    height={height} data={{
                        weight,
                        height,
                        stat1,
                        stat2,
                        stat3,
                        stat4,
                        stat5,
                        stat6,
                        bs1,
                        bs2,
                        bs3,
                        bs4,
                        bs5,
                        bs6,
                    }} /> :
                <></>
            }
        </>
    );
};

export default PokemonThumbnail;
