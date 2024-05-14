import off1 from "../assets/offer/off1.webp";
import off2 from "../assets/offer/off2.webp";
import off3 from "../assets/offer/off3.webp";
import off4 from "../assets/offer/off4.webp";
import off5 from "../assets/offer/off5.webp";
import off6 from "../assets/offer/off6.webp";
import off7 from "../assets/offer/off7.webp";
import off8 from "../assets/offer/off8.webp";
import off9 from "../assets/offer/off9.webp";
import off10 from "../assets/offer/off10.webp";
export function List() {
  return (
    <div className="offer-list">
      <div className="offers">
        <img src={off1} alt="Top Offer" />
        <span>Top Offer</span>
      </div>
      <div className="offers">
        <img src={off2} alt="Mobiles & Tablets" />
        <span>Mobiles & Tablets</span>
      </div>

      <div className="offers">
        <img src={off3} alt="" />
        <span>TVs & Appliances</span>
      </div>
      <div className="offers">
        <img src={off4} alt="" />
        <span>Electronics</span>
      </div>
      <div className="offers">
        <img src={off5} alt="Fashion" />
        <span>Fashion</span>
      </div>
      <div className="offers">
        <img src={off6} alt="Beauty" />
        <span>Beauty</span>
      </div>
      <div className="offers">
        <img src={off7} alt="Home & Kitchen" />
        <span>Home & Kitchen</span>
      </div>
      <div className="offers">
        <img src={off8} alt="Furniture" />
        <span>Furniture</span>
      </div>
      <div className="offers">
        <img src={off9} alt="Travel" />
        <span>Travel</span>
      </div>
      <div className="offers">
        <img src={off10} alt="Grocery" />
        <span>Grocery</span>
      </div>
    </div>
  );
}
