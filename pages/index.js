import React from "react";
import Menu from "../src/components/Menu";
import Header from "../src/components/Header";
import Timeline from "../src/components/Timeline";
import { videoService } from "../src/services/videoService";


function HomePage() {
    const service = videoService();
    const [filterValue, setFilterValue] = React.useState("");
    const [playlists, setPlaylists] = React.useState({ games: [] });

    React.useEffect(() => {
        service.getAllVideos()
            .then((query) => {
                const newPlaylists = { ...playlists };
                query.data.forEach((video) => {
                    if (!newPlaylists[video.playlist]) {
                        newPlaylists[video.playlist] = [];
                    }
                    else {
                        newPlaylists[video.playlist].push(video);
                    }
                })
                setPlaylists(newPlaylists);
            });
    }, []);

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
                <Menu filterValue={filterValue} setFilterValue={setFilterValue} />
                <Header />
                <Timeline searchValue={filterValue} playlists={playlists} />
            </div>
        </>
    );
}

export default HomePage
