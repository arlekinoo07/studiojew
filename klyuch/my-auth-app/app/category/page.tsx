import Header1 from './header/index'
import Block1 from './block1/index'
import Footer from './footer/index'
import Block2 from './block2/index';
import Block3 from './block3/index';

export default function Header() {
    return(
        <>
            <Header1/>
            <Block1/>
            <Block2/>
            <Block3/>
            <Footer/>
        </>
    );
}