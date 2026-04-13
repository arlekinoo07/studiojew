import Header1 from './header/page'
import Block1 from './block1/index'
import Block2 from './block2/index'
import Block3 from './block3/index'
import Block4 from './block4/index'
import Block5 from './block5/index'
import Footer from './footer/index'

export default function Header() {
    return(
        <>
            <Header1/>
            <Block1/>
            <Block2/>
            <Block3/>
            <Block4/>
            <Block5/>
            <Footer/>
        </>
    );
}