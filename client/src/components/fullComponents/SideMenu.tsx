import { Link } from "react-router-dom";

const SideMenu: React.FC<{show: boolean, onClick: any}> = ({show, onClick}) => {
    const sideMenuClass = ["side-menu"]
    
    if(show) {
        sideMenuClass.push("show");
    }
    return (
        <>
            {
                show ? (<div className="shoppingcart-background" onClick={onClick} ></div>)
                : (<></>)
            }

            <div className={sideMenuClass.join(" ")}>
                <div className="links">
                    <Link to={"/shoppingcart"}>
                        <i className="fa-regular fa-bag-shopping"></i>
                        <span>
                            Cart <span className="shoppingcart_badge">0</span>
                        </span>
                    </Link>
                    <Link to={"/"}>
                        Shop
                    </Link>
                </div>
                
            </div>
        </>
    )
}

export default SideMenu