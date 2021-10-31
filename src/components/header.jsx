import { useContext } from "react";
import { Context } from "../context";

export default function Header() {
    const languages = ["English", "Arabic", "Japaneses"];
    const { setLanguage } = useContext(Context)
    return <div>
        {languages.map(lang => <button onClick={() => setLanguage(lang)}>{lang}</button>)}
    </div>
}