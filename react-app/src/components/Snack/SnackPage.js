import { useSelector } from "react-redux";
import './SnackPage.css'

export default function SnackPage() {
    const snacks = useSelector(state => state.snacks.allSnacks)


    const imageOnErrorHandler = (event) => {
        event.currentTarget.src = 'https://www.arirangusa.net/wp-content/uploads/2020/09/LUCKY-BOX-RANDOM-21PACKS-M.jpg';
    };

    return (
        <>
            {console.log(snacks)}
            {Object.values(snacks).map(e => (
                <>
                    <img id="snack-image" src={e.img} onError={imageOnErrorHandler} />
                    <div key={e.name}>
                        {e.name}
                    </div>
                </>
            ))}
        </>
    )
}
