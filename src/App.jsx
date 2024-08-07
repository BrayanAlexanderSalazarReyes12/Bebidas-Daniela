import { useState } from "react";
import banner from "./img/Banner.jpg";
import menu from "./img/Menu.jpg";
import usa from "./img/estados-unidos.png";
import puertoRico from "./img/puerto-rico.png";
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2';

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
    pago: '',
    total: '',
    descripcion: '',
    email_empresa: 'Atomicnutrititon2024@gmail.com'
  })

  const productos = [
    {name: 'Tropical Mojito', price: 10.00},
    {name: 'Tropical Rainbow', price: 10.00},
    {name: 'Blue Blast', price: 10.00},
    {name: 'Piña colada', price: 10.00}
  ]

  const [selectedProducts, setSelectedProducts] = useState({});
  
  const handleCheckboxChange = (index) => {
    setSelectedProducts((prev) => {
      const newSelected = {
        ...prev,
        [index]: !prev[index] ? { quantity: 1, price: productos[index].price, name: productos[index].name } : null,
      };
      updateFormData(newSelected);
      return newSelected;
    });
  };

  const handleQuantityChange = (index, quantity) => {
    setSelectedProducts((prev) => {
      const newSelected = {
        ...prev,
        [index]: { ...prev[index], quantity: Number(quantity) },
      };
      updateFormData(newSelected);
      return newSelected;
    });
  };

  const updateFormData = (selected) => {
    const sabores = Object.values(selected)
      .filter(item => item)
      .map(item => `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`)
      .join(', ');
    SetFormData((prev) => ({
      ...prev,
      sabores: sabores,
      total: total
    }));
  };

  const calculateSubtotal = () => {
    return Object.values(selectedProducts).reduce((acc, product) => product ? acc + product.price * product.quantity : acc, 0).toFixed(2);
  };

  const calculateTax = (subtotal) => (subtotal * 0.10).toFixed(2);
  const calculateShipping = () => 5.00;
  const calculateTotal = (subtotal, tax, shipping) => (parseFloat(subtotal) + parseFloat(tax) + parseFloat(shipping)).toFixed(2);

  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const shipping = subtotal > 0 ? calculateShipping() : 0.00;
  const total = calculateTotal(subtotal, tax, shipping);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    SetFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado', formData);
    
    /* Cambia el uso de sendForm por send */
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
        // Lógica para Zelle // Zelle to Hugo Anguiano at 848-299-6020
        console.log('Procesando pago con Zelle...');

        formData.descripcion = "to Hugo Anguiano at 848-299-6020"

        emailjs.send('service_1lg70g9','template_7xo0o8f',formData,'FAnWA0Cc6U8KC0k-z')
        .then((response) => {
          console.log('Correo enviado exitosamente!!!', response.status, response.text);
        })
        .catch((err) => {
          console.error('Error al enviar el correo', err);
        });
        
        SetFormData ({
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
          pago: '',
          total: '',
          descripcion: ''
        })
        
        setSelectedProducts({})
        
        Swal.fire({
          icon: 'success',
          title: 'Formulario Enviado',
          text: 'El formulario se ha enviado exitosamente. Revisa tu correo para obtener las instrucciones de pago.',
          confirmButtonText: 'Aceptar'
        });

        break;
      case 'venmo':
        // Lógica para Venmo
        console.log('Procesando pago con Venmo...');

        formData.descripcion = "in the following link https://venmo.com/u/Hugo-Anguiano-5"

        console.log(formData)

        emailjs.send('service_1lg70g9','template_7xo0o8f',formData,'FAnWA0Cc6U8KC0k-z')
        .then((response) => {
          console.log('Correo enviado exitosamente!!!', response.status, response.text);
        })
        .catch((err) => {
          console.error('Error al enviar el correo', err);
        });

        SetFormData ({
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
          pago: '',
          total: '',
          descripcion: ''
        })

        setSelectedProducts({})

        Swal.fire({
          icon: 'success',
          title: 'Formulario Enviado',
          text: 'El formulario se ha enviado exitosamente. Revisa tu correo para obtener las instrucciones de pago.',
          confirmButtonText: 'Aceptar'
        });

        break;
      default:
        console.log(formData.pago)
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
            onChange={handleInputChange}
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
            onChange={handleInputChange} 
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange} 
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
            onChange={handleInputChange}
            required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="herbalife">¿Alguna vez te has inscrito como Distribuidor o Miembro Preferido de Herbalife? <span className="text-red-500">*</span></label>
          <select 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="herbalife"
            value={formData.herbalife}
            onChange={handleInputChange} 
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
        {productos.map((product, index) => (
        <div key={index} className="flex items-center mb-4">
          <input
            type="checkbox"
            className="mr-2"
            onChange={() => handleCheckboxChange(index)}
            checked={!!selectedProducts[index]}
          />
          <div className="flex-1">
            <span className="block text-lg font-semibold">{product.name}</span>
            <div className="flex items-center mt-1">
              <span className="mr-2">Quantity</span>
              <select
                className="border rounded px-2 py-1"
                value={selectedProducts[index]?.quantity || 1}
                onChange={(e) => handleQuantityChange(index, e.target.value)}
                disabled={!selectedProducts[index]}
              >
                {[...Array(10).keys()].map(n => (
                  <option key={n} value={n + 1}>{n + 1}</option>
                ))}
              </select>
            </div>
          </div>
          <span className="text-lg font-semibold ml-4">${product.price.toFixed(2)}</span>
        </div>
      ))}
      <hr className="my-4" />
      <div className="text-right">
        <div className="mb-2">Subtotal <span className="ml-4">${subtotal}</span></div>
        <div className="mb-2">Tax <span className="ml-4">${tax}</span></div>
        <div className="mb-2">Shipping <span className="ml-4">${shipping.toFixed(2)}</span></div>
        <div className="font-bold text-lg">Total <span className="ml-4">${total}</span></div>
      </div>
        <div className="mb-4">
          <p className="font-bold">Para el pago, ¿cuál prefieres? <span className="text-red-500">*</span></p>
          <div className="flex items-center mb-2">
            <select 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pago"
              value={formData.pago}
              onChange={handleInputChange}
              required>
                <option value="" disabled selected>Por favor seleccione</option>
                <option value="zelle">Zelle</option>
                <option value="venmo">Venmo</option>
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