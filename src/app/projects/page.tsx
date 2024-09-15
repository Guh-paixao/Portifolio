import ProjectSquare from "@/components/ProjectsSquares";
import ClearSkyBG from '@/assets/images/PNGs/projects/clearSkyBG.png';


export default function Projects() {
    return (
        <main className="flex flex-1">
            <div className="flex flex-1">
                <ProjectSquare title="Clear Sky" subTitle="App de Clima" image={ClearSkyBG} link="https://github.com/Guh-paixao/ClearSky" date="05/2024" />
            </div>
        </main>
    )
}