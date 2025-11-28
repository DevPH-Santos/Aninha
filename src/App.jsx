import { useState, useEffect } from 'react'
import principal from './assets/principal.png'
import ft1 from './assets/ft1.jpg'
import ft2 from './assets/ft2.jpg'
import ft3 from './assets/ft3.png'
import ft4 from './assets/ft4.png'
import ft5 from './assets/ft5.png'
import ft6 from './assets/ft6.png'
import ft7 from './assets/ft7.png'
import './App.css'

function Carrossel() {
  const imagens = [ft1, ft2, ft3, ft4, ft5, ft6, ft7];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % imagens.length);
    }, 3000); // muda a cada 3 segundos

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="container">

        <p className='txt1'>Ahhh safadinho</p>
        <p className='txt2'>Monstro do lago Messi</p>
        <p className='txt3'>Pacote</p>
        <p className='txt4'>Senta, poca, toda peca dela vai querer ficaaaaar</p>
        <p className='txt5'>Oh cauã 🎀</p>
        <p className='txt6'>Tche Tche...Um dois💪</p>

        <div id="carrossel">
          <div
            className="track"
            style={{
              transform: `translateX(${-index * 420}px)`,
            }}
          >
            {imagens.map((img, i) => (
              <img key={i} src={img} className="imgCarrossel" alt="carrossel" />
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

function App() {
  const abrirHomenagem = () => {
    const homenagem = document.getElementById('homenagem');
    const btnAbrir = document.getElementById('btnAbrir');
    homenagem.style.display = 'flex';
    btnAbrir.style.display = 'none';
  };

  return (
    <div>
      <button id='btnAbrir' onClick={abrirHomenagem}>aperta aqui🫵🏽</button>

      <div id="homenagem">
        <header>
          <img src={principal} alt="img principal" className='principalimg' />
          <h1>💙💙A💙💙</h1>
        </header>

        <Carrossel />

        <div className="texto">
          <h3>Oiii aninhaa,</h3>
          <p>Hoje no busão eu falei besteira. Dizer que você “não é minha amiga de verdade” não faz sentido nenhum, ainda mais porque a gente vive rindo e conversando. <br /> Você claramente é minha amiga sim.
            Falei sem pensar, e não queria ter te magoado.
            Por isso fiz esse site: pra deixar claro o quanto eu gosto da nossa amizade e o quanto você significa pra mim💙💙.
            <br /><br />Desculpa de verdade, Aninha.</p>
        </div>
      </div>
    </div>
  );
}

export default App