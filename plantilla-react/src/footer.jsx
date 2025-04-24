import "./footer.css";

function Footer( {marca, año} ) {


    return (
        <footer className="footer">
            <span className="footer_marca marca_amarillo">{marca.slice(0,3)}</span><span className="footer_marca">{marca.slice(3)}</span>
            <p className="footer_derechos">© Copyright <a className="enlace_infinity" href="https://ki-store.com.mx/">Infinity Design</a> {año} </p>
        </footer>
    );
}

export default Footer;