// components
import NavBar from "../../components/NavBar/NavBar"
import HomeBG from "../../components/HomeBG/HomeBG"
import SkillsBoard from "../../components/SkillsBoard/SkillsBoard"
import Projects from "../../components/Projects/Projects"
import Contact from "../../components/Contact/Contact"
const Home = () => {
    return (
        <main>
            <NavBar />
            <HomeBG />
            <SkillsBoard />
            <Projects />
            <Contact />
        </main>
    )
}

export default Home
