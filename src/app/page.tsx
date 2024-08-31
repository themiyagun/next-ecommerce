import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"

const HomePage = () => {
  return (
    <div className=''>
      <Slider/>
      <div className="mt-24 md:px-8 lg:px-16 xl:px-16 xl:32 2xl:px:64">
        <h1 className="">Featured products</h1>
        <ProductList />
      </div>
    </div>
  )
}

export default HomePage