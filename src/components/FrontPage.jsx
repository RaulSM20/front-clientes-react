export const FrontPage = () => {
  return (
    <>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Productos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                className="h-48 w-full object-cover"
                src="https://via.placeholder.com/300"
                alt="Producto 1"
              />
              <h3 className="text-xl font-semibold mt-4">Producto 1</h3>
              <p className="text-gray-700 mt-2">Descripción del producto 1.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                className="h-48 w-full object-cover"
                src="https://via.placeholder.com/300"
                alt="Producto 2"
              />
              <h3 className="text-xl font-semibold mt-4">Producto 2</h3>
              <p className="text-gray-700 mt-2">Descripción del producto 2.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                className="h-48 w-full object-cover"
                src="https://via.placeholder.com/300"
                alt="Producto 3"
              />
              <h3 className="text-xl font-semibold mt-4">Producto 3</h3>
              <p className="text-gray-700 mt-2">Descripción del producto 3.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Nuevos Productos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                className="h-48 w-full object-cover"
                src="https://via.placeholder.com/300"
                alt="Producto 4"
              />
              <h3 className="text-xl font-semibold mt-4">Producto 4</h3>
              <p className="text-gray-700 mt-2">Descripción del producto 4.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                className="h-48 w-full object-cover"
                src="https://via.placeholder.com/300"
                alt="Producto 5"
              />
              <h3 className="text-xl font-semibold mt-4">Producto 5</h3>
              <p className="text-gray-700 mt-2">Descripción del producto 5.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                className="h-48 w-full object-cover"
                src="https://via.placeholder.com/300"
                alt="Producto 6"
              />
              <h3 className="text-xl font-semibold mt-4">Producto 6</h3>
              <p className="text-gray-700 mt-2">Descripción del producto 6.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Sobre Nosotros</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700">
              Somos una tienda comprometida con ofrecer productos de alta
              calidad a precios competitivos. Nuestra misión es satisfacer a
              nuestros clientes con una experiencia de compra excepcional.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
