import { useState } from 'react'
import Header from "./components/Header";
import Calon from "./components/Calon";

function App() {
  const [countSatu, setCountSatu] = useState(0)
  const [countDua, setCountDua] = useState(0)
  const [countTiga, setCountTiga] = useState(0)
  const [countEmpat, setCountEmpat] = useState(0)

  const pilihSatu = () => setCountSatu(countSatu+1)
  const pilihDua = () => setCountDua(countDua+1)
  const pilihTiga = () => setCountTiga(countTiga+1)
  const pilihEmpat = () => setCountEmpat(countEmpat+1)

  const totalSuara = countSatu+countDua+countTiga+countEmpat;
  const totalSah = countSatu+countDua+countTiga;

  const persentaseSah = totalSuara > 0 ? (totalSah/totalSuara).toFixed(2):0;
  const persentasiTidakSah = totalSuara > 0 ? (countEmpat/totalSuara).toFixed(2):0;

  return (
    <>
      <Header />
      <div className='row'>
        <Calon nama='Fitri Nandri' counter={countSatu} onClick={pilihSatu}/>
        <Calon nama='RD PS'counter={countDua} onClick={pilihDua}/>
        <Calon nama='Yudha Bahar' counter={countTiga} onClick={pilihTiga}/>
        <Calon nama='Suara tidak SAH' counter={countEmpat} onClick={pilihEmpat}/>
      </div>
      <div className='row text-center mt-5'>
        <h1>Total Suara : {totalSuara}</h1>
        <h1>Total Suara Sah : {totalSah} ({persentaseSah}%)</h1>
        <h1>Total Suara Tidak Sah : {countEmpat} ({persentasiTidakSah}%)</h1>
      </div>
    </>
  )
}

export default App