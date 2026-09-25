import asset_img_random from './Imagenes/miau.jpg';
function Sobre_mi() {
  return (
    <>
    <h1>¡Hola, me llamo Helga! y te voy a contar un poco sobre mí</h1>
    <div className ="contenido">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quisquam laborum facilis est. Accusantium numquam dolorem labore
        aut laborum, sunt id sit eum molestiae iste aliquam suscipit
        temporibus impedit! Officiis, sed?</p>
        
        <img src={asset_img_random} alt="miau"/>
    </div>
    </>

  )
}

export default Sobre_mi