export default function Calon({ nama , counter, onClick}){
    return(
        <div className="col text-center">
            <h2>{ nama }</h2>
            <h3>{counter}</h3>
            <button className="btn btn-primary"onClick={onClick}>Pilih</button>
        </div>
    )
}