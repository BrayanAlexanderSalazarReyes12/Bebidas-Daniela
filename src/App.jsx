import { useState } from "react";

function App() {
  const [paymentMethod, setPaymentMethod] = useState('');
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="bg-blue-500 w-full py-4">
        <h1 className="text-white text-3xl font-bold text-center">NOMBRE DE LA EMPRESA</h1>
      </header>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg mt-4">
        <div className="text-gray-700 mt-4">Envios en todo US</div>
        <hr className="my-4 border-t border-gray-300" />
        <div className="text-left mb-4">
          <p className="text-gray-700">Texto de prueba: Este es un texto de prueba para reemplazar el contenido original.</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">First Name</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">Last Name</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Shipping Address</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Street Address" required />
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">City</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" placeholder="City" required />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">State/Province</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="state" type="text" placeholder="State/Province" required />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zip">Postal/Zip Code</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="zip" type="text" placeholder="Postal/Zip Code" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone Number</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="(000) 000-0000" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="social">Instagram/Tiktok name</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="social" type="text" placeholder="Instagram/Tiktok name" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="herbalife">Have you ever been signed up as an Herbalife Distributor or Preferred Member?</label>
          <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="herbalife" required>
            <option value="" disabled selected>Please Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="mb-4">
          <img src="ruta-de-la-imagen" alt="Cargar imagen" className="h-10 mr-2" />
        </div>
        <div className="mb-4">
          <h2 className="font-bold uppercase">$1 cada uno, <span className="normal-case"> minimo 3 por orden</span></h2>
          <h3 className="text-gray-400 italic">costo de envios y la cantidad de cada paquete</h3>
        </div>
        <hr className="my-4 border-t border-gray-300" />
        <div className="mb-4">
          <p className="font-bold">Que sabor quisiera su orden en esta ocasión?</p>
          <textarea 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none overflow-hidden"
            placeholder="Escriba su sabor preferido"
            required
            rows="1"
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = (e.target.scrollHeight) + "px";
            }}
          ></textarea>
        </div>
        <div className="mb-4">
          <p>Para hacer el pago, ¿cuál prefieres?</p>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="creditCard"
              name="paymentMethod"
              value="creditCard"
              className="mr-2"
              checked={paymentMethod === 'creditCard'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="creditCard">Tarjeta de crédito</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="paypal"
              name="paymentMethod"
              value="paypal"
              className="mr-2"
              checked={paymentMethod === 'paypal'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="paypal">PayPal</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="other"
              name="paymentMethod"
              value="other"
              className="mr-2"
              checked={paymentMethod === 'other'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="other">Otro</label>
          </div>
          {paymentMethod === 'other' && (
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none overflow-hidden"
              placeholder="Por favor especifique su método de pago"
              required
              rows="1"
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = e.target.scrollHeight + 'px';
              }}
            ></textarea>
          )}
        </div>
        
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
      </form>
    </div>
  );
}

export default App;