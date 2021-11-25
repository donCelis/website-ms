import Link from "next/link";
import Header_page from "@components/header-page";
import Layout from "@components/layout";

import "@styles/single-activity.scss";

const Single_activity = () => {
  const data_head = {
    title: "Single page",
  };

  return (
    <Layout {...data_head}>
      <Header_page>
        <Link href="/activities">
          <a className="back-to">
            <figure>
              <img src="/images/small-arrow-left.svg" alt="small-arrow-left" />
            </figure>
            Volver a Actividades
          </a>
        </Link>
      </Header_page>
    </Layout>
  );
};
export default Single_activity;
