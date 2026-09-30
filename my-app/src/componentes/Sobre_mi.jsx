import asset_img_random from './Imagenes/miau.jpg';
function Sobre_mi() {
  return (
    <>
     <section id="sobre-mi"/>
    <h1>¡Hola, me llamo Helga! y te voy a contar un poco sobre mí</h1>
    <div className ="contenido">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quisquam laborum facilis est. Accusantium numquam dolorem labore
        aut laborum, sunt id sit eum molestiae iste aliquam suscipittemporibus impedit! Officiis, sed? Lorem ipsum dolor sit amet consectetur adipisicing elit.
         dicta autem fugiat, beatae cupiditate fuga, quae laudantium tempore qui earum molestias laboriosam itaque.
          Veritatis placeat accusamus ea consequuntur similique tempore.</p>
        
        <img src={asset_img_random} alt="miau"/>
    </div>
    </>

  )
}

export default Sobre_mi