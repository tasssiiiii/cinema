function Footer (){
    return(
        <footer className="page-footer #d1c4e9 deep-purple lighten-4">
             <div classNameName="footer-copyright">
                <div className="container">
                © {new Date().getFullYear()} Copyright Text
                <a className="grey-text text-lighten-4 right" href="#!">REPO</a>
              </div>
            </div>
        </footer>
    )
}
export {Footer}