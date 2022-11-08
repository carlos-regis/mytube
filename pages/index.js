import React from "react";
import config from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import Header from "../src/components/Header";
import Timeline from "../src/components/Timeline";
import Favorites from "../src/components/Favorites";


function HomePage() {
    const [filterValue, setFilterValue] = React.useState("");
    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column", 
                flex: 1
            }}>
                {/* Prop Drilling */}
                <Menu filterValue={filterValue} setFilterValue={setFilterValue} />
                <Header />
                <Timeline searchValue={filterValue} playlists={config.playlists} />
                <Favorites favorites={config.favorites} />
            </div>
        </>
    );
}

export default HomePage
