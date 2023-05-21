import type { Image as LiveImage } from "deco-sites/std/components/types.ts";


export interface Props {
  logo: LiveImage;
  alt: string;
}

const Header = ( { logo, alt }: Props) => {
  return(
    <nav className="w-full max-h-40 flex items-center justify-center flex-wrap">
      <div className="mr-8 ml-8 h-20 w-full flex items-center p-2 max-sm:justify-center">
          <a href={"/"}>
            <img src={logo} class="h-16 w-24" alt={alt} />
          </a>
      </div>
    </nav>
  )
}

export default Header;