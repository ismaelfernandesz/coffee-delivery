import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { iCoffee } from "../../interfaces/iCoffe";
import { CoffeeItem } from './components/CoffeItem'

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { bannerCoffee, coffees } from '../../assets/images'

import { 
    MenuContainer, 
    Advantage, 
    AdvantageIcon, 
    BannerContent, 
    AdvantageContainer, 
    BannerContainer, 
    MenuContent 
} from "./styles";
import { CartContext } from "../../contexts/Cart";


let coffeeItems: iCoffee[] = [
    {id: 1, image: coffees.expresso, types: ["Tradicional"], name: "Expresso Tradicional", description: "O tradicional café feito com água quente e grãos moídos", value: 9.90},
    {id: 2, image: coffees.americano, types: ["Tradicional"], name: "Expresso Americado", description: "Expresso diluído, menos intenso que o tradicional", value: 8.50},
    {id: 3, image: coffees.expressoCremoso, types: ["Tradicional"], name: "Expresso Cremoso", description: "Expresso diluído, menos intenso que o tradicional", value: 11.90},
    {id: 4, image: coffees.cafeGelado , types: ["Tradicional", "Gelado"], name: "Expresso Gelado", description: "Bebida preparada com café expresso e cubos de gelo", value: 12},
    {id: 5, image: coffees.cafeComLeite, types: ["Tradicional", "Com leite"], name: "Café com Leite", description: "Meio a meio de expresso tradicional com leite vaporizado", value: 7.45},
    {id: 6, image: coffees.latte, types: ["Tradicional", "Com leite"], name: "Latte", description: "Uma dose de café expresso com o dobro de leite e espuma cremosa", value: 19.80},
    {id: 7, image: coffees.capuccino, types: ["Tradicional", "Com leite"], name: "Capuccino", description: "Bebida com canela feita de doses iguais de café, leite e espuma", value: 10.5},
    {id: 8, image: coffees.macchiato, types: ["Tradicional", "Com leite"], name: "Macchiato", description: "Café expresso misturado com um pouco de leite quente e espuma", value: 17.90},
    {id: 9, image: coffees.mocaccino, types: ["Tradicional", "Com leite"], name: "Mocaccino", description: "Café expresso com calda de chocolate, pouco leite e espuma", value: 12.90},
    {id: 10, image: coffees.chocolateQuente, types: ["Especial", "Com leite"], name: "Chocolate Quente", description: "Bebida feita com chocolate dissolvido no leite quente e café", value: 8.75},
    {id: 11, image: coffees.cubano, types: ["Especial", "Alcoólico", "Gelado"], name: "Cubano", description: "Drink gelado de café expresso com rum, creme de leite e hortelã", value: 14},
    {id: 12, image: coffees.havaiano, types: ["Especial"], name: "Havaiano", description: "Bebida adocicada preparada com café e leite de coco", value: 8.90},
    {id: 13, image: coffees.arabe, types: ["Especial"], name: "Árabe", description: "Bebida preparada com grãos de café árabe e especiarias", value: 11.10},
    {id: 14, image: coffees.irlandes, types: ["Especial", "Alcoólico"], name: "Irlandês", description: "Bebida a base de café, uísque irlandês, açúcar e chantilly", value: 15.90},
]

export function Home() {
    const [coffees, setCoffees] = useState<iCoffee[]>(coffeeItems);

    return (
        <main>
            <BannerContainer>
                <section className="container">
                    <BannerContent>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
                        <AdvantageContainer>
                            <Advantage>
                                <AdvantageIcon variant="yellow-dark">
                                    <ShoppingCart size={16} weight="fill" />
                                </AdvantageIcon>
                                <span>Compra simples e segura</span>
                            </Advantage>
                            <Advantage>
                                <AdvantageIcon variant="gray-800">
                                    <Package size={16} weight="fill" />
                                </AdvantageIcon>
                                <span>Embalagem mantém o café intacto</span>
                            </Advantage>
                            <Advantage>
                                <AdvantageIcon variant="yellow">
                                    <Timer size={16} weight="fill" />
                                </AdvantageIcon>
                                <span>Entrega rápida e rastreada</span>
                            </Advantage>
                            <Advantage>
                                <AdvantageIcon variant="purple">
                                    <Coffee size={16} weight="fill" />
                                </AdvantageIcon>
                                <span>O café chega fresquinho até você</span>
                            </Advantage>
                        </AdvantageContainer>
                    </BannerContent>
                    <img src={bannerCoffee} alt="Image contendo um copo de café e diversos grãos" />
                </section>
            </BannerContainer>

            <div className="container">
                <MenuContainer>
                    <h2>Nossos cafés</h2>
                    <MenuContent>
                        {coffees.map(coffee => 
                            <CoffeeItem key={coffee.id} coffee={coffee}/>
                        )}
                    </MenuContent>
                </MenuContainer>
            </div>
        </main>
    )
}