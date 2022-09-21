import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { deliveryman } from "../../assets/images";
import { DeliveryInfo, InfoContent, InfoIcon, InfoItem, SuccessContainer } from "./styles";

export function Success() {

    return (
        <div className="container">
            <SuccessContainer>
                <section>
                    <h1>Uhu! Pedido confirmado</h1>
                    <h2>Agora é só aguardar que logo o café chegará até você</h2>

                    <DeliveryInfo>
                        <InfoItem>
                            <InfoIcon variant="purple">
                                <MapPin />
                            </InfoIcon>
                            <InfoContent>
                                <span>Entrega em <strong>Rua João Martinelli, 102</strong></span>
                                <span>Farrapos - Porto Alegre, RS</span>
                            </InfoContent>
                        </InfoItem>
                        <InfoItem>
                            <InfoIcon variant="yellow">
                                <Timer />
                            </InfoIcon>
                            <InfoContent>
                                <span>Previsão de entrega</span>
                                <strong>20 min - 30 min</strong>
                            </InfoContent>
                        </InfoItem>
                        <InfoItem>
                            <InfoIcon>
                                <CurrencyDollar />
                            </InfoIcon>
                            <InfoContent>
                                <span>Pagamento na entrega</span>
                                <strong>Cartão de Crédito</strong>
                            </InfoContent>
                        </InfoItem>
                    </DeliveryInfo>
                </section>
                <div>
                    <img src={deliveryman} alt="Desenho de entregador dirigindo uma moto" />
                </div>
            </SuccessContainer>
        </div>
    )
}