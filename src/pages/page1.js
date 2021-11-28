import NavBar from "../components/navbar";
import Alert from "../components/alert";
import Badge from "../components/badge";
import BreadCrumb from "../components/breadcrumb";
import Button, { ButtonGroup } from "../components/button";
import CardNoImage, {CardWithImage} from "../components/card";

const color="green";
const component_tag="m-2";
const div_tag="m-2";

export default function Page1() {
  return (
    <div>
      <NavBar />
        <div className="grid grid-cols-2 bg-gray-400 h-screen">
          <div className={div_tag}>
          <p className={component_tag}>This is an Alert Component.</p>  
          <Alert className={component_tag} title="Fire Sale!" message="  I have no idea" color={color} />
          <p className={component_tag} >This is a Badge Component (needs work, though)</p>
          <Badge className={component_tag} title="Your Badge" color={color} />
          <p className={component_tag} >This is a BreadCrumb menu.</p>
          <BreadCrumb className={component_tag} />
          <p className={component_tag} >A generic Button Component.</p>
          <Button className={component_tag} />
          <p className={component_tag} >A Button Group - Select one type.</p>
          <ButtonGroup className={component_tag} />
          <p className={component_tag} >A Card without an Image Component (Anchor Link)</p>
          <CardNoImage className={component_tag} />
          </div>

          <div className={div_tag}>
            <p className={component_tag} >A Card with an Image Component (Anchor Link)</p>
            <CardWithImage className={component_tag} />
          </div>
        </div>
    </div>
  );
}
