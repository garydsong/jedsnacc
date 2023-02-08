import { useEffect } from "react";
import { useSelector } from "react-redux";
import "../Snack/SnackBox.css"
import SnackPage from "./SnackPage";
import { getAllSnacksThunk } from "../../store/snack";
import { useDispatch } from "react-redux";


export default function SnackBox() {
    const dispatch = useDispatch()
    const snacks = useSelector(state => state.snacks.allSnacks)

    useEffect(() => {
        async function fetchData() {
            const response = await dispatch(getAllSnacksThunk());
            const responseData = await response.json();
        }
        fetchData();
    }, [])


    const imageOnErrorHandler = (event) => {
        event.currentTarget.src = 'https://www.arirangusa.net/wp-content/uploads/2020/09/LUCKY-BOX-RANDOM-21PACKS-M.jpg';
    };

    return (
        <>
            <div className="snackBox-grid">

                <SnackPage />
            </div>
        </>
    )
}
