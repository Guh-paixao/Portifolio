import ContactIndicator from "@/components/frame/contactIndicator";
import Presentation from "@/components/frame/presentation";
import NavMenu from "@/components/navMenu";


export default function Home() {
  return (
    <div className="flex flex-1 ml-48 items-center">
      <Presentation />
      <div className="flex mr-24">
        <NavMenu />
      </div>
      <div className="flex">
        <ContactIndicator />
      </div>
    </div>
  )
}