import properties from "../assets/properties"
import BathroomSVG from "./SVGs/BathroomSVG"
import BedroomSvg from "./SVGs/BedroomSvg"

const Properties = () => {
  return (
    <section>
    <div className="container">
      <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
        <span className="mb-2 block text-lg font-semibold text-primary">
          Properties
        </span>
        <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
          Grab your Dream Property
        </h2>
        <p className="text-base text-body-color dark:text-dark-6">
          There are many variations of passages of Lorem Ipsum available
          but the majority have suffered alteration in some form.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <div key={property.id} className="p-4 bg-white rounded-lg border border-gray-600/10">
          <img className="width-" src={property.img} alt={property.name} />

          <div className="p-6">
            <h4 className="text-2xl font-bold cursor-pointer">{property.name}</h4>
            <div className="mt-2">
              <span className="text-xl font-extrabold text-blue-600">{property.rate}</span> /M
            </div>
          </div>
          <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
            <div className="flex items-center">
              <BedroomSvg className="w-5 h-5 mr-1" /> 
              <p><span className="font-bold text-gray-900">{property.bedrooms}</span> Bedrooms</p>
            </div>
            <div className="flex items-center">
              <BathroomSVG className="w-5 h-5 mr-1" /> 
              <p><span className="font-bold text-gray-900">{property.bathrooms}</span> Bathrooms</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>

  </section>
  )
}

export default Properties