import CabinView from "@/components/CabinView";
import { getCabin } from "@/lib/data-service";
import Head from "next/head";
import { useRouter } from "next/router";

export async function getServerSideProps({ params }) {
  const cabin = await getCabin(params.cabinId);
  return { props: { cabin } };
}

function Cabin({ cabin }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Cabin {router.query.cabinId} / The Wild Oasis</title>
      </Head>
      <div className="max-w-6xl mx-auto mt-8 px-8 py-12">
        <CabinView cabin={cabin} />
      </div>
    </>
  );
}

export default Cabin;
