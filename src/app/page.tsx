import Image from "next/image"
import logo from "./../public/logo.png"
function page() {
  return (
    <main className="w-auto h-auto bg-black">
      <nav className="bg-black">
        <div>
          <Image className="w-96 ml-10 mt-8" src={logo} alt="logo"/>
        </div>
      </nav>
    </main>
  )
}

export default page