
// import Helmet from 'react-helmet'
import './Spinner.css'

export default function Spinner({ style }) {
    return (
        <>
            <div>
                <title>Cargando...</title>
            </div>
            <div style={style} className={`Spinner`}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    )
}