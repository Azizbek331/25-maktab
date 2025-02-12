import "./DarsLavhalar.css"
import Nav from "../../assets/photo_2025-02-11_15-26-05.jpg"
import Ban from "../../assets/photo_2025-02-11_15-26-46.jpg"
import Fot from "../../assets/photo_2024-09-25_13-07-07.jpg"

function DarsLavhalar() {
  return (
    <div>
        <div className="div">
      <h1 className='dars'>Dars lavhalar</h1>
      <p className="p">25-maktab dars jarayonlari bilan tanishishingiz mumkin</p>


<div className="img-wrapp">

<div className="malumot">
<img className="img-bir" src={Fot} alt="Sinf mashg'ulot" />
<p className="par">Sinfdan tashqari mashg'ulotlar</p>
</div>

<div className="malumot">
<img className="img-bir" src={Nav} alt="Ona tili darsidan lavha" />
<p className="par">Ona tili darsidan lavha</p>
</div>

<div className="malumot">
<img className="img-bir" src={Ban} alt="Fizika darsidan lavha" />
<p className="par">Fizika darsidan lavha</p>
</div>


</div>
    </div>
    </div>
  )
}

export default DarsLavhalar;