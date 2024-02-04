import Container from "./Container";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="bg-[#585858a1] sticky top-0 shadow-xl">
      <Container>
        <div className="h-9 sm:h-14 flex items-center justify-between">
          <h1 className="font-bold ">The Movies</h1>

          <div>
            <input
              type="text"
              placeholder="Busque um filme"
              className="
                w-[300px]
                px-3 
                py-1 
                rounded-md 
                bg-[#F2F2F2] 
                outline-none
                text-black
                focus:border-[5px] border-green-300
                "
            />
          </div>

          <div>testes</div>
        </div>
      </Container>
    </header>
  );
};

export default NavBar;
