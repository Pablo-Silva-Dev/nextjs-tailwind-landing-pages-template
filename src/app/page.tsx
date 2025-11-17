"use client";
import DeliveryOptionsCard from "@/components/cards/DeliveryOptionsCard";
import EcommerceHeader from "@/components/elements/EcommerceHeader";
import StarsParticlesHeroSection from "@/components/elements/StarsParticlesHeroSection";
import Cart from "@/components/navigation/Cart";
import useTheme from "@/hooks/useTheme";
import { mockedAddresses, mockedProducts } from "@/mocks";
import { useState } from "react";

export default function Home() {
  const [openCart, setOpenCart] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleToggleCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <div className="font-sans overflow-x-hidden">
      <main className="flex flex-col">
        <EcommerceHeader.Root>
          <EcommerceHeader.LeftContainer></EcommerceHeader.LeftContainer>
          <EcommerceHeader.RightContainer>
            <EcommerceHeader.CartButton
              onClick={handleToggleCart}
            ></EcommerceHeader.CartButton>
          </EcommerceHeader.RightContainer>
        </EcommerceHeader.Root>
        <StarsParticlesHeroSection
          className="bg-gradient-to-b from-primar-500 to-black"
          animationSpeed="slow"
          children={
            <div className="w-full flex flex-col justify-center items-center gap-6 z-10 relative p-8">
              <button className="bg-transparent border-primary-500 border-2 hover:bg-primary-500 w-fit p-4 rounded-md text-white">
                Hover me
              </button>
              <span className="text-white">Welcome to our page</span>
            </div>
          }
        />
        <button onClick={handleToggleTheme}>Toggle theme</button>
        <Cart
          onToggleOpen={handleToggleCart}
          isOpen={openCart}
          products={mockedProducts}
        />
        <DeliveryOptionsCard
          address={mockedAddresses[0]}
          options={[
            {
              id: "1",
              label: "Mototáxi",
              deliveryEstimate: "30-40 minutos",
              price: 9.99,
            },
            {
              id: "2",
              label: "Retirar na loja",
              deliveryEstimate: "Diponível em até 1 hora",
              price: 0,
            },
          ]}
        />
      </main>
    </div>
  );
}
