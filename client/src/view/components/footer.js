import { Divider } from 'primereact/divider';

function Footer() {
    return (
        <><div className="spaceVertical"></div><div className="spaceVertical"></div>
        <Divider />
        <div className="spaceVertical"></div><div className="spaceVertical"></div>
        <footer>
            <div className='footer'>
                <p>Follow us on</p>
                <a href='https://facebook.com/georgeskayembemiaka'><i className="pi pi-facebook"></i></a>
                <a href='https://instagram.com/georgesmiaka2'><i className="pi pi-instagram"></i></a>
                <a href='https://twitter.com/gmiak_dv'><i className="pi pi-twitter"></i></a>
                <a href='https://github.com/georgesmiaka'><i className="pi pi-github"></i></a>
                <p className='copyright'>2022 &copy; Group46, All rights reserved.</p>
            </div>
        </footer></>
    );
}
export default Footer;