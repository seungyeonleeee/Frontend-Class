import {
  useParams,
  useLocation,
  Outlet,
  Link,
  useMatch,
} from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinInfo, fetchCoinPrice } from "../api";
import { CoinInterface } from "./Coins";
import { Helmet } from "react-helmet";

// Style
const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
const Header = styled.header`
  font-size: 32px;
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.accentColor};
`;
const Loader = styled.span`
  color: ${({ theme }) => theme.accentColor};
  font-size: 22px;
`;
const Overview = styled.div`
  width: 600px;
  color: ${({ theme }) => theme.bgColor};
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 20px;
  border-radius: 10px;
  background: ${({ theme }) => theme.textColor};
  span:first-child {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.accentColor};
  }
`;
const Description = styled.div`
  width: 600px;
  background: ${({ theme }) => theme.accentColor};
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
const Tabs = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Tab = styled.span<IsActice>`
  flex: 1;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  background: ${(props) =>
    props.isActive ? props.theme.textColor : props.theme.accentColor};
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  padding: 8px 0;
  border-radius: 8px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.accentColor};
  }
  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;

// Type
interface RouterParams {
  coinId: string;
}
interface LocationState {
  state: string;
}
// interface InfoData {
//   id: string;
//   name: string;
//   symbol: string;
//   rank: number;
//   is_new: boolean;
//   is_active: boolean;
//   type: string;
// }
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
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: string;
      percent_from_price_ath: number;
    };
  };
}
interface IsActice {
  isActive: boolean;
}

const Coin = () => {
  // const [loading, setLoading] = useState(true);

  // const [info, setInfo] = useState<InfoData>();
  // const [priceInfo, setPriceInfo] = useState<PriceData>();

  // Link값으로 받아오기
  const { state } = useLocation() as LocationState;
  // console.log(state);

  // useParams
  const { coinId } = useParams<RouterParams | any>();
  // console.log(coinId);

  // useMatch
  // 내가 인자값으로 정의해놓은 페이지에 도착하면 객체 전달 // 아니면 null 반환
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  // console.log(priceMatch);
  // console.log(chartMatch);

  // useEffect(() => {
  //   (async () => {
  //     const infoData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
  //       )
  //     ).json();
  //     // console.log(infoData);
  //     const priceData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
  //       )
  //     ).json();
  //     // console.log(priceData);

  //     setInfo(infoData);
  //     setPriceInfo(priceData);
  //     setLoading(false);
  //   })();
  // }, []);

  // ReactQeury로 가져오기
  // { key=value: name } : 구조분해할당 후 이름 바꾸기
  const { isLoading: infoLoading, data: infoData } = useQuery<CoinInterface>({
    queryKey: ["info", coinId],
    queryFn: () => fetchCoinInfo(coinId),
  });
  const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>({
    queryKey: ["price", coinId],
    queryFn: () => fetchCoinPrice(coinId),
    // refetchInterval: 5000, // 5초에 한번씩 업데이트
  });

  const loading = infoLoading || priceLoading;

  return (
    <Container>
      <Helmet>
        <title>Coin</title>
      </Helmet>
      <Header>
        <Title>
          {state ? state : loading ? "Loading ..." : infoData?.name}
        </Title>
        {/* 주소값으로 즐겨찾기를 해놓은 상태라면, 부모를 거치지 않았기 때문에 state가 뜨지 않음 */}
      </Header>
      {loading ? (
        <Loader>Loading ...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank: </span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol: </span>
              <span>{infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source: </span>
              <span>{infoData?.is_active ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>
            🎇 Information of {infoData?.type} type: Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Facilis nostrum possimus, laborum
            totam voluptates natus praesentium voluptatibus ad ratione
            perspiciatis minima? Earum cupiditate temporibus esse eaque aut
            optio ut id.
          </Description>
          <Overview>
            <OverviewItem>
              <span>Total Supply: </span>
              <span>{priceData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply: </span>
              <span>{priceData?.max_supply}</span>
            </OverviewItem>
          </Overview>

          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>

          <Outlet />
        </>
      )}
    </Container>
  );
};

export default Coin;
