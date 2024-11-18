// On-Demand-ISR
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await res.revalidate("/");
    return res.json({ revaildate: true });
    // http://localhost:3000/api/revalidate
    // 이 페이지에 들어갔다가 메인으로 가면 새로고침 됨
  } catch (err) {
    console.error(err);
    res.status(500).send("Revaildation Failed");
  }
};

export default handler;
