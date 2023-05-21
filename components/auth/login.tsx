import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  description: string;
  linkSignIn: string;
}

function Auth({ description = "Lorem ipsum dolor sit amet consectetur adipisicing elit.", linkSignIn = "https://www.deco.cx/pt" }: Props) {
  return (
    <div class="h-screen w-full font-sans bg-[#e6e6e6] flex flex-col items-center justify-center">
      <div class="bg-white flex flex-col items-center justify-center p-16 w-[600px] h-[668px] shadow-md m-x-[420px]">
        <form class="flex items-center justify-center w-full flex-col gap-6">
          <h1 class="text-[#292929] text-[48px]">Log in</h1>
          <h3 class="text-[#292929] text-[18px]">{description}</h3>

          <div class="flex flex-col gap-y-2 w-full">
            <label htmlFor="">E-mail</label>
            <input
              class="border border-[#AAAAAA] shadow-sm h-10"
              type="email"
              name="email"
              required
            />
          </div>

          <div class="flex flex-col gap-y-2 w-full">
            <label htmlFor="">Password</label>
            <input
              class="border border-[#AAAAAA] shadow-sm h-10"
              type="password"
              name="password"
              required
            />
          </div>

          <button class="bg-[#273746] font-sans text-[16px] text-white h-10 w-full">
            Sign Up
          </button>
          <button class="flex items-center justify-center bg-[#FFFFFF] border border-[#6D8B61] font-sans text-[16px] text-[#546F4A] h-10 w-full gap-2 focus:border-[#546F4A]">
            <Icon id="Facebook" class="w-6 h-6" strokeWidth={2}></Icon>{" "}
            Sign up with Facebook
          </button>

          <p>
            Already have an account?{" "}
            <a href={linkSignIn} class="cursor-pointer underline">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Auth;
