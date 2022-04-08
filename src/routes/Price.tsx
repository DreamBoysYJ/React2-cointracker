import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinTickers } from "../api";
import { HtmlHTMLAttributes } from "react";

interface PriceProps {
  coinId: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const PriceList = styled.ul`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const List = styled.li`
  padding: 10px;
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 10px;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 600;
`;

interface IItemProps extends HtmlHTMLAttributes<HTMLDivElement> {
  isNeagtive: boolean;
}

const Item = styled.li<IItemProps>`
  color: ${(props) => (props.isNeagtive ? "red" : "blue")};
`;

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<PriceData>(["price", coinId], () =>
    fetchCoinTickers(coinId)
  );

  return (
    <PriceList>
      <List>Market Cap: ${data?.quotes.USD.market_cap}</List>
      <List>Now: ${data?.quotes.USD.price.toFixed(2)}</List>
      <List>1 hour: {data?.quotes.USD.percent_change_1h}%</List>
      <List>24 hours: {data?.quotes.USD.percent_change_24h}%</List>
      <List>7 days: {data?.quotes.USD.percent_change_7d}%</List>
      <List>30 days: {data?.quotes.USD.percent_change_30d}%</List>
    </PriceList>
  );
}

export default Price;
