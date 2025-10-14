import HeroDescription from "./hero/HeroDescription"
import HeroImage from "./hero/HeroImage"
function Hero() {
  return (
    <div id="Hero" className="relative dark:bg-background-dark flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-7xl flex-1">
            <div className="@container">
              <div className="flex flex-col gap-10 px-4 py-10 @[864px]:flex-row @[864px]:items-center">
                <HeroDescription />
                <HeroImage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
