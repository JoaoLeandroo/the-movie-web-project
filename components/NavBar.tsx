import Container from "./Container";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="bg-[#585858a1] sticky top-0 shadow-xl">
      <Container>
        <div className="h-9 sm:h-20 flex items-center justify-between">
          <h1 className="font-bold ">The Movies</h1>

          <div>
            <input
              type="text"
              placeholder="Busque um filme"
              className="
                w-[300px]
                px-3 
                py-2 
                rounded-l-full
                bg-[#585858] 
                outline-none
                text-black
                border border-slate-500
                focus:border-white
                "
            />
            <button className="
                bg-[#585858]
                px-3
                py-2
                rounded-r-full
                border border-slate-500
            "
            >search</button>
          </div>

          <div>testes</div>
        </div>
      </Container>
    </header>
  );
};

export default NavBar;
