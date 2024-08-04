import { useState } from "react";
import banner from "./img/Banner.jpg";
import menu from "./img/Menu.jpg";
import usa from "./img/estados-unidos.png";
import puertoRico from "./img/puerto-rico.png";
import emailjs from 'emailjs-com'

function App() {

  const [formData, SetFormData] = useState({
    firstName: '',
    lastName:'',
    email:'',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    social: '',
    herbalife:'',
    sabores: '',
    pago: ''
  })

  const handlechange = (e) => {
    const {id, value} = e.target;
    SetFormData({...formData, [id]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado', formData);
    
    // Cambia el uso de sendForm por send
    emailjs.send('service_1lg70g9', 'template_4goaqxs', formData, 'FAnWA0Cc6U8KC0k-z')
      .then((response) => {
        console.log('Correo enviado exitosamente!!!', response.status, response.text);
        createNotification();
      })
      .catch((err) => {
        console.error('Error al enviar el correo', err);
      });

    // Aquí puedes manejar la lógica del pago según el método seleccionado.
    // Por ejemplo, puedes llamar a diferentes APIs para procesar el pago.
    switch (formData.pago) {
      case 'zelle':
        // Lógica para Zelle
        console.log('Procesando pago con Zelle...');
        break;
      case 'venmo':
        // Lógica para Venmo
        console.log('Procesando pago con Venmo...');
        break;
      case 'apple pay':
        // Lógica para Apple Pay
        console.log('Procesando pago con Apple Pay...');
        break;
      default:
        console.log('Método de pago no seleccionado');
    }
  };

  const createNotification = () => {
    if (Notification.permission === 'granted') {
      new Notification('Pedido Enviado', {
        body: 'Tu pedido ha sido enviado exitosamente.',
      });
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification('Pedido Enviado', {
            body: 'Tu pedido ha sido enviado exitosamente.',
          });
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="bg-blue-500 w-full py-4">
        <h1 className="text-white text-3xl font-bold text-center">ATOMIC ENERGY</h1>
      </header>
      <div><img src={banner} alt="banner" height="50px" width="900px" className="mt-7"/></div>

      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-4xl mt-4" onSubmit={handleSubmit}>
        <div className="font-bold">NUEVO DISTRIBUIDOR DE ENERGÍA ⚡️</div>
        <div className="text-gray-700 mt-4 flex items-center">
          Envios en todo  US and PR 
          <span className="ml-2">
            <img src={usa} alt="United States" height="20px" width="20px"/>
          </span>
          <span className="ml-2">
            <img src={puertoRico} alt="Puerto Rico" height="20px" width="20px"/>
          </span>
        </div>

        <hr className="my-4 border-t border-gray-300" />
        <div className="text-left mb-4">
          <p className="text-gray-700 mt-6 mb-6">Cada Te incluye, Liftoff, Herbal Tea, Collageno and Sugar Free Flavoring.</p>
          <p className="font-bold mt-6 mb-6">⚡️160mg cafeina</p>
          <p className="font-bold mt-6 mb-6">⚡️Vitamina A, B6, B12, C, D y E</p>
          <p className="font-bold mt-6 mb-6">⚡️Collageno</p>
          <p className="font-bold mt-6 mb-6">⚡️Cada Kit tiene 1g de azucar, 0g Grasa y ~7g de carbohidratos dependiendo del sabor.</p>
          <p className="text-gray-700 mt-6 mb-6">
            🥤Simplemente coloca todos los ingredientes en un shaker cup con agua, mezcla bien y sírvelo en un vaso de 32oz lleno de hielo🧊. DISFRUTA 😋
          </p>
          <p className="text-gray-700 mt-6 mb-6">
            Vamos a escoger tus sabores👇🏽
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">Nombre <span className="text-red-500">*</span></label>
          <input 
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="firstName" 
            type="text" 
            placeholder="Nombre"
            value={formData.firstName}
            onChange={handlechange}
          required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">Apellido <span className="text-red-500">*</span></label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="lastName" 
            type="text" 
            placeholder="Apellido"
            value={formData.lastName}
            onChange={handlechange} 
            required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Correo Electrónico <span className="text-red-500">*</span></label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="email" 
            type="email" 
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={handlechange}
          required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Dirección de Envío <span className="text-red-500">*</span></label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="address" 
            type="text" 
            placeholder="Dirección"
            value={formData.address}
            onChange={handlechange}
          required />
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">Ciudad <span className="text-red-500">*</span></label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="city" 
              type="text" 
              placeholder="Ciudad"
              value={formData.city}
              onChange={handlechange}
            required />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">Estado/Provincia <span className="text-red-500">*</span></label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="state" 
              type="text" 
              placeholder="Estado/Provincia"
              value={formData.state}
              onChange={handlechange}
            required />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zip">Código Postal <span className="text-red-500">*</span></label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="zip" 
            type="text" 
            placeholder="Código Postal"
            value={formData.zip}
            onChange={handlechange}
          required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Número de Teléfono <span className="text-red-500">*</span></label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="phone" 
            type="tel" 
            placeholder="(000) 000-0000"
            value={formData.phone}
            onChange={handlechange} 
            required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="social">Nombre en Instagram/Tiktok <span className="text-red-500">*</span></label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="social" 
            type="text" 
            placeholder="Nombre en Instagram/Tiktok"
            value={formData.social}
            onChange={handlechange}
            required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="herbalife">¿Alguna vez te has inscrito como Distribuidor o Miembro Preferido de Herbalife? <span className="text-red-500">*</span></label>
          <select 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="herbalife"
            value={formData.herbalife}
            onChange={handlechange} 
            required>
            <option value="" disabled selected>Por favor seleccione</option>
            <option value="yes">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="mb-4">
          <img src={menu} alt="Load image" width="500px" height="500px" className="ml-auto mr-auto mt-auto mb-auto"/>
        </div>
        <div className="mb-4">
          <h2 className="font-bold uppercase">$10 cada uno, <span className="normal-case">mínimo 3 por pedido</span></h2>
          <h3 className="text-gray-400 italic">Costo de envío fijo de $5 por el paquete de 3 Mega Tea Kits</h3>
        </div>
        <hr className="my-4 border-t border-gray-300" />
        <div className="mb-4">
          <p className="font-bold">¿Qué sabor te gustaría para tu pedido esta vez? <span className="text-red-500">*</span></p>
          <textarea 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none overflow-hidden"
            id="sabores"
            placeholder="Escribe tu sabor preferido"
            value={formData.sabores}
            onChange={handlechange}
            required
            rows="1"
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = (e.target.scrollHeight) + "px";
            }}
          ></textarea>
        </div>
        <div className="mb-4">
          <p className="font-bold">Para el pago, ¿cuál prefieres? <span className="text-red-500">*</span></p>
          <div className="flex items-center mb-2">
            <select 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pago"
              value={formData.pago}
              onChange={handlechange}
              required>
                <option value="" disabled selected>Por favor seleccione</option>
                <option value="zelle">Zelle</option>
                <option value="venmo">Venmo</option>
                <option value="Aple pay">Aple pay</option>
              </select>
          </div>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Pedir
          </button>
        </div>
      </form>
        <footer className="bg-blue-500 w-full py-4 mt-auto">
          <p className="text-white text-center text-sm">&copy; 2024 Brayan Alexander Salazar Reyes. Todos los derechos reservados.</p>
        </footer>
    </div>
  );
}

export default App;