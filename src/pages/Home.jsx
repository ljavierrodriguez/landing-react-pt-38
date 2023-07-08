import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'
import { Section } from '../components/Section'

export default function Home() {
    return (
        <>
            {/* <!-- Navigation--> */}
            <Navbar />
            {/* <!-- Header--> */}
            <Header
                title={"One Page Wonder"}
                subtitle={"Will Rock Your Socks Off"}
                url={"#scroll"}
                label={"Learn more"}
                color={"dark"}
            />
            {/* <!-- Content section 1--> */}
            <Section
                id={"scroll"}
                title={"For those about to rock..."}
                text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."}
                image={"assets/img/01.jpg"}
                order={"right"}
            />
            {/* <!-- Content section 2--> */}
            <Section
                title={"We salute you!"}
                text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."}
                image={"assets/img/02.jpg"}
                order={"left"}
            />
            {/* <!-- Content section 3--> */}
            <Section
                title={"Let there be rock!"}
                text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."}
                image={"assets/img/03.jpg"}
                order={"right"}
            />
            {/* <!-- Footer--> */}
            <Footer />
        </>
    )
}