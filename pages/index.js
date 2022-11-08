import config from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
import Timeline from "../src/components/Timeline";
import Banner from "../src/components/Banner";
import Menu from "../src/components/Menu";
import Favorites from "../src/components/Favorites";
import Header from "../src/components/Header";

function HomePage() {
    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
                <Menu />
                <Banner />
                <Header />
                <Timeline playlists={config.playlists} />
                <Favorites favorites={config.favorites} />
            </div>
        </>
    );
}

export default HomePage
