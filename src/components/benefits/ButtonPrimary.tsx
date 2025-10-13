type ButtonPrimaryProps = {
  text: string
}

const ButtonPrimary = ({ text }: ButtonPrimaryProps) => (
  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-accent-green text-primary font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors duration-300">
    <span className="truncate">{text}</span>
  </button>
)

export default ButtonPrimary
