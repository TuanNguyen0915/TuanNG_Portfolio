// components
import NavBar from "../../components/NavBar/NavBar"
import HomeBG from "../../components/HomeBG/HomeBG"
import SkillsBoard from "../../components/SkillsBoard/SkillsBoard"

const Home = () => {
    return (
        <main>
            <NavBar />
            {/* Home Background */}
            <HomeBG />
            {/* Skills */}
            <SkillsBoard />
        </main>
    )
}

export default Home
