import { useState } from "react";
import banner from "./img/Banner.png";
import menu from "./img/Menu.jpg";
import usa from "./img/estados-unidos.png";
import puertoRico from "./img/puerto-rico.png";

function App() {
  const [paymentMethod, setPaymentMethod] = useState('');
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="bg-blue-500 w-full py-4">
        <h1 className="text-white text-3xl font-bold text-center">ATOMIC ENERGY</h1>
      </header>
      <div><img src={banner} alt="banner" height="50px" width="900px" className="mt-7"/></div>

      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-4xl mt-4">
        <div className="font-bold">NEW ENERGY DISTRIBUTOR ⚡️</div>
        <div className="text-gray-700 mt-4 flex items-center">
          Shipping across US and PR 
          <span className="ml-2">
            <img src={usa} alt="United States" height="20px" width="20px"/>
          </span>
          <span className="ml-2">
            <img src={puertoRico} alt="Puerto Rico" height="20px" width="20px"/>
          </span>
        </div>

        <hr className="my-4 border-t border-gray-300" />
        <div className="text-left mb-4">
          <p className="text-gray-700 mt-6 mb-6">Each Tea includes, Liftoff, Herbal Tea, Collagen, and Sugar-Free Flavoring.</p>
          <p className="font-bold mt-6 mb-6">⚡️160mg caffeine</p>
          <p className="font-bold mt-6 mb-6">⚡️Vitamins A, B6, B12, C, D, and E</p>
          <p className="font-bold mt-6 mb-6">⚡️Collagen</p>
          <p className="font-bold mt-6 mb-6">⚡️Each kit contains 1g of sugar, 0g fat, and ~7g of carbohydrates depending on the flavor.</p>
          <p className="text-gray-700 mt-6 mb-6">
            🥤Simply place all the ingredients in a shaker cup with water, mix well, and serve in a 32oz glass filled with ice🧊. ENJOY 😋
          </p>
          <p className="text-gray-700 mt-6 mb-6">
            Let's choose your flavors👇🏽
          </p>
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
          <img src={menu} alt="Load image" width="500px" height="500px" className="ml-auto mr-auto mt-auto mb-auto"/>
        </div>
        <div className="mb-4">
          <h2 className="font-bold uppercase">$10 each, <span className="normal-case"> minimum 3 per order</span></h2>
          <h3 className="text-gray-400 italic">$5 flat shipping cost for the package of 3 Mega Tea Kits</h3>
        </div>
        <hr className="my-4 border-t border-gray-300" />
        <div className="mb-4">
          <p className="font-bold">What flavor would you like for your order this time?</p>
          <textarea 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none overflow-hidden"
            placeholder="Write your preferred flavor"
            required
            rows="1"
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = (e.target.scrollHeight) + "px";
            }}
          ></textarea>
        </div>
        <div className="mb-4">
          <p>For payment, which do you prefer?</p>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="zelle"
              name="paymentMethod"
              value="zelle"
              className="mr-2"
              checked={paymentMethod === 'zelle'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="zelle">Zelle</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="venmo"
              name="paymentMethod"
              value="venmo"
              className="mr-2"
              checked={paymentMethod === 'venmo'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="venmo">Venmo</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="Apple Pay"
              name="paymentMethod"
              value="Apple Pay"
              className="mr-2"
              checked={paymentMethod === 'Apple Pay'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="Apple Pay">Apple Pay</label>
          </div>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Order
          </button>
        </div>
      </form>
      <footer className="bg-blue-500 w-full py-4 mt-auto">
        <p className="text-white text-center text-sm">&copy; 2024 Brayan Alexander Salazar Reyes. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;