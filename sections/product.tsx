import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  produto: string;
  image: LiveImage;
  de: number;
  por: number;
  link: string;
  link2: string;
  link3: string;
  link4: string;
  link5: string;
}

export default function Product(
  { produto, image, de, por, link, link2, link3, link4, link5 }: Props,
) {
  return (
    <main class="flex w-screen h-screen justify-center items-center font-sans ">
      <div class="bg-gray-200 flex justify-around w-[65vw] h-[40vw] shadow-2xl items-center rounded-lg max-sm:w-[80vw] max-sm:h-[80%] max-sm:flex max-sm:flex-col">
        <div class=" w-[20vw] h-[30vw] max-sm:bg-black max-sm:w-[80%] max-sm:h-[40%]">
          <img class="w-full h-full rounded-lg " src={image}></img>
        </div>
        <div class="bg-white rounded-lg shadow-xl w-[25vw] h-[30vw] flex flex-col items-center max-sm:w-[80%] max-sm:h-[40%] ">
          <div class="text-center max-sm:mt-2">
            <p class="text-3xl mb-4 max-sm:mb-0 max-sm:text-2xl">Tamanho:</p>
            <ul class="mt-7 flex flex-col justify-center items-center max-sm:mt-4 max-sm:flex-row ">
              <li class="my-4 w-20 border-[1px] border-gray-400 rounded-3xl max-sm:mt-1">
                <a href={link}>Pequeno</a>
              </li>
              <li class="my-4 w-20 border-[1px] border-gray-400 rounded-3xl max-sm:mt-1">
                <a href={link2}>Medio</a>
              </li>
              <li class="my-4 w-20 border-[1px] border-gray-400 rounded-3xl max-sm:mt-1">
                <a href={link2}>Grande</a>
              </li>
            </ul>
          </div>
          <div class=" ml-40 flex flex-col justify-start w-full max-sm:ml-20">
            <label class="text-lg text-red-600 font-semibold">De: {de}$</label>
            <label class="text-lg text-green-500 font-semibold">
              Por: {por}$
            </label>
          </div>
          <button
            src={link4}
            class=" w-60 h-8 bg-blue-300 rounded-lg text-white max-sm:mt-2"
          >
            Adicionar ao Carrinho
          </button>
          <button
            src={link5}
            class="mt-1 w-60 h-8 bg-blue-600 rounded-lg text-white"
          >
            Comprar
          </button>
        </div>
      </div>
    </main>
  );
}
