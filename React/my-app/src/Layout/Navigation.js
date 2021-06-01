import {Link} from "react-router-dom";
const NavigationList = ["MEN","WOMEN","KIDS","FTW","ACCESSORIES"]
function Navigation() {
  return (
  <nav className="product__navigation">
    <ul className="flex justify-align--between fonts-size--x-small">
      {NavigationList.map((value,index) =>
        <li className={'nvaigation'+index} key={'nvaigation'+index}>
          
           <Link to ={`/${value}`}>{value}</Link>
         </li>
        
      )}
    </ul>
    </nav>
  );
}
  export default Navigation;
  

