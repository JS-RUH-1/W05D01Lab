import { useContext } from "react"
import { Context } from "../context"

export default function Body() {
    const {language} = useContext(Context);
    const data = {
        "English" : {
            title: "Hello",
            img:"https://d1bv4heaa2n05k.cloudfront.net/user-images/1444124382002/shutterstock-59760706small_destinationMain_1444124438669.jpeg"
        }, 
        "Arabic": {
            title: "السلام عليكم",
            img: "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2021/06/20/2676346-330942067.jpg?itok=KPSbMC0D"
        },
        "Japaneses": {
            title: "こんにちは",
            img: "https://media.timeout.com/images/105240237/image.jpg"
        }
    }
    return <div>
        <h1> {data[language].title}</h1>
        <img src={data[language].img} width="500px" />
    </div>
}